import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	container: {
		margin: "0 auto 156px",
		position: "relative",
		maxWidth: "1170px",
		marginBottom: "30px",
	},
	text: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "38px",
		letterSpacing: "1.2px",
		fontWeight: "700",
		lineHeight: "60px",
	},
	text1: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "26px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
	},
	price: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "37px",
		letterSpacing: "1.22px",
		fontWeight: "600",
		lineHeight: "45px",
		color: "rgb(255, 89, 118)",
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
	img: {
		width: "750px",
		marginTop: "-50px",
	},
	innerContainer: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
	},
});

function Membership() {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div style={{ textAlign: "center" }}>
				<div
					class="h2-v2 section-to-reveal"
					className={classes.text}
					style={{ color: "rgb(7, 36, 109)" }}
				>
					Seekho Select Membership
				</div>
				<div
					class="mb-2 section-to-reveal"
					className={classes.text1}
					style={{ color: "rgb(81, 81, 81)", fontWeight: "400" }}
				>
					Unlock all of Seekho Select at
					<span class="d-none d-md-inline-block" style={{ margin: "5px" }}>
						only{" "}
					</span>
					<span className={classes.price}>
						<span style={{ marginRight: "2px" }}>₹</span>999
					</span>
					<span> per academy</span>
				</div>
				<p href="#d" className={classes.link}>
					<div>
						Join Now
						<span style={{ marginLeft: "10px" }}>
							<img
								class="redirect-link-arrow"
								src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
								alt="icon"
							/>
						</span>
					</div>
				</p>
				<a
					href="#d"
					class="d-block d-md-none redirect-to-select-academy mb-4 section-to-reveal"
				>
					<button class="home-page-Btn">Join Now</button>
				</a>
			</div>
			<div className={classes.innerContainer}>
				<div class="col-md-7">
					<img
						className={classes.img}
						alt="img"
						src="https://seekho.ai/assets/images/home-page/seekhoSelect.webp"
					/>
				</div>
				<div class="col-md-5 mb-3" style={{ height: "580px" }}>
					<div class="col p-0 seekho-select-step active" data-active-step="1">
						<div class="card p-0" style={{ border: "none" }}>
							<div class="d-flex">
								<div
									class="d-block mr-3 text-center"
									style={{ transitionDuration: "12.766s" }}
								>
									<span
										class="seekho-select-step-icon text-white text-center cursor-pointer font-weight-bold"
										data-step-number="1"
									></span>

									<span class="d-block mx-auto">
										<span class="d-block position-relative step-progress-bar-div">
											<span
												class="step-dotted-line"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
												}}
											>
												- - - - - - - - - -
											</span>
											<span
												class="step-dotted-line-active"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
												}}
											>
												- - - - - - - - - - - - - - - -
											</span>
											<span
												class="position-absolute step-progress-bar"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
													left: "50%",
													marginLeft: "-2px",
													top: "0",
													width: "2px",
													backgroundColor: "rgb(255, 89, 118)",
												}}
											></span>
										</span>
									</span>
								</div>
								<div class="d-block mt-0">
									<div class="seekho-select-step-title" data-step-number="1">
										Live classes from Industry Gurus
									</div>
									<div class="mr-3 seekho-select-step-description">
										Get access to 1000+ live classes directly from industry
										experts.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col p-0 seekho-select-step" data-active-step="2">
						<div class="card p-0" style={{ border: "none" }}>
							<div class="d-flex">
								<div
									class="d-block mr-3 text-center"
									style={{ transitionDuration: "12.766s" }}
								>
									<span
										class="seekho-select-step-icon text-white text-center cursor-pointer font-weight-bold"
										data-step-number="2"
									></span>

									<span class="d-block mx-auto">
										<span class="d-block position-relative step-progress-bar-div">
											<span
												class="step-dotted-line"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
												}}
											>
												- - - - - - - - - -
											</span>
											<span
												class="step-dotted-line-active"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
												}}
											>
												- - - - - - - - - - - - - - - -
											</span>
											<span
												class="position-absolute step-progress-bar"
												style={{
													writingMode: "vertical-rl",
													textOrientation: "mixed",
													color: "rgba(255, 89, 118, 0.5)",
													left: "50%",
													marginLeft: "-2px",
													top: "0",
													width: "2px",
													backgroundColor: "rgb(255, 89, 118)",
												}}
											></span>
										</span>
									</span>
								</div>
								<div class="d-block mt-0">
									<div class="seekho-select-step-title" data-step-number="2">
										Learning Community
									</div>
									<div class="mr-3 seekho-select-step-description">
										Select members are part of a learning community that’s
										always there for each other.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Membership;
