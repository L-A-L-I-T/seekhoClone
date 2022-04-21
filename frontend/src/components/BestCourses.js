import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUseStyles } from "react-jss";
//? Importing Components------>
import { bestCoursesAPI } from "../backend";
import CourseCard from "./CourseCard";

const styles = createUseStyles({
	bestCourses: {
		margin: "20px",
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
			<h3>Check out some of our best courses</h3>
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
