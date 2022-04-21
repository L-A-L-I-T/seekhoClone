import React from "react";
import { createUseStyles } from "react-jss";
import TalentboardImage from "../Icons/talentBoard.webp";

const styles = createUseStyles({
	container: {
		margin: " 0 auto 95px",
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
	img3: {
		position: "absolute",
		width: "500px",
		zIndex: "2",
		bottom: "-50px",
		right: "10px",
	},
});

function RewardLearning() {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
				Get truly rewarded for Learning
			</div>
			<div className={classes.text2}>
				#SeekhoEveryday and break into the academy talentboards. Get noticed and
				scouted by leading companies who trust our leaderboard ranking
			</div>
			<div className={classes.imgDiv}>
				<img
					className={classes.img}
					src="https://seekho.ai/assets/images/home-page/talentBoard.webp"
					style={{ width: "85%" }}
					alt="img"
				/>
				<img
					className={classes.img2}
					src="https://seekho.ai/assets/images/home-page/talentBoardFeedBack.png"
					alt="img"
				/>
				<img
					className={classes.img3}
					src="https://seekho.ai/assets/images/home-page/talentBoardStats.png"
					alt="img"
				/>
			</div>
		</div>
	);
}

export default RewardLearning;
