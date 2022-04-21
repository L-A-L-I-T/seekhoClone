import React from "react";
import { createUseStyles } from "react-jss";
import AboutImage from "../Icons/about.webp";

const styles = createUseStyles({
	container: {
		margin: "0px 110px",
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
	link: {
		fontSize: "25px",
		letterSpacing: "0.70px",
		lineHeight: "26px",
		marginBottom: "40px",
		textDecoration: "none",
		color: "rgb(255, 89, 118)",
		fontWeight: "600",
	},
});

function Vision() {
	const classes = styles();
	return (
		<div className={`${classes.container}`}>
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
							Our Vision
						</p>
						<p className={classes.text2}>
							We want to nurture the symbiosis between students, mentors and
							employers. We believe that our future lies in perfecting this
							meaningful interaction.
						</p>
						<p href="#d" className={classes.link}>
							<div>
								Learn More
								<span style={{ marginLeft: "10px" }}>
									<img
										class="redirect-link-arrow"
										src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
										alt="icon"
									/>
								</span>
							</div>
						</p>
					</div>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
					<div
						style={{
							display: "flex",
							height: "100%",
							justifyContent: "end",
							alignItems: "center",
						}}
					>
						<img
							src={AboutImage}
							alt="img"
							style={{ width: "700px", height: "auto" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
