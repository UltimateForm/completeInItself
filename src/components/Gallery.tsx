import React from "react";
import { isMobile } from "react-device-detect";
import * as Artwork from "../images/artwork";

const styles: { [key: string]: React.CSSProperties } = {
	img: {
		maxWidth:"100%",
		marginBottom:"1rem",
		maxHeight:"90vh"
	},
	gallery:{
		width: "-webkit-fill-available",
		display: "inline-grid",
		maxWidth: isMobile? "100%":"50%",
		justifyItems: "center",
		padding: isMobile? "1rem" : "1rem 5rem 1rem 5rem"
	}
};

export function Gallery() {
	return (
		<div style={styles.gallery}>
			{Object.entries(Artwork).map(([key, value]) => (
				<img key={key} style={styles.img} src={value} alt={key} />
			))}
		</div>
	);
}
