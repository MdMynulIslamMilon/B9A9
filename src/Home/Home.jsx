import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Estate from "../Estate/Estate";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Estate></Estate>
            <Explore></Explore>
            <Choose></Choose>
            <Footer></Footer>
        </div>
    );
};

export default Home;