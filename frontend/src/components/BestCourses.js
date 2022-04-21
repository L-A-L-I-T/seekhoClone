import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUseStyles } from "react-jss";
//? Importing Components------>
import { bestCoursesAPI } from "../backend";
import CourseCard from "./CourseCard";

const styles = createUseStyles({
	bestCourses: {
		margin: "80px",
	},
	title: {
		margin: "0",
		paddingLeft: "20px",
		color: "white",
	},
	rowCourses: {
		display: "flex",
		flexDirection: "row",
		padding: "20px",
		overflowY: "hidden",
		overflowX: "scroll",
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
	text1: {
		fontFamily: "'Poppins', sans-serif",
		fontSize: "31px",
		letterSpacing: "0.8px",
		fontWeight: "600",
		lineHeight: "44px",
		marginBottom: "13px",
	},
});

function BestCourses() {
	const classes = styles();
	const [courses, setCourses] = useState();
	const getCourses = async () => {
		const request = await axios.get(bestCoursesAPI);
		setCourses(request.data.data.data);
	};
	useEffect(() => {
		getCourses();
	}, []);
	console.log(courses);
	return (
		<div className={classes.bestCourses}>
			<h3 className={classes.text1} style={{ color: "rgb(7, 36, 109)" }}>
				Check out some of our best courses
			</h3>
			{courses && (
				<div className={classes.rowCourses}>
					{courses.map((course, id) => {
						return <CourseCard course={course} id={id} />;
					})}
				</div>
			)}
		</div>
	);
}

export default BestCourses;
