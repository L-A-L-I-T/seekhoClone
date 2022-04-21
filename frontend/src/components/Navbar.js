import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import MenuIcon from "../Icons/menu.png";
import SeekhoLogo from "../Icons/newSeekhoLogo.webp";
import XIcon from "../Icons/X.png";
import TalentboardIcon from "../Icons/talentBoardIcon.png";
import DiscussionIcon from "../Icons/discussions.png";
import SlickArrow from "../Icons/SlickArrowNext.svg";

const styles = createUseStyles({
	container: {
		width: "100%",
		padding: "0px 150px",
		display: "flex",
		alignItems: "center",
		backgroundColor: "#ffffff",
		position: "fixed",
		top: "0",
		zIndex: "100",
	},
	tab: {
		display: "flex",
		margin: "20px 20px",
	},
	loginBtn: {
		padding: "9px 29px",
		fontFamily: "'Inter', sans-serif",
		fontSize: " 14px",
		letterSpacing: "0.3px",
		margin: "0px 20px",
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
	dropdown: {},
	navLink: {
		textAlign: "left",
		fontSize: "13.5px !important",
		lineHeight: "20px",
		color: "#222335",
		background: "none",
		border: "none",
		textDecoration: "none",
		paddingBottom: "0px",
		fontWeight: "500",
		"&:hover": {
			color: "#FF5976 !important",
			textDecoration: "none",
		},
	},
});

function Navbar() {
	const classes = styles();
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className={`${classes.container}`}>
			<div>
				<img src={SeekhoLogo} alt="logo" style={{ width: "130px" }} />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<button
					style={{ marginBottom: "0px", marginLeft: "10px" }}
					className={classes.navLink}
				>
					Academics
				</button>
				<img
					src={SlickArrow}
					alt="icon"
					style={{ width: "15px", height: "15px", transform: "rotate(90deg)" }}
				/>
			</div>
			<div style={{ marginLeft: "auto" }} className={classes.tab}>
				<img
					src={XIcon}
					alt="logo"
					style={{ width: "20px", height: "20px", marginBottom: "0px" }}
				/>
				<p style={{ marginBottom: "0px", marginLeft: "5px" }}>SeekhoX</p>
			</div>
			<div className={classes.tab}>
				<img
					src={DiscussionIcon}
					alt="discussion icon"
					style={{ width: "20px", height: "20px" }}
				/>
				<p style={{ marginBottom: "0px", marginLeft: "5px" }}>Discussions</p>
			</div>
			<div className={classes.tab}>
				<img
					src={TalentboardIcon}
					alt="discussion icon"
					style={{ width: "20px", height: "20px" }}
				/>
				<p style={{ marginBottom: "0px", marginLeft: "5px" }}>Talentboard</p>
			</div>
			<button class={classes.loginBtn}>Login</button>
			{!menuOpen ? (
				<img
					src={MenuIcon}
					alt="menu icon"
					style={{ width: "40px", height: "40px", transform: "rotate(180deg)" }}
				/>
			) : (
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					style={{ width: "40px", height: "40px", padding: "0px" }}
				></button>
			)}
		</div>
	);
}

export default Navbar;
