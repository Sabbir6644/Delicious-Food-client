import { Helmet } from "react-helmet-async";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import MyListLoader from "../Spiner/MyListLoader";
import OrderDetails from "./OrderDetails";


const MyOrderedFood = () => {
     const {user}=useContext(AuthContext)
     const axios = useAxios();
     const orderDetails = async () => {
          const res = await axios.get(`/food/order?email=${user.email}`);
          return res;
     }
     const { data, isFetching, isLoading } = useQuery({
          queryKey: ['orderDetails'],
          queryFn: orderDetails,
     });
     // console.log(data?.data, isFetching, isLoading);
     return (
          <div>
               <Helmet>
                    <title>Delicious food | Ordered Food</title>
               </Helmet>
               <div className="mt-2 py-4">
                    <h2 className="text-5xl font-bold text-center font-rancho">My Ordered Food</h2>
               </div>

               <div>

                    {
                          isFetching || isLoading ?(
                              <div className="min-h-screen flex justify-center items-center">
                                   <MyListLoader></MyListLoader>
                              </div>
                         ) : (
                              data?.data.length < 1 ? (
                                   <p>You have no ordered any food</p>
                              ) : (
                                   <div>
                                        <table className="table">
                                             {/* head */}
                                             <thead>
                                                  <tr className="text-lg">
                                                       <th>Sl No.</th>
                                                       <th>Image</th>
                                                       <th>Food Name</th>
                                                       <th>Quantity</th>
                                                       <th>Price</th>
                                                       <th>Order Date</th>
                                                       <th>Ordered By</th>
                                                       <th>Cancel/Check Out</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {
                                                       data?.data?.map((food, index) => <OrderDetails key={food._id} food={food} index={index}></OrderDetails>)
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

export default MyOrderedFood;