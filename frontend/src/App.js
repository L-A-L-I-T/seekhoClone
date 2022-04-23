import React, { useState, useLayoutEffect } from "react";
import BestCourses from "./components/BestCourses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoreDownload from "./components/StoreDownload";
import Vision from "./components/Vision";
import FutureReady from "./components/FutureReady";
import Join from "./components/Join";
import Poster from "./components/Poster";
import Membership from "./components/Membership";
import RewardLearning from "./components/RewardLearning";
import HeroSection from "./components/HeroSection";
import Academy from "./components/Academy";
import Jobs from "./components/Jobs";
import Rating from "./components/Rating";

function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	useLayoutEffect(() => {
		function updateSize() {
			const size = window.innerWidth;
			setWindowSize(size);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<div>
			<Navbar />
			<HeroSection />
			<div style={{ height: "100px" }}></div>
			<Membership />
			<div style={{ height: "100px" }}></div>
			{windowSize > 768 && (
				<>
					<Academy />
					<div style={{ height: "100px" }}></div>
				</>
			)}
			<Poster />
			<div style={{ height: "100px" }}></div>
			<Join />
			<div style={{ height: "100px" }}></div>
			<BestCourses />
			<div style={{ height: "100px" }}></div>
			<RewardLearning />
			<div style={{ height: "250px" }}></div>
			<Jobs />
			<div style={{ height: "250px" }}></div>
			<FutureReady />
			<div style={{ height: "100px" }}></div>
			<Vision />
			<div style={{ height: "100px" }}></div>
			<Rating />
			<div style={{ height: "100px" }}></div>
			<StoreDownload />
			<div style={{ height: "100px" }}></div>
			<Footer />
		</div>
	);
}

export default App;
