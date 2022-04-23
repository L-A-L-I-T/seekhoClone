import React, { useState, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";
import Typewriter from "typewriter-effect";
const styles = createUseStyles({
	container: {
		marginTop: "-80px",
		height: "950px",
		overflow: "hidden",
		position: "relative",
	},
	backgroundShape: {
		margin: "0 auto",
		width: "100%",
		height: "700px",
		position: "absolute",
		top: "0px",
		zIndex: "-10",
	},
	text: {
		textAlign: "center",
		marginBottom: "20px",
		fontFamily: "'Poppins', sans-serif",
		letterSpacing: "2.7px",
		fontWeight: "700",
		lineHeight: "64px",
		color: "rgb(7, 36, 109)",
	},
	typewrite: {
		fontSize: "27px !important",
	},
	description: {
		color: "rgb(125, 136, 154)",
		margin: "0 auto",
		textAlign: "center",
		fontSize: "25px",
		letterSpacing: "0.76px",
		lineHeight: "26px",
	},
	heroSectionImgDiv: {},
	sectionImg: {
		width: "300px",
		left: "-200px",
		top: " 340px",
	},
	sectionText: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "15px",
		letterSpacing: "0.56px",
		fontWeight: "500",
		color: "rgb(7, 36, 109)",
		left: "-130px",
		top: "365px",
	},
	sectionText2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "13px",
		letterSpacing: "0.39px",
		fontWeight: "500",
		color: "rgb(7, 36, 109)",
		textAlign: "center",
		zIndex: "3",
		position: "absolute",
	},
	sectionImg2: {
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
		borderRadius: "5px",
		zIndex: "3",
		position: "absolute",
	},
	positionAbsolute: {
		position: "absolute",
	},
});

function HeroSection() {
	const classes = styles();
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [fontSize, setFontSize] = useState({ fontSize: "48px" });
	const [img, setImg] = useState({
		width: "600px",
		left: "50%",
		marginLeft: "-300px",
		top: "50%",
	});
	const [descWidth, setDescWidth] = useState({ width: "1054px" });
	const [img2, setImg2] = useState({
		width: "120px",
		right: "-60px",
		top: "200px",
	});
	const [text2, setText2] = useState({
		width: "100px",
		right: "-50px",
		top: "280px",
	});
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			setWindowSize(size);
			console.log(size);
			if (size <= 500) {
				setDescWidth({ width: "400px" });
				setFontSize({ fontSize: "30px" });
				setImg({
					width: "350px",
					left: "100px",
					top: "60%",
				});
				setImg2({
					width: "100px",
					right: "-10px",
					top: "90px",
				});
				setText2({
					width: "60px",
					right: "10px",
					top: "150px",
					fontSize: "10px",
				});
			} else {
				setDescWidth({ width: "1054px" });
				setFontSize({ fontSize: "48px" });
				setImg({
					width: "600px",
					left: "50%",
					marginLeft: "-300px",
					top: "50%",
				});
				setImg2({ width: "120px", right: "-60px", top: "200px" });
				setText2({
					width: "100px",
					right: "-50px",
					top: "280px",
				});
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div className={classes.container}>
			<div className={classes.backgroundShape}>
				<img
					src="https://seekho.ai/assets/images/home-page/heroSectionBG.png"
					alt="img"
					style={{ width: "100% ", height: "100%" }}
				/>
			</div>
			<div style={{ marginTop: "200px" }}>
				<div className={classes.text} style={fontSize}>
					Accelerate Your Career in
					<span style={{ color: "rgb(255, 89, 118)" }}>
						<Typewriter
							options={{
								strings: [
									"Product Management",
									"Finance",
									"Digital Marketing",
									"Consulting",
									"Entrepreneurship",
								],
								autoStart: true,
								loop: true,
								cursor: "",
							}}
						/>
					</span>
				</div>
				<div className={classes.description} style={descWidth}>
					Join Select Membership and get access to 1000+ live classes from
					Industry Gurus, Learning Communities and Kickass Jobs
				</div>
			</div>
			<div className={`${classes.positionAbsolute}`} style={img}>
				<img
					src="https://seekho.ai/assets/images/home-page/heroSectionVideoPlaceholder.webp"
					alt="img"
					style={{ width: "100%", zIndex: "1", position: "relative" }}
				/>
				{windowSize > 500 && (
					<>
						<img
							class="d-none d-md-block"
							className={`${classes.sectionImg} ${classes.positionAbsolute}`}
							src="https://seekho.ai/assets/images/home-page/heroSectionFloatingVector1.webp"
							alt="img"
							style={{ zIndex: "3", position: "absolute" }}
						/>
						<div
							alt="img"
							className={classes.sectionText}
							style={{ zIndex: "3", position: "absolute" }}
						>
							Say bye to boring classes!
						</div>{" "}
					</>
				)}
				<img
					className={classes.sectionImg2}
					src="https://seekho.ai/assets/images/home-page/heroSectionFloatingVector2.webp"
					alt="img"
					style={img2}
				/>
				<div className={classes.sectionText2} alt="img" style={text2}>
					500+ Industry Gurus
				</div>
				{/* <div
					class="seekho-select-video-div"
					style={{ zIndex: "2", position: "absolute" }}
				>
					<div
						id="seekhoSelectVideoPreviewDiv"
						style={{ height: "100%", width: "100%" }}
					></div>
				</div> */}
			</div>
		</div>
	);
}

export default HeroSection;
