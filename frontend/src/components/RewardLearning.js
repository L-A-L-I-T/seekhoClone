import React, { useState, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";
import Lottie from "react-lottie";
import Thumbsup from "../lotties/thumbsUp";

const styles = createUseStyles({
	container: {
		position: "relative",
		maxWidth: "1170px",
		padding: "0 15px",
		textAlign: "center",
		marginBottom: "95px",
	},
	text1: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "31px",
		letterSpacing: "0.8px",
		fontWeight: "600",
		lineHeight: "44px",
		marginBottom: "13px",
	},
	text2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "25px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
		lineHeight: "40px",
	},
	imgDiv: {
		width: "100%",
		marginLeft: "0",
		position: "relative",
	},
	img: {
		boxShadow: "0px 12px 88px rgba(0, 0, 0, 0.16)",
		position: "relative",
		zIndex: "-1",
	},
	img2: {
		position: "absolute",
		width: "260px",
		zIndex: "2",
		bottom: "-100px",
		left: "140px",
	},
	img3: {},
	talentGif: {
		position: "absolute",
		height: "40px",
		width: "40px",
		bottom: "-93px",
		left: "215px",
		zIndex: "4",
	},
});

function RewardLearning() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Thumbsup,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const classes = styles();
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [margin, setMargin] = useState({ margin: " 0 auto 95px" });
	const [img3, setImg3] = useState({
		position: "absolute",
		width: "500px",
		zIndex: "2",
		bottom: "-50px",
		right: "10px",
	});
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			setWindowSize(size);
			console.log(size);
			if (size <= 768) {
				setMargin({ margin: "0px 20px" });
				setImg3({ position: "static", width: "400px" });
			} else {
				setMargin({ margin: " 0 auto 95px" });
				setImg3({
					position: "absolute",
					width: "500px",
					zIndex: "2",
					bottom: "-50px",
					right: "10px",
				});
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div className={classes.container} style={margin}>
			<div className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
				Get truly rewarded for Learning
			</div>
			<div className={classes.text2}>
				#SeekhoEveryday and break into the academy talentboards. Get noticed and
				scouted by leading companies who trust our leaderboard ranking
			</div>
			<div className={classes.imgDiv}>
				{windowSize > 500 && (
					<img
						className={classes.img}
						src="https://seekho.ai/assets/images/home-page/talentBoard.webp"
						style={{ width: "85%" }}
						alt="img"
					/>
				)}
				{windowSize > 500 && (
					<img
						className={classes.img2}
						src="https://seekho.ai/assets/images/home-page/talentBoardFeedBack.png"
						alt="img"
					/>
				)}
				<img
					style={img3}
					src="https://seekho.ai/assets/images/home-page/talentBoardStats.png"
					alt="img"
				/>
				{windowSize > 500 && (
					<div className={classes.talentGif}>
						<Lottie options={defaultOptions} />
					</div>
				)}
			</div>
		</div>
	);
}

export default RewardLearning;
