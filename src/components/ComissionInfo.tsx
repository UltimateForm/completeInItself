import React from "react";
import { isMobile } from "react-device-detect";


//TODO: clean this lol
const styles: { [key: string]: React.CSSProperties } = {
	info: {
		display: "flex",
		flexDirection: "column",
		textAlign: "start",
		height: isMobile? "unset" : "100vh",
		position: isMobile? "relative" : "sticky",
		top: 5,
		minWidth: "35%",
		marginLeft: "1rem",
		marginRight: "1rem",
		marginBottom: isMobile? "1rem" : "unset"
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
};

const irenamail = "isavic149@gmail.com";

const comissions = [
	{ name: "Editing/colouring your artwork", price: "$20" },
	{ name: "Portrait", price: "$30" },
	{ name: "Character design", price: "$50" },
	{ name: "Book cover illustration", price: "$80" },
	{ name: "Fantasy artwork", price: "$50-100*" },
];

export function ComissionInfo() {
	return (
		<div style={styles.info}>
			<style
				dangerouslySetInnerHTML={{
					__html: [
						"li::before {",
						'  content: "⯈";',
						"  position: absolute;",
						"  left: -20px;",
						"}",
					].join("\n"),
				}}
			></style>
			<header style={styles.header}>
				<h1 style={styles.h1}>Commissions are open!</h1>
			</header>
			<div style={styles.majorSection}>
				<h2 style={styles.sectionHeader}>Pricings:</h2>
				<ul style={styles.ul}>
					{comissions.map((com) => (
						<li style={styles.li} key={com.name+"#"+com.price}>
							<div style={styles.divComissionLineContainer}>
								<a
									className="cancelhref"
									href={`mailto:${irenamail}?subject=${com.name}`}
								>
									{com.name}
								</a>
								<div style={styles.dotted}></div>
								<div>{com.price}</div>
							</div>
						</li>
					))}
				</ul>
				<span style={styles.note}>*Depending on complexity</span>
			</div>
			<span>If needed, PRINTING+SHIPING costs additional $10</span>
			<div style={styles.minorSection}>
				<h3 style={styles.sectionHeader}>How to order?</h3>
				<ul style={styles.ul}>
					<li style={styles.li}>
						<a
							href={`mailto:${irenamail}`}
							className="cancelhref"
							style={styles.li}
						>
							Email: {irenamail}
						</a>
					</li>
				</ul>
			</div>
			<div style={styles.minorSection}>
				<h3 style={styles.sectionHeader}>Payment options:</h3>
				<ul style={styles.ul}>
					<li style={styles.li}>
						Paypal or Western Union (fulll amount upfront or two instalments)
					</li>
				</ul>
			</div>
		</div>
	);
}
