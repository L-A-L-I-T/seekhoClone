import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
	rowCourse: {
		minHeight: "100%",
		minWidth: "190px",
		marginRight: "20px",
		borderRadius: "10px",
		border: "1px solid #ccc",
		boxShadow: "0 0 2px #ffffff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "stretch",
		alignItems: "center",
		padding: "5px",
		marginBottom: "5px",
		"&:hover": {
			boxShadow: "0 0 15px rgba(33,33,33,.2)",
		},
	},
	poster: {
		borderRadius: "10px 10px 0px 0px",
		objectFit: "contain",
		height: "90px",
		maxWidth: "180px",
	},
	videoCount: {
		fontSize: "12px",
		color: "#696969",
	},
});

function CourseCard(props) {
	const classes = styles();
	return (
		<div className={`${classes.rowCourse}`}>
			<div>
				<img
					src={props.course.image_url}
					className={`${classes.poster}`}
					alt="poster"
				/>
			</div>
			<div style={{ width: "100%", padding: "5px" }}>
				<p>{props.course.title}</p>
				<p className={`${classes.videoCount}`}>
					{props.course.video_count} Videos
				</p>
			</div>
		</div>
	);
}

export default CourseCard;
