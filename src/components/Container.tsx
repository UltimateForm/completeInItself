import { url } from "inspector";
import React from "react";
import { ComissionInfo } from "./ComissionInfo";
import { Gallery } from "./Gallery";
import ScrollAnimation from "react-animate-on-scroll";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		backgroundColor: "rgba(0,0,0,0.5)", //TODO: ask irena for correct transparency
		minHeight: "100vh",
		minWidth: "100vw",
	},
	grid: {
		display: "flex",
		flexDirection: "row",
		height: "100%",
		width: "100%",
		boxSizing: "border-box",
	},
	testCell: {
		padding: 5,
		backgroundImage: "url(../)",
	},
};

function clamp(num: number, min: number, max: number) {
	return num <= min ? min : num >= max ? max : num;
}

export function Container() {
	const [pageOffset, setPageOffset] = React.useState(0);
	const listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		console.log(winScroll / document.documentElement.clientHeight);

		setPageOffset(winScroll / document.documentElement.clientHeight);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	});

	return (
		<div style={styles.container}>
			<div style={styles.grid}>
				<div
					style={{
						height: "100vh",
						position: "sticky",
						top: 0,
						minWidth:"30%",
						marginLeft: `-${clamp(pageOffset * 100, 0, 30)}%`,
					}}
					className="composition"
				></div>
				<ComissionInfo />
				<Gallery />

			</div>
		</div>
	);
}
