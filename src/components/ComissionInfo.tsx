import React from "react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	info: {
		display: "flex",
		flexDirection: "column",
		textAlign: "start",
		height: isMobile ? "unset" : "100vh",
		position: isMobile ? "relative" : "sticky",
		top: 5,
		minWidth: "35%",
		marginLeft: "1rem",
		marginRight: "1rem",
		marginBottom: isMobile ? "1rem" : "unset",
	},
	h1: {
		fontWeight: 500,
		textTransform: "uppercase",
	},
	header: {
		textAlign: "center",
	},
	ul: {
		textAlign: "start",
		lineHeight: 1.5,
	},
	li: {
		position: "relative",
		display: "inline",
	},
	span: {
		display: "block",
	},
	minorSection: {
		fontSize: "medium",
		fontWeight: 500,
	},
	majorSection: {
		textTransform: "uppercase",
		fontWeight: 500,
		marginBottom: "1.1rem",
	},
	sectionHeader: {
		backgroundColor: "RGB(21.18%, 45.1%, 46.67%, 0.7)",
		width: "fit-content",
		padding: "5px",
	},
	dotted: {
		borderBottom: "4px dotted",
		marginBottom: "8px",
		marginLeft: "2px",
		marginRight: "2px",
	},
	divComissionLineContainer: {
		display: "grid",
		gridTemplateColumns: "auto 1fr auto",
	},
	content: {
		display: "flex",
		flexDirection: "column",
	},
	note: {
		fontSize: "medium",
		textTransform: "initial",
		textAlign: "end",
	},
});

const irenamail = "isavic149@gmail.com";

const comissions = [
	{ name: "Editing/colouring", price: "$20" },
	{ name: "Portrait", price: "$30" },
	{ name: "Character design", price: "$50" },
	{ name: "Book cover illustration", price: "$80" },
	{ name: "Fantasy artwork", price: "$50-100*" },
];

// @TODO: make this less dirty 
export function ComissionInfo() {
	const classes = useStyles();
	return (
		<div className={classes.info}>
			<style
				dangerouslySetInnerHTML={{
					__html: [
						"li::before {",
						'  content: url("https://ultimateform.github.io/completeInItself/sort-right.png");', //idc anymore, github duplicating basepath for no reason so here it is, go f*ck yourself
						"  position: absolute;",
						"  left: -20px;",
						"  color: white;",
						"}",
					].join("\n"),
				}}
			></style>
			<header className={classes.header}>
				<h1 className={classes.h1}>Commissions are open!</h1>
			</header>
			<div className={classes.majorSection}>
				<h2 className={classes.sectionHeader}>Pricings:</h2>
				<ul className={classes.ul}>
					{comissions.map((com) => (
						<li className={classes.li} key={com.name + "#" + com.price}>
							<div className={classes.divComissionLineContainer}>
								<a
									className="cancelhref"
									href={`mailto:${irenamail}?subject=${com.name}`}
								>
									{com.name}
								</a>
								<div className={classes.dotted}></div>
								<div>{com.price}</div>
							</div>
						</li>
					))}
				</ul>
				<span className={classes.note}>*Depending on complexity</span>
			</div>
			<span>If needed, PRINTING+SHIPPING costs additional $10</span>
			<div className={classes.minorSection}>
				<h3 className={classes.sectionHeader}>How to order?</h3>
				<ul className={classes.ul}>
					<li className={classes.li}>
						<a
							href={`mailto:${irenamail}`}
							className={["cancelhref", classes.li].join(" ")}
						>
							Email: {irenamail}
						</a>
					</li>
				</ul>
			</div>
			<div className={classes.minorSection}>
				<h3 className={classes.sectionHeader}>Payment options:</h3>
				<ul className={classes.ul}>
					<li className={classes.li}>
						Paypal or Western Union (fulll amount upfront or two instalments)
					</li>
				</ul>
			</div>
		</div>
	);
}
