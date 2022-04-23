import React, { useState, useLayoutEffect } from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	container: {
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
	innerContainer: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "center",
	},
});

function Membership() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [margin, setMargin] = useState({ margin: "0 auto 156px" });
	const [img, setImg] = useState({ width: "750px", marginTop: "-50px" });
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			setWindowSize(size);
			console.log(size);
			if (size <= 500) {
				setMargin({ margin: "0px 20px" });
				setImg({ width: "400px", marginLeft: "auto" });
			} else {
				setMargin({ margin: "0 auto 156px" });
				setImg({ width: "750px", marginTop: "-50px" });
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	const classes = styles();
	return (
		<div className={classes.container} style={margin}>
			<div style={{ textAlign: "center" }}>
				<div className={classes.text} style={{ color: "rgb(7, 36, 109)" }}>
					Seekho Select Membership
				</div>
				<div
					class="mb-2"
					className={classes.text1}
					style={{ color: "rgb(81, 81, 81)", fontWeight: "400" }}
				>
					Unlock all of Seekho Select at
					<span style={{ margin: "5px" }}>only </span>
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
			</div>
			<div className={`row ${classes.innerContainer}`}>
				<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
					<img
						style={img}
						alt="img"
						src="https://seekho.ai/assets/images/home-page/seekhoSelect.webp"
					/>
				</div>
				<div
					class="col-lg-5 col-md-5 col-sm-12 col-xs-12"
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
