import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopSellingFood from "../TopSellingFood/TopSellingFood";
import Location from "./Map/Location";
import Discount from "./Discount";


const Home = () => {

     return (
          <div>
               <Helmet>
                    <title>Delicious food | Home</title>
               </Helmet>
               
               <Banner></Banner>
               <TopSellingFood></TopSellingFood>
               <Discount></Discount>
               <Location></Location>
               
               
          </div>
     );
};

export default Home;