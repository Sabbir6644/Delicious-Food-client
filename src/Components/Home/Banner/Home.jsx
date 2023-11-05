import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopSellingFood from "../TopSellingFood/TopSellingFood";
import Maps from "./Map/Maps";
import Location from "./Map/Location";


const Home = () => {
     return (
          <div>
               <Helmet>
                    <title>Delicious food | Home</title>
               </Helmet>
               <Banner></Banner>
               <TopSellingFood></TopSellingFood>
               <Location></Location>
               
          </div>
     );
};

export default Home;