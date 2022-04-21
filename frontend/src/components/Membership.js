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
				<div
					class="col-md-5 mb-3"
					style={{
						height: "580px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "start",
					}}
				>
					<div>
						<p className={classes.text} style={{ fontSize: "20px" }}>
							Live classes from Industry Gurus
						</p>
						<p className={classes.text1} style={{ fontSize: "15px" }}>
							Get access to 1000+ live classes directly from industry experts.
						</p>
					</div>
					<div>
						<p className={classes.text} style={{ fontSize: "20px" }}>
							Learning Community
						</p>
						<p className={classes.text1} style={{ fontSize: "15px" }}>
							Select members are part of a learning community that’s always
							there for each other.
						</p>
					</div>
					<div>
						<p className={classes.text} style={{ fontSize: "20px" }}>
							Exclusive Mentoship
						</p>
						<p className={classes.text1} style={{ fontSize: "15px" }}>
							Connect with Mentors via Live Classes, breakout sessions and
							discussion forums.
						</p>
					</div>
					<div>
						<p className={classes.text} style={{ fontSize: "20px" }}>
							{" "}
							Get Kickass Jobss
						</p>
						<p className={classes.text1} style={{ fontSize: "15px" }}>
							Our mission is to get you closer to the most exciting jobs and
							internships.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Membership;
