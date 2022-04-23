import React, { useState, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";
import Lottie from "react-lottie";
import Hand from "../lotties/Hand";

const styles = createUseStyles({
	container: {
		position: "relative",
		maxWidth: "1170px",
		marginBottom: "184px",
	},
	innerContainer: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "center",
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
		position: "absolute",
		height: "40px",
		width: "70px",
	},
	gifLarge: {
		position: "absolute",
		height: "60px",
		width: "80px",
	},
});

function Join() {
	const classes = styles();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Hand,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const [margin, setMargin] = useState({ margin: "0px 110px" });
	const [smallGifPos, setSmallGifPos] = useState({
		left: "290px",
		bottom: "290px",
	});
	const [bigGifPos, setBigGifPos] = useState({
		left: "490px",
		bottom: "170px",
	});
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			console.log(size);
			if (size <= 768) {
				setMargin({ margin: "0px 20px" });
				setSmallGifPos({ left: "190px", bottom: "215px" });
				setBigGifPos({ left: "348px", bottom: "120px" });
			} else {
				setMargin({ margin: "0px 110px" });
				setSmallGifPos({ left: "290px", bottom: "290px" });
				setBigGifPos({ left: "490px", bottom: "165px" });
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<div className={classes.container} style={margin}>
			<div className={`${classes.innerContainer} row`}>
				<div
					class="col-lg-6 col-md-12 col-sm-12 col-xs-12"
					style={{
						maxWidth: "500px",
						marginBottom: "60px",
					}}
				>
					<div className={classes.text} style={{ color: "rgb(7, 36, 109)" }}>
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
					class="col-lg-6 col-md-12 col-sm-12 col-xs-12"
					style={{ maxWidth: "600px", position: "relative" }}
				>
					<img
						src="https://seekho.ai/assets/images/home-page/joinCommunity.webp"
						style={{ width: "100%" }}
						alt="img"
					/>
				</div>
				<div className={classes.gifSmall} style={smallGifPos}>
					<Lottie options={defaultOptions} />
				</div>
				<div className={classes.gifLarge} style={bigGifPos}>
					<Lottie options={defaultOptions} />
				</div>
			</div>
		</div>
	);
}

export default Join;
