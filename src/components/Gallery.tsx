import React from "react";
import { isMobile } from "react-device-detect";
import * as Artwork from "../images/artwork";
import ScrollArrow from "./Scroll2TopButton";
import classes  from "./gallery.module.css";

export function Gallery() {
	return (
		<div
			style={{ padding: isMobile ? "1rem 1rem 0 1rem" : "1rem 5rem 1rem 5rem" }}
			className={classes.galleryContainer}
		>
			{Object.entries(Artwork).map(([key, value]) => (
				<div className={classes.imgContainer} key={key}>
					<div className={classes.overlay}>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
					<img src={value} alt={key}/>
				</div>
			))}
			{isMobile && <ScrollArrow />}
		</div>
	);
}
