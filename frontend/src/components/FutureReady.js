import React, { useState, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";
import PainPoint from "../Icons/painPoint.webp";
import Future from "../lotties/future";
import Lottie from "react-lottie";
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
	gif: {
		position: "absolute",
		zIndex: 1,
	},
});

function FutureReady() {
	const classes = styles();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Future,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const [style, setStyle] = useState({});
	const [flexDirection, setFlexDirection] = useState({});
	const [imgSize, setImgSize] = useState({ width: "400px", height: "auto" });
	const [gifPos, setGifPos] = useState({ left: "180px", bottom: "465px" });
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			console.log(size);
			if (size <= 500) {
				setStyle({ margin: "0px 20px" });
				setFlexDirection({ flexDirection: "column-reverse" });
				setImgSize({
					width: "350px",
					height: "auto",
				});
				setGifPos({ left: "130px", bottom: "400px" });
			} else {
				setStyle({});
				setFlexDirection({});
				setImgSize({
					width: "400px",
					height: "auto",
				});
				setGifPos({ left: "180px", bottom: "465px" });
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<div className={classes.container} style={style}>
			<div
				class={`row justify-content-center align-items-center `}
				style={flexDirection}
			>
				<div
					class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
					style={{ position: "relative" }}
				>
					<div
						style={{
							display: "flex",
							height: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img src={PainPoint} alt="paint point" style={imgSize} />
					</div>
					<div className={classes.gif} style={gifPos}>
						<Lottie options={defaultOptions} height={240} width={240} />
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
							marginBottom: "100px",
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
