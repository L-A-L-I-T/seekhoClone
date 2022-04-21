import React from "react";
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
		fontSize: "48px",
		letterSpacing: "2.7px",
		fontWeight: "700",
		lineHeight: "64px",
	},
	typewrite: {
		fontSize: "27px !important",
	},
	description: {
		color: "rgb(125, 136, 154)",
		width: "1054px",
		margin: "0 auto",
		textAlign: "center",
		fontSize: "25px",
		letterSpacing: "0.76px",
		lineHeight: "26px",
	},
	heroSectionImgDiv: {
		width: "600px",
		left: "50%",
		marginLeft: "-300px",
		top: "50%",
	},
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
		width: "100px",
		right: "-50px",
		top: "280px",
		textAlign: "center",
	},
	sectionImg2: {
		width: "120px",
		right: "-60px",
		top: "200px",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
		borderRadius: "5px",
	},
});

function HeroSection() {
	const classes = styles();
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
				<div className={classes.text} style={{ color: "rgb(7, 36, 109)" }}>
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
				<div className={classes.description}>
					Join Select Membership and get access to 1000+ live classes from
					Industry Gurus, Learning Communities and Kickass Jobs
				</div>
			</div>
			<div
				className={classes.heroSectionImgDiv}
				style={{ position: "absolute" }}
			>
				<img
					src="https://seekho.ai/assets/images/home-page/heroSectionVideoPlaceholder.webp"
					alt="img"
					style={{ width: "100%", zIndex: "1", position: "relative" }}
				/>
				<img
					class="d-none d-md-block"
					className={classes.sectionImg}
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
				</div>
				<img
					className={classes.sectionImg2}
					src="https://seekho.ai/assets/images/home-page/heroSectionFloatingVector2.webp"
					alt="img"
					style={{ zIndex: "3", position: "absolute" }}
				/>
				<div
					className={classes.sectionText2}
					alt="img"
					style={{ zIndex: "3", position: "absolute" }}
				>
					500+ Industry Gurus
				</div>
				<div
					class="seekho-select-video-div"
					style={{ zIndex: "2", position: "absolute" }}
				>
					<div
						id="seekhoSelectVideoPreviewDiv"
						style={{ height: "100%", width: "100%" }}
					></div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
