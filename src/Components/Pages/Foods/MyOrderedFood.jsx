import { Helmet } from "react-helmet-async";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import MyListLoader from "../Spiner/MyListLoader";
import OrderDetails from "./OrderDetails";
import Swal from "sweetalert2";
import Animation from "../../../Hooks/Animation";


const MyOrderedFood = () => {
     const { user } = useContext(AuthContext)
     const axios = useAxios();
     const orderDetails = async () => {
          const res = await axios.get(`/food/order?email=${user.email}`);
          return res;
     }
     const { data, isFetching, isLoading, refetch } = useQuery({
          queryKey: ['orderDetails'],
          queryFn: orderDetails,
     });
     const handleDelete = (id) => {
          // console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "You want to cancel this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, calcel it!"
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-jade.vercel.app/order/${id}`, {
                         method: 'DELETE',
                         credentials: 'include'
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              if (data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Canceled!",
                                        text: "Your order has been canceled.",
                                        icon: "success"
                                   });
                                   refetch();
                              }
                         })
               }
          });
     }






     return (
          <div>
               <Helmet>
                    <title>Delicious food | Ordered Food</title>
               </Helmet>


               <div>

                    {
                         isFetching || isLoading ? (
                              <div className="min-h-screen flex justify-center items-center">
                                   <MyListLoader></MyListLoader>
                              </div>
                         ) : (
                              data?.data.length < 1 ? (
                                   <div className="flex justify-center items-center min-h-screen">
                                        <img src="https://i.ibb.co/HKnfZjp/empty.png" alt="" />
                                        <p className="text-5xl font-bold text-center font-rancho">You have no ordered any food</p>
                                   </div>
                              ) : (
                                   <div>
                                        <div className="mt-2 py-4">
                                             <Animation><h2 className="text-5xl font-bold text-center text-red-900 font-rancho">Order details</h2></Animation>
                                        </div>
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
                                                       data?.data?.map((food, index) => <OrderDetails key={food._id} food={food} index={index} handleDelete={handleDelete}></OrderDetails>)
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