import React, { useState, useLayoutEffect } from "react";

function Poster() {
	const [margin, setMargin] = useState({ margin: "50px 130px" });
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			console.log(size);
			if (size <= 768) {
				setMargin({ margin: "0px 20px" });
			} else {
				setMargin({ margin: "50px 130px" });
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div style={margin}>
			<img
				class="d-block banner-img h-100 w-100"
				src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1649850936178-13%20april%202022b.png"
				style={{ objectFit: "fill" }}
				alt="poster"
			/>
		</div>
	);
}

export default Poster;
