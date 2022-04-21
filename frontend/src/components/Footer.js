import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	footer: {
		height: "400px",
		borderRadius: "90px 0px 0px 0px",
		backgroundColor: "#f8f8f8",
	},
	innerContainer: {
		margin: "0px 120px",
		display: "flex",
		justifyContent: "space-between",
	},
});

function Footer() {
	const classes = styles();
	return (
		<div className={classes.footer}>
			<div className={classes.innerContainer}>
				<div style={{ marginTop: "50px" }}>Seekho</div>
				<div style={{ marginTop: "50px" }}>
					<p>Academics</p>
					<p class="mb-0">Product Management</p>
					<p class="mb-0">Consulting</p>
					<p class="mb-0">Finance</p>
					<p class="mb-0">Digital Marketing</p>
					<p class="mb-0">Supply Chain Management</p>
					<p class="mb-0">Entrepreneuship</p>
					<p class="mb-0">Personal Development</p>
					<p class="mb-0">HR Management</p>
					<p class="mb-0">Analytics & Data Science</p>
				</div>
				<div style={{ marginTop: "50px" }}>
					<p>Explore</p>
					<p class="mb-0">LIVE Events</p>
					<p class="mb-0">Series</p>
					<p class="mb-0">Courses</p>
					<p class="mb-0">Job opportunities</p>
					<p class="mb-0">Quizzes</p>
					<p class="mb-0">Discussions</p>
				</div>
				<div style={{ marginTop: "50px" }}>
					<p>Company</p>
					<p class="mb-0">SeekhoX</p>
					<p class="mb-0">About Us</p>
					<p class="mb-0">Blog</p>
					<p class="mb-0">Privacy Policy</p>
					<p class="mb-0">Terms of Service</p>
					<p class="mb-0">FAQs</p>
				</div>
				<div style={{ width: "220px", marginTop: "50px" }}>
					<p>Get in Touch</p>
					<p>
						Seekify Technologies Private Limited, 2nd Floor, C-46, Neeti Bagh,
						South Delhi, Delhi, India, 110049
					</p>
					<div>
						<i class="bi bi-envelope"></i>
						<span style={{ marginLeft: "10px" }}>support@seekho.ai</span>
					</div>
				</div>
			</div>
			<div
				class="border-top"
				style={{
					textAlign: "center",
					paddingTop: "30px",
					marginBottom: "0px",
					marginTop: "20px",
					fontSize: "12px",
				}}
			>
				© Copyright 2022 SEEKHO. All rights reserved
			</div>
		</div>
	);
}

export default Footer;
