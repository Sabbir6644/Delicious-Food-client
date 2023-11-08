import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AddFoodsTable from "./AddFoodsTable";
import MyListLoader from "../Spiner/MyListLoader";
import Animation from "../../../Hooks/Animation";



const MyAddedFood = () => {
     const { user } = useContext(AuthContext)
     const axios = useAxios();
     const myAddedFoods = async () => {
          const res = await axios.get(`/foods?email=${user.email}`);        
          return res;
     }

     const { data,isLoading, isFetching } = useQuery({
          queryKey: ['myAddedFoods'],
          queryFn: myAddedFoods,
     });

     // console.log(data.data);
     return (
          <div>
               <Helmet>
                    <title>Delicious food | My added food</title>
               </Helmet>

               <div>

                    {
                          isFetching || isLoading ?(
                              <div className="min-h-screen flex justify-center items-center">
                                   <MyListLoader></MyListLoader>
                              </div>
                         ) : (
                              data?.data.length < 1 ? (
                                   <div className="flex justify-center items-center min-h-screen">
                                        <img src="https://i.ibb.co/HKnfZjp/empty.png" alt="" />
                                        <Animation><p className="text-5xl font-bold text-center font-rancho">You have no added any food</p></Animation>
                                   </div>

                                   
                              ) : (
                                   <div>
                                        <div className="mt-2 py-4">
                                             <Animation><h2 className="text-5xl font-bold text-center font-rancho text-red-900">Your Added Food</h2></Animation>
                                        </div>
                                        <table className="table">
                                             {/* head */}
                                             <thead>
                                                  <tr>
                                                       <th>Sl No.</th>
                                                       <th>Food Name</th>
                                                       <th>Image</th>
                                                       <th>Price</th>
                                                       <th>Update</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {
                                                       data?.data?.map((food, index) => <AddFoodsTable key={food._id} food={food} index={index}></AddFoodsTable>)
                                                  }

                                             </tbody>
                                        </table>
                                   </div>
                              )
                         )
                    }



               </div>
          </div>
     );
};

export default MyAddedFood;