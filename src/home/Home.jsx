import Allproducts from "../components/Allproducts";
import BannerCarousel from "../components/BannerCarousel";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto pt-5 p-2">
           <BannerCarousel></BannerCarousel>
           <Allproducts></Allproducts>
        </div>
    );
};

export default Home;