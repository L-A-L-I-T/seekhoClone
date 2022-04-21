import React from "react";
import { createUseStyles } from "react-jss";
import PainPoint from "../Icons/painPoint.webp";

const styles = createUseStyles({
	container: {
		margin: "0px 110px",
	},
	btn: {
		padding: "9px 29px",
		fontFamily: "'Inter', sans-serif",
		fontSize: "18px",
		letterSpacing: "0.3px",
		fontWeight: "600",
		background: "linear-gradient(135deg, #FF5976 0%, #E05B66 100%)",
		lineHeight: "25px",
		color: "white",
		borderRadius: "6px",
		border: "none",
		boxShadow:
			"2px 2px 8px rgba(0, 0, 0, 0.24), 3px 1px 8px rgba(255, 255, 255, 0.31) inset, -1px -2px 4px rgba(0, 0, 0, 0.25) inset",
		transition: "background 0.2s ease-in",
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
		color: "rgb(125, 136, 154)",
	},
});

function FutureReady() {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div
						style={{
							display: "flex",
							height: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img
							src={PainPoint}
							alt="paint point"
							style={{ width: "400px", height: "auto" }}
						/>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div
						style={{
							display: "flex",
							height: "100%",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "start",
						}}
					>
						<p className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
							bruh! How exactly do I achieve my career goals?
						</p>
						<p className={classes.text2}>
							Seekho Select has helped 70,000+ students accelerate their career
							so far.
						</p>
						<button className={classes.btn}>Get Future Ready</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FutureReady;
