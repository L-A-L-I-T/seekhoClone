import React from "react";
import { createUseStyles } from "react-jss";

import PlayStoreIcon from "../Icons/playStore.png";
import AppStoreIcon from "../Icons/appStore.svg";
import DownloadImage from "../Icons/downloadApp.webp";

const styles = createUseStyles({
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "50px 120px",
	},
	text1: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "38px",
		letterSpacing: "1.2px",
		fontWeight: "700",
		lineHeight: "60px",
	},
	text2: {
		fontFamily: "'Inter', sans-serif",
		fontSize: "26px",
		letterSpacing: "0.8px",
		fontWeight: "500",
		marginBottom: "23px",
	},
});

function StoreDownload() {
	const classes = styles();
	return (
		<div class="container align-items-center">
			<div class="row">
				<div class="col">
					<img
						src={DownloadImage}
						alt="downloadApp imag"
						style={{ width: "420px", height: "auto" }}
					/>
				</div>
				<div class="col">
					<div
						class="container"
						style={{
							display: "flex",
							height: "100%",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "start",
						}}
					>
						<p
							className={classes.text1}
							style={{ fontSize: "31px", color: "rgb(7, 36, 109)" }}
						>
							All your career needs in a single app
						</p>
						<p
							className={classes.text2}
							style={{ fontSize: "26px", color: "rgb(81, 81, 81)" }}
						>
							Take classes on the go, interact with community and apply for
							kickass jobs
						</p>
						<div class="row">
							<div class="col">
								<img
									src={PlayStoreIcon}
									alt="play store icon"
									style={{ width: "200px", height: "auto", marginLeft: "auto" }}
								/>
							</div>
							<div class="col">
								<img
									src={AppStoreIcon}
									alt="app store icon"
									style={{ width: "200px", height: "auto" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StoreDownload;
