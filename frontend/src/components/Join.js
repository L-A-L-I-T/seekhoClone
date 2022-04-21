import React from "react";
import JoinImage from "../Icons/joinCommunity.webp";
function Join() {
	return (
		<div class="container">
			<div className="row">
				<div className="col">
					<img
						src={JoinImage}
						alt="join image"
						style={{ width: "500px", height: "auto" }}
					/>
				</div>
				<div className="col">
					<div
						style={{
							display: "flex",
							height: "100%",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "start",
						}}
					>
						<p>Join 10k+members from finest colleges and top companies</p>
						<p>
							Learn from your peers: from solving case studies together to
							availing exclusive mentorship
						</p>
						<button>Join Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Join;
