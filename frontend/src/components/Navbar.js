import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import MenuIcon from "../Icons/menu.png";
import SeekhoLogo from "../Icons/newSeekhoLogo.webp";
import XIcon from "../Icons/X.png";
import TalentboardIcon from "../Icons/talentBoardIcon.png";
import DiscussionIcon from "../Icons/discussions.png";

const styles = createUseStyles({
	container: {
		margin: "10px 150px",
		display: "flex",
		alignItems: "center",
		position: "sticky",
		backgroundColor: "#ffffff",
	},
	tab: {
		display: "flex",
		margin: "10px 10px",
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
			<div>
				<p style={{ marginBottom: "0px", marginLeft: "10px" }}>Academics</p>
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
			<button>Login</button>
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
