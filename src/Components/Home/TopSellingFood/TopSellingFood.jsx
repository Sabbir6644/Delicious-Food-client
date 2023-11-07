
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import TopSellingCard from "./TopSellingCard";
import { Link } from "react-router-dom";
import MyListLoader from "../../Pages/Spiner/MyListLoader";


const TopSellingFood = () => {
     const axios = useAxios();
     // console.log(data.data);
     const topSellingFood = async () => {
          const res = await axios.get('/topSellingFood');
          return res;
     }
     const { data, isFetching } = useQuery({
          queryKey: ['allFoodsCount'],
          queryFn: topSellingFood,
     });
     // console.log(isLoading, data?.data);
     return (
          <div>
               <div className="py-4">
                    <h2 className="text-5xl font-bold text-center font-rancho text-red-900">Top Selling Food</h2>
               </div>
               <div className="my-4">

                    
                         {isFetching ? (
                              <div className='flex justify-center'>
                                   <MyListLoader></MyListLoader>
                              </div>


                         ) : ( 
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                         
                              {
                                   data.data.map((topFood, index) => (
                                        <TopSellingCard key={index} topFood={topFood}></TopSellingCard>
                                   ))
                              }
                         
                         </div>
                        ) }
                    


                    <div className="flex justify-center items-center my-5">
                         {/* /allFoods */}
                         <Link to={'/allFoods'}><button className="btn text-red-900">See All</button></Link>
                    </div>
               </div>
          </div>
     );
};

export default TopSellingFood;