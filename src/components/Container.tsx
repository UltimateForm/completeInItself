import React from "react";
import { ComissionInfo } from "./ComissionInfo";
import { Gallery } from "./Gallery";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		backgroundColor: "rgba(0,0,0,0.5)", // @TODO: ask irena for correct transparency
		minHeight: "100vh",
		minWidth: "100vw",
	},
	grid: {
		display: "flex",
		flexDirection: isMobile? "column" : "row",
		height: "100%",
		width: "100%",
		boxSizing: "border-box",
	},
})
function clamp(num: number, min: number, max: number) {
	return num <= min ? min : num >= max ? max : num;
}

export function Container() {
	const classes = useStyles();
	const [pageOffset, setPageOffset] = React.useState(0);
	const listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		setPageOffset(winScroll / document.documentElement.clientHeight);
	};

	React.useEffect(() => {
		window.scrollTo({ left: 0, behavior: "smooth" })
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	});

	return (
		<div className={classes.container}>
			<div className={classes.grid}>
				{!isMobile && (
					<>
					<div
						style={{
							height: "100vh",
							position: "sticky",
							top: 0,
							minWidth: "30%",
							marginLeft: `-${clamp(pageOffset * 100, 0, 30)}%`,
						}}
						className="composition"
					></div>
					</>
				)}
				<ComissionInfo />
				<Gallery />
			</div>
		</div>
	);
}
