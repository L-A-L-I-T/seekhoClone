import React, { useState, useEffect, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	container: {
		margin: "300px 110px",
	},
	text1: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "38px",
		letterSpacing: "1.2px",
		fontWeight: "700",
		lineHeight: "60px",
	},
	text2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "26px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
	},
	btn: {
		padding: "9px 29px",
		fontFamily: "'Inter', sans-serif",
		fontSize: "17px",
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
		"&:hover": {
			background:
				"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.04) 100%),linear-gradient(135deg, #FF5976 0%, #E05B66 100%)",
			transition: "background 0.2s ease-in",
		},
	},
	rotateDiv: {
		animation: "$rotation 8s infinite linear",
	},
	orbit1: {
		borderRadius: "50%",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
		position: "absolute",
		animation: "$rotation2 8s infinite linear",
	},
	orbit2: {
		borderRadius: "50%",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
		position: "absolute",
		animation: "$rotation2 8s infinite linear",
	},
	orbit3: {
		borderRadius: "50%",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
		position: "absolute",
		animation: "$rotation2 8s infinite linear",
	},
	logoHome: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	hotstar: {
		top: "-40px",
		left: "200px",
	},
	amazon: {
		top: "70px",
		left: "30px",
	},
	zomato: {
		top: "250px",
		left: "-40px",
	},
	google: {
		top: "450px",
		left: "30px",
	},
	mg: {
		top: "550px",
		left: "200px",
	},
	trello: {
		top: "250px",
		left: "580px",
	},
	vista: {
		top: "30px",
		left: "470px",
	},
	swiggy: {
		top: "490px",
		left: "470px",
	},
	EY: {
		top: "100px",
		left: "170px",
	},
	urban: {
		top: "200px",
		left: "80px",
	},
	flipkart: {
		top: "350px",
		left: "100px",
	},
	bain: {
		top: "450px",
		left: "200px",
	},
	EYLogo: {
		top: "430px",
		left: "380px",
	},
	whitehat: {
		top: "280px",
		left: "470px",
	},
	popXO: {
		top: "90px",
		left: "360px",
	},
	orange: {
		top: "180px",
		left: "280px",
	},
	HK: {
		top: "270px",
		left: "190px",
	},
	deloiite: {
		top: "365px",
		left: "270px",
	},
	seekify: {
		top: "270px",
		left: "370px",
	},
	positionRelative: {
		position: "relative",
	},
	animationContainer: {
		right: "-350px",
		top: "-150px",
	},
	"@keyframes rotation": {
		from: {
			transform: "rotate(0deg)",
		},
		to: { transform: "rotate(359deg)" },
	},
	"@keyframes rotation2": {
		from: {
			transform: "rotate(359deg)",
		},
		to: { transform: "rotate(0deg)" },
	},
});

function Jobs() {
	const [jobOrbitRotate, setJobOrbitRotate] = useState({
		height: "600px",
		width: "fit-content",
	});
	const classes = styles();
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [margin, setMargin] = useState();
	const [orbit1, setOrbit1] = useState({ height: "40px", width: "40px" });
	const [orbit2, setOrbit2] = useState({ height: "53px", width: "53px" });
	const [orbit3, setOrbit3] = useState({ height: "86px", width: "86px" });
	const [imgSize, setImgSize] = useState({ width: "600px" });
	const [animationStyle, setAnimationStyle] = useState({
		position: "absolute",
	});
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			setWindowSize(size);
			console.log(size);
			if (size <= 768) {
				setMargin({ margin: "0px 20px" });
			} else {
				setMargin({ margin: "0px 110px" });
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div className={classes.container} style={margin}>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<h3 className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
						Kickass Jobs from Leading Companies
					</h3>
					<h4
						className={classes.text2}
						style={{ color: "rgb(81, 81, 81)", fontWeight: "400" }}
					>
						Curated and hand picked opportunities for you. Our mission is to get
						you closer to the most exciting jobs and internships
					</h4>
					<button className={classes.btn}>View opportunities</button>
				</div>
				<div
					className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${classes.positionRelative}`}
				>
					<div className={classes.animationContainer} style={animationStyle}>
						{windowSize > 768 && (
							<div
								className={`${classes.rotateDiv} ${classes.positionRelative}`}
								style={jobOrbitRotate}
							>
								<img
									src="https://seekho.ai/assets/images/home-page/jobRotateAxisWeb.svg"
									alt="img"
									style={imgSize}
								/>

								<div
									class={`${classes.orbit3} ${classes.hotstar}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/hotstarLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.amazon}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/amazonLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.zomato}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/zomatoLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.google}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/googleLogoHome.png"
										alt="img"
									/>
								</div>
								<div class={`${classes.orbit3} ${classes.mg}`} style={orbit3}>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/1MGLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.trello}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/trellLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.vista}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/vistaLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									class={`${classes.orbit3} ${classes.swiggy}`}
									style={orbit3}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/swiggyLogoHome.png"
										alt="img"
									/>
								</div>

								<div
									className={`${classes.orbit2} ${classes.EY}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/EYLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.urban}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/urbanCompanyLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.flipkart}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/flipkartLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.bain}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/bainLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.EYLogo}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/EYLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.whitehat}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/whiteHatLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit2} ${classes.popXO}`}
									style={orbit2}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/popXOLogoHome.png"
										alt="img"
									/>
								</div>

								<div
									className={`${classes.orbit1} ${classes.orange}`}
									style={orbit1}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/orangeLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit1} ${classes.HK}`}
									style={orbit1}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/HKLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit1} ${classes.deloiite}`}
									style={orbit1}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/deloitteLogoHome.png"
										alt="img"
									/>
								</div>
								<div
									className={`${classes.orbit1} ${classes.seekify}`}
									style={orbit1}
								>
									<img
										className={classes.logoHome}
										src="https://seekho.ai/assets/images/home-page/seekifyLogoHome.png"
										alt="img"
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jobs;
