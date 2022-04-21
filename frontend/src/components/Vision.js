import React from "react";
import AboutImage from "../Icons/about.webp";

function Vision() {
	return (
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<div
						style={{
							display: "flex",
							height: "100%",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "start",
						}}
					>
						<p>Our Vision</p>
						<p>
							We want to nurture the symbiosis between students, mentors and
							employers. We believe that our future lies in perfecting this
							meaningful interaction.
						</p>
					</div>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
					<div
						style={{
							display: "flex",
							height: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img
							src={AboutImage}
							alt="img"
							style={{ width: "700px", height: "auto" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Vision;
