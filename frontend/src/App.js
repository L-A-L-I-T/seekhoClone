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
function App() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<div style={{ height: "100px" }}></div>
			<Membership />
			<div style={{ height: "100px" }}></div>
			<Poster />
			<div style={{ height: "100px" }}></div>
			<Join />
			<BestCourses />
			<div style={{ height: "100px" }}></div>
			<RewardLearning />
			<div style={{ height: "100px" }}></div>
			<FutureReady />
			<div style={{ height: "100px" }}></div>
			<Vision />
			<div style={{ height: "100px" }}></div>
			<StoreDownload />
			<div style={{ height: "100px" }}></div>
			<Footer />
		</div>
	);
}

export default App;
