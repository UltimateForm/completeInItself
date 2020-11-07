import React, { useState } from "react";
import "../App.css";

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<button
			onClick={scrollTop}
			style={{
				position: "sticky",
				width: "60px",
				height: "30px",
				color: "white",
				backgroundColor: "rgba(7, 59, 76, 0.5)",
				borderWidth: "thin thin 0 thin",
				borderColor: "white",
				borderRadius: "10px 10px 0 0",
				bottom: "0",
				display: showScroll ? "block": "none",
			}}
		>
			Back
		</button>
	);
};

export default ScrollArrow;
