import React from "react";
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
		maxWidth: "50%",
		justifyItems: "center",
		padding: "1rem 5rem 1rem 5rem"
	},
	header: {
		fontWeight: 500,
		height:"30%"
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
