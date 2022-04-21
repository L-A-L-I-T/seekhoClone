import React from "react";
import { createUseStyles } from "react-jss";
import SeekhoLogo from "../Icons/newSeekhoLogo.webp";

const styles = createUseStyles({
	footer: {
		borderRadius: "90px 0px 0px 0px",
		backgroundColor: "#f8f8f8",
	},
});

function Footer() {
	const classes = styles();
	return (
		<div className={`${classes.footer}`}>
			<div className="row" style={{ margin: "0px 100px" }}>
				<div
					className="col-lg-2 col-md-2 col-sm-12 col-xs-12"
					style={{ marginTop: "50px" }}
				>
					<img src={SeekhoLogo} alt="logo" style={{ width: "140px" }} />
				</div>
				<div
					className="col-lg-2 col-md-2 col-sm-12 col-xs-12"
					style={{ marginTop: "50px" }}
				>
					<p style={{ fontWeight: "bold" }}>Academics</p>
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
				<div
					className="col-lg-2 col-md-2 col-sm-12 col-xs-12"
					style={{ marginTop: "50px" }}
				>
					<p style={{ fontWeight: "bold" }}>Explore</p>
					<p class="mb-0">LIVE Events</p>
					<p class="mb-0">Series</p>
					<p class="mb-0">Courses</p>
					<p class="mb-0">Job opportunities</p>
					<p class="mb-0">Quizzes</p>
					<p class="mb-0">Discussions</p>
				</div>
				<div
					className="col-lg-2 col-md-2 col-sm-12 col-xs-12"
					style={{ marginTop: "50px" }}
				>
					<p style={{ fontWeight: "bold" }}>Company</p>
					<p class="mb-0">SeekhoX</p>
					<p class="mb-0">About Us</p>
					<p class="mb-0">Blog</p>
					<p class="mb-0">Privacy Policy</p>
					<p class="mb-0">Terms of Service</p>
					<p class="mb-0">FAQs</p>
				</div>
				<div
					className="col-lg-4 col-md-2 col-sm-12 col-xs-12"
					style={{ marginTop: "50px" }}
				>
					<p style={{ fontWeight: "bold" }}>Get in Touch</p>
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
				className="border-top row"
				style={{
					paddingTop: "30px",
					marginBottom: "0px",
					marginTop: "20px",
					fontSize: "12px",
					width: "100%",
				}}
			>
				<p style={{ textAlign: "center" }}>
					© Copyright 2022 SEEKHO. All rights reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
