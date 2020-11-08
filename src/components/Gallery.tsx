import React from "react";
import { isMobile, engineName } from "react-device-detect";
import * as Artwork from "../images/artwork";
import ScrollArrow from "./Scroll2TopButton";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	overlay: {
		width: "100%",
		color: "white",
		position: "absolute",
		background:
			"linear-gradient(to bottom, rgba(15, 32, 39, 0.5), transparent 100%)",
		padding: "1rem 0 1.5rem 0",
		opacity: "0%",
		transition: "opacity 1s",
	},
	imgContainer: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		width: "fit-content",
		flexDirection: "row-reverse",
		"&:hover #overlay": {
			display: "block",
			opacity: "100%",
			transition: "opacity 1s",
		},
	},
	galleryContainer: {
		width:
			engineName === "WebKit" || engineName === "Blink"
				? "-webkit-fill-available"
				: "-moz-fill-available",
		display: "inline-grid",
		maxWidth: (width) => (width > 768 ? "50%" : "100%"),
		justifyItems: "center",
		padding: "1rem 5rem",
	},
	img: { maxWidth: "100%", marginBottom: "1rem", maxHeight: "90vh" },
});

export function Gallery() {
	const classes = useStyles(window.innerWidth);
	return (
		<div
			style={{ padding: isMobile ? "1rem 1rem 0 1rem" : "1rem 5rem 1rem 5rem" }}
			className={classes.galleryContainer}
		>
			{Object.entries(Artwork).map(([key, value]) => (
				<div className={classes.imgContainer} key={key}>
					<div className={classes.overlay} id="overlay">
						{key.replace(/([A-Z])/g, " $1").trim()}
					</div>
					<img className={classes.img} src={value} alt={key} />
				</div>
			))}
			{isMobile && <ScrollArrow />}
		</div>
	);
}
