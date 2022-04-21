import React from "react";

import TalentboardImage from "../Icons/talentBoard.webp";

function RewardLearning() {
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Get truly rewarded for Learning</h2>
			<p>
				#SeekhoEveryday and break into the academy talentboards. Get noticed and
				scouted by leading companies who trust our leaderboard ranking
			</p>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src={TalentboardImage}
					alt="talent board"
					style={{ width: "1200px" }}
				/>
			</div>
		</div>
	);
}

export default RewardLearning;
