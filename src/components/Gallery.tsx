import React from "react";
import { isMobile, engineName } from "react-device-detect";
import ScrollArrow from "./Scroll2TopButton";
import { makeStyles } from "@material-ui/styles";
import { getAlbumImages, Image } from "../api";
import Loader from "react-loader-spinner";

const albumHash = "lCFbQsC";

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
		borderRadius:"inherit"
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
		borderRadius:"6px",
		marginBottom: "1rem",
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
	img: { maxWidth: "100%",  maxHeight: "90vh", borderRadius:"inherit"},
});

export function Gallery(props: { images: Image[]; loading: boolean }) {
	const { loading, images } = props;
	const classes = useStyles(window.innerWidth);
	return (
		<div
			style={{ padding: isMobile ? "1rem 1rem 0 1rem" : "1rem 5rem 1rem 5rem" }}
			className={classes.galleryContainer}
		>
			{loading ? (
				<div style={{ alignSelf: "center" }}>
					<Loader type="Rings" color="#EDE6DE" height={80} width={80} />
				</div>
			) : (
				<>
					{images.map((i) => (
						<div className={classes.imgContainer} key={i.id}>
							{i.description && (
								<div className={classes.overlay} id="overlay">
									{i.description}
								</div>
							)}
							<img className={classes.img} src={i.link} alt={i.description} />
						</div>
					))}
				</>
			)}

			{isMobile && <ScrollArrow />}
		</div>
	);
}

export function GalleryContainer() {
	const [images, setImages] = React.useState<Image[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	React.useEffect(() => {
		(async function () {
			try {
				const albumImages = await getAlbumImages(albumHash);
				setLoading(() => {
					setImages(albumImages);
					return false;
				});
			} catch (error) {
				console.error(
					`Failed to load images from imgur album (${albumHash}), error: ${error}`
				);
			}
		})();
	}, []);
	return <Gallery images={images} loading={loading} />;
}
