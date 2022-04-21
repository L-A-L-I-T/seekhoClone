import React from "react";
import { createUseStyles } from "react-jss";
import JoinImage from "../Icons/joinCommunity.webp";

const styles = createUseStyles({
	container: {
		margin: "0 auto 156px",
		position: "relative",
		maxWidth: "1170px",
		marginBottom: "184px",
	},
	innerContainer: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
	},
	text: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "31px",
		letterSpacing: "0.8px",
		fontWeight: "600",
		lineHeight: "44px",
		marginBottom: "13px",
	},
	text2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "26px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
		lineHeight: "40px",
		color: "rgb(81, 81, 81)",
	},
	link: {
		transform: "translate(0, 15%)",
		transition: "transform 0.7s ease-in-out",
	},
	btn: {
		padding: "13px 30px",
		fontSize: "18px",
		fontFamily: "'Inter', sans-serif",
		letterSpacing: "0.3px",
		fontWeight: "600",
		background: "linear-gradient(135deg, #FF5976 0%, #E05B66 100%)",
		lineHeight: "25px",
		color: "white",
		borderRadius: "6px",
		border: "none",
		boxShadow:
			"2px 2px 8px rgba(0, 0, 0, 0.24), 3px 1px 8px rgba(255, 255, 255, 0.31) inset, -1px -2px 4px rgba(0, 0, 0, 0.25) inset",
		maxWidth: "155px",
		transition: "background 0.2s ease-in",
		"&:hover": {
			background:
				"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.04) 100%),linear-gradient(135deg, #FF5976 0%, #E05B66 100%)",
			transition: "background 0.2s ease-in",
		},
	},
	gifSmall: {
		height: "32px",
		width: "32px",
		left: "260px",
		bottom: "294px",
	},
	gifLarge: {
		height: "40px",
		width: "40px",
		left: "460px",
		bottom: "180px",
	},
});

function Join() {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={`${classes.innerContainer} row`}>
				<div
					class="col-md-6 col-sm-12 col-xs-12"
					style={{
						maxWidth: "500px",
						marginBottom: "60px",
						marginLeft: "auto",
					}}
				>
					<div
						class="px-4 px-md-0"
						className={classes.text}
						style={{ color: "rgb(7, 36, 109)" }}
					>
						Join 10k+members from finest colleges and top companies
					</div>
					<div className={classes.text2}>
						Learn from your peers: from solving case studies together to
						availing exclusive mentorship
					</div>
					<a href="#d" className={classes.link}>
						<button className={classes.btn}>Join Now</button>
					</a>
				</div>
				<div
					class="col-md-6 col-sm-12 col-xs-12"
					style={{ maxWidth: "600px", position: "relative" }}
				>
					<img
						src="https://seekho.ai/assets/images/home-page/joinCommunity.webp"
						style={{ width: "100%" }}
						alt="img"
					/>
				</div>
				<div className={classes.gifSmall} style={{ position: "absolute" }}>
					<lottie-player
						src="https://seekho.ai/assets2.lottiefiles.com/packages/lf20_6niurjte.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
				<div className={classes.gifLarge} style={{ position: "absolute" }}>
					<lottie-player
						src="https://seekho.ai/assets2.lottiefiles.com/packages/lf20_6niurjte.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
			</div>
		</div>
	);
}

export default Join;
