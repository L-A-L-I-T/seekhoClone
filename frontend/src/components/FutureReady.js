import React from "react";
import PainPoint from "../Icons/painPoint.webp";
function FutureReady() {
	return (
		<div class="container">
			<div class="row">
				<div class="col">
					<img
						src={PainPoint}
						alt="paint point"
						style={{ width: "400px", height: "auto" }}
					/>
				</div>
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
						<p>bruh! How exactly do I achieve my career goals?</p>
						<p>
							Seekho Select has helped 70,000+ students accelerate their career
							so far.
						</p>
						<button>Get Future Ready</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FutureReady;
