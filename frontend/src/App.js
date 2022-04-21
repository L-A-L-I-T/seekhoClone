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
			<Membership />
			<Poster />
			<Join />
			<BestCourses />
			<RewardLearning />
			<FutureReady />
			<Vision />
			<StoreDownload />
			<Footer />
		</div>
	);
}

export default App;
