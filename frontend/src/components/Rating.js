import React, { useState, useLayoutEffect } from "react";
import CountUp from "react-countup";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	container: {
		margin: `0px 110px`,
		marginTop: "60px",
	},
	innerContainer: {
		display: "flex",
		textAlign: "left",
		justifyContent: "start",
		alignItems: "center",
		margin: "30px 0px",
	},
	statsIconBgDiv: {
		height: "68px",
		width: "68px",
		background:
			"linear-gradient(180deg, rgba(255, 175, 0, 0.2), rgba(255, 89, 118, 0.1))",
		borderRadius: "50%",
		marginTop: "-10px",
	},
	statsIconDiv: {
		height: "60px",
		width: "60px",
		marginLeft: "-45px",
		marginRight: "15px",
	},
	statsText: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "38px",
		letterSpacing: " 1.52px",
		fontWeight: "700",
		width: "160px",
		color: " rgb(255, 89, 118)",
	},
	statsDesc: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "27px",
		letterSpacing: "0.8px",
		fontWeight: "600",
		color: " rgba(81, 81, 81, 0.9)",
	},
});

function Rating() {
	const classes = styles();
	const [style, setStyle] = useState({});
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			console.log(size);
			if (size <= 500) setStyle({ margin: "0px 20px" });
			else setStyle({});
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div className={classes.container} style={style}>
			<div
				className="row"
				style={{ justifyContent: "space-between", alignItems: "center" }}
			>
				<div
					className={`${classes.innerContainer} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
				>
					<div className={classes.statsIconBgDiv}></div>
					<div className={classes.statsIconDiv}>
						<img
							src="https://seekho.ai/assets/images/home-page/ratingIconRed.svg"
							alt="img"
							style={{ height: "100%", width: "100%" }}
						/>
					</div>
					<div>
						<div className={classes.statsText}>
							<span class="rating">
								<CountUp
									start={0.0}
									end={4.9}
									delay={10}
									decimal="."
									decimals={1}
								/>
							</span>
							+
						</div>
						<div className={classes.statsDesc}>Rated</div>
					</div>
				</div>

				<div
					className={`${classes.innerContainer} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
				>
					<div className={classes.statsIconBgDiv}></div>
					<div className={classes.statsIconDiv}>
						<img
							src="https://seekho.ai/assets/images/home-page/learnerIconRed.svg"
							alt="img"
							style={{ height: "100%", width: "100%" }}
						/>
					</div>
					<div>
						<div className={classes.statsText}>
							<span class="learners">
								<CountUp start={0} end={70000} delay={5} />
							</span>
							+
						</div>
						<div className={classes.statsDesc}>Learners</div>
					</div>
				</div>

				<div
					className={`${classes.innerContainer} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
				>
					<div className={classes.statsIconBgDiv}></div>
					<div className={classes.statsIconDiv}>
						<img
							src="https://seekho.ai/assets/images/home-page/mentorIconRed.svg"
							alt="img"
							style={{ height: "100%", width: "100%" }}
						/>
					</div>
					<div>
						<div className={classes.statsText}>
							<span class="mentors">
								<CountUp start={0} end={500} delay={10} />
							</span>
							+
						</div>
						<div className={classes.statsDesc}>Mentors & Corporates</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rating;
