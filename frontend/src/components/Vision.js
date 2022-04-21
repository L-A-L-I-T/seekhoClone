import React from "react";
import AboutImage from "../Icons/about.webp";

function Vision() {
	return (
		<div class="container">
			<div class="row">
				<div class="col">
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
				<div class="col">
					<img
						src={AboutImage}
						alt="About Image"
						style={{ width: "700px", height: "auto" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Vision;
