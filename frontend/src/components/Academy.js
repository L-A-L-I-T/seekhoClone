import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	text1: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "38px",
		letterSpacing: "1.2px",
		fontWeight: "700",
		lineHeight: "60px",
		textAlign: "center",
	},
	text2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "26px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
		textAlign: "center",
	},
	panelContainer: {
		display: "flex",
		width: "100%",
		overflow: "hidden",
		borderRadius: "8px",
		maxWidth: "1170px",
		margin: "0 auto 156px",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
	},
	panel: {
		height: "432px",
		width: "80px",
		borderRadius: "8px 0 0 8px",
		marginRight: "-4px",
		display: "flex",
		gap: "25px",
		alignItems: "flex-start",
		position: "relative",
		color: "#fff",
		cursor: "pointer",
		transition: "width 0.3s",
		padding: "37px 17px",
		overflow: "hidden",
	},
	active: {
		width: "100%",
		transition: "width 0.3s",
		backgroundColor: "white !important",
	},
	titleDiv: {
		width: "35px",
	},
	number: {
		fontSize: "19px",
		letterSpacing: "0px",
		marginBottom: "0 !important",
	},
	name: {
		transform: "rotate(180deg)",
		fontFamily: "'Inter', sans-serif",
		fontSize: "23px",
		letterSpacing: "1.61px",
		fontWeight: "700",
		lineHeight: "40px",
		marginLeft: "-3px",
		color: "rgb(50, 50, 50)",
	},
	detail: {
		display: "flex",
		height: "100%",
		transition: "opacity 2s ease-in",
	},
	imgDiv: {
		width: "272px",
		borderRadius: "8px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		height: "217px",
		width: "217px",
	},
	statsDiv: {
		display: "flex",
		marginBottom: "19px",
		alignItems: "flex-start",
		gap: "19px",
	},
	icon: {
		height: "30px",
		width: "30px",
		position: "relative",
		zIndex: "1",
	},
	iconDiv: {
		position: "absolute",
		height: "27px",
		width: "27px",
		borderRadius: "50%",
		zIndex: "0",
		backgroundColor: "rgba(254, 225, 199, 0.5)",
	},
	statsText: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "23px",
		letterSpacing: "0.9px",
		fontWeight: "600",
		color: "rgb(81, 81, 81)",
	},
	redirectText: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "22px",
		letterSpacing: " 0.9px",
		fontWeight: "600",
		color: "rgb(255, 89, 118)",
	},
});

function Academy() {
	const classes = styles();
	return (
		<div>
			<p className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
				Select your Academy
			</p>
			<p
				className={classes.text2}
				style={{ color: "rgb(81, 81, 81)", fontWeight: "400" }}
			>
				Choose the academy that you would like to accelerate your career in
			</p>
			<div className={classes.panelContainer}>
				<div
					className={`${classes.panel} ${classes.active}`}
					style={{ backgroundColor: "rgba(254, 225, 199, 0.85)" }}
				>
					<div className={classes.titleDiv}>
						<div className={classes.number}>01</div>
						<div
							className={classes.name}
							style={{
								writingMode: "vertical-lr",
								textOrientation: "sideways",
							}}
						>
							Product Management
						</div>
						{/* <div className={classes.name}>Product Management</div> */}
					</div>
					<div className={classes.detail}>
						<div
							className={classes.imgDiv}
							style={{ backgroundColor: "rgba(183, 212, 226, 0.22)" }}
						>
							<div className={classes.img}>
								<img
									src="https://seekho.ai/assets/images/home-page/productAcademyVector.png"
									alt="img"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className={`${classes.statsDiv} my-auto`}>
							<ul class="m-0">
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/ratingIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>4.8 Rated</span>
								</li>
								<li>
									<div style={{ height: "30px", width: "30px" }}>
										<img
											src="https://seekho.ai/assets/images/home-page/learnersIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>18000+ Learners</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/mentorsIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>30+ Mentors</span>
								</li>
								<li class="interactive-classes-section">
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/interactiveClassesIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>
										150+ Interactive classes
									</span>
								</li>
								<li class="m-0">
									<div className={classes.icon}></div>
									<a href="/academy/product-management">
										<span className={classes.redirectText}>
											Learn More{" "}
											<span>
												<img
													style={{ height: "16px", width: "16px" }}
													src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
													alt="img"
												/>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className={classes.panel}
					style={{ backgroundColor: "rgba(184, 208, 235, 0.87)" }}
				>
					<div className={classes.titleDiv}>
						<div className={classes.number}>02</div>
						<div
							className={classes.name}
							style={{
								writingMode: "vertical-lr",
								textOrientation: "sideways",
							}}
						>
							Finance
						</div>
						{/* <div class="academy-name d-block d-md-none">Finance</div> */}
					</div>
					<div className={classes.detail}>
						<div
							className={classes.imgDiv}
							style={{ backgroundColor: "rgb(255, 252, 235)" }}
						>
							<div className={classes.img}>
								<img
									src="https://seekho.ai/assets/images/home-page/financeAcademyVector.png"
									alt="img"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className={`${classes.statsDiv} my-auto`}>
							<ul class="m-0">
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/ratingIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>4.7 Rated</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/learnersIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div class="academy-icon-bg-div learner-bg"></div>
									<span className={classes.statsText}>8000+ Learners</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/mentorsIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>50+ Mentors</span>
								</li>
								<li class="interactive-classes-section">
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/interactiveClassesIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>
										200+ Interactive classes
									</span>
								</li>
								<li class="m-0">
									<div className={classes.icon}></div>
									<a href="/academy/finance">
										<span className={classes.redirectText}>
											Learn More{" "}
											<span>
												<img
													style={{ height: "16px", width: "16px" }}
													src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
													alt="img"
												/>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className={classes.panel}
					style={{ backgroundColor: "rgb(232, 243, 251)" }}
				>
					<div className={classes.titleDiv}>
						<div className={classes.number}>03</div>
						<div
							className={classes.name}
							style={{
								writingMode: "vertical-lr",
								textOrientation: "sideways",
							}}
						>
							Digital Marketing
						</div>
						<div class="academy-name d-block d-md-none">Digital Marketing</div>
					</div>
					<div className={classes.detail}>
						<div
							className={classes.imgDiv}
							style={{ backgroundColor: "rgba(232, 80, 91, 0.05)" }}
						>
							<div className={classes.img}>
								<img
									src="https://seekho.ai/assets/images/home-page/digitalMarketingAcademyVector.png"
									alt="img"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className={`${classes.statsDiv} my-auto`}>
							<ul class="m-0">
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/ratingIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>4.9 Rated</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/learnersIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div class="academy-icon-bg-div learner-bg"></div>
									<span className={classes.statsText}>13000+ Learners</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/mentorsIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>70+ Mentors</span>
								</li>
								<li class="interactive-classes-section">
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/interactiveClassesIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>
										370+ Interactive classes
									</span>
								</li>
								<li class="m-0">
									<div className={classes.icon}></div>
									<a href="/academy/digital-marketing">
										<span className={classes.redirectText}>
											Learn More{" "}
											<span>
												<img
													style={{ height: "16px", width: "16px" }}
													src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
													alt="img"
												/>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className={classes.panel}
					style={{ backgroundColor: "rgb(254, 218, 218)" }}
				>
					<div className={classes.titleDiv}>
						<div className={classes.number}>04</div>
						<div
							className={classes.name}
							style={{
								writingMode: "vertical-lr",
								textOrientation: "sideways",
							}}
						>
							Consulting
						</div>
						<div class="academy-name d-block d-md-none">Consulting</div>
					</div>
					<div className={classes.detail}>
						<div
							className={classes.imgDiv}
							style={{ backgroundColor: "rgba(112, 169, 255, 0.08)" }}
						>
							<div className={classes.img}>
								<img
									src="https://seekho.ai/assets/images/home-page/consultingAcademyVector.png"
									alt="img"
									style={{ maxWidth: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className={`${classes.statsDiv} my-auto`}>
							<ul class="m-0">
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/ratingIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>4.9 Rated</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/learnersIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div class="academy-icon-bg-div learner-bg"></div>
									<span className={classes.statsText}>20000+ Learners</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/mentorsIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>50+ Mentors</span>
								</li>
								<li class="interactive-classes-section">
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/interactiveClassesIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>
										450+ Interactive classes
									</span>
								</li>
								<li class="m-0">
									<div className={classes.icon}></div>
									<a href="/academy/consulting">
										<span className={classes.redirectText}>
											Learn More{" "}
											<span>
												<img
													style={{ height: "16px", width: "16px" }}
													src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
													alt="img"
												/>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className={classes.panel}
					style={{ backgroundColor: "rgb(251, 242, 192)" }}
				>
					<div className={classes.titleDiv}>
						<div className={classes.number}>05</div>
						<div
							className={classes.name}
							style={{
								writingMode: "vertical-lr",
								textOrientation: "sideways",
							}}
						>
							Entrepreneurship
						</div>
						<div class="academy-name d-block d-md-none">Entrepreneurship</div>
					</div>
					<div className={classes.detail}>
						<div
							className={classes.imgDiv}
							style={{ backgroundColor: "rgba(56, 124, 142, 0.08)" }}
						>
							<div className={classes.img}>
								<img
									src="https://seekho.ai/assets/images/home-page/entrepreneurshipAcademyVector.png"
									alt="img"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
						</div>
						<div className={`${classes.statsDiv} my-auto`}>
							<ul class="m-0">
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/ratingIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "-8px" }}
									></div>
									<span className={classes.statsText}>4.8 Rated</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/learnersIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div class="academy-icon-bg-div learner-bg"></div>
									<span className={classes.statsText}>10000+ Learners</span>
								</li>
								<li>
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/mentorsIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>100+ Mentors</span>
								</li>
								<li class="interactive-classes-section">
									<div className={classes.icon}>
										<img
											src="https://seekho.ai/assets/images/home-page/interactiveClassesIcon.svg"
											alt="img"
											style={{ width: "100%", height: "100%" }}
										/>
									</div>
									<div
										className={classes.iconDiv}
										style={{ marginLeft: "8px", marginTop: "10px" }}
									></div>
									<span className={classes.statsText}>
										500+ Interactive classes
									</span>
								</li>
								<li class="m-0">
									<div className={classes.icon}></div>
									<a href="/academy/entrepreneurship">
										<span className={classes.redirectText}>
											Learn More{" "}
											<span>
												<img
													style={{ height: "16px", width: "16px" }}
													src="https://seekho.ai/assets/images/home-page/rightArrowRed.svg"
													alt="img"
												/>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Academy;
