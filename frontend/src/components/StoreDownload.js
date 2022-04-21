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
						style={{ width: "470px", height: "auto" }}
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
						<p style={{ fontSize: "31px" }}>
							All your career needs in a single app
						</p>
						<p style={{ fontSize: "26px" }}>
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
