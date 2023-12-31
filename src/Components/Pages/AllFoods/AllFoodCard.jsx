/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllFoodCard = ({food}) => {
     // console.log(food);

const {_id, food_category, food_image, food_name,  price, quantity}=food;

     return (
          <div className="my-4">
                    {/* card start */}
                    <div className="shadow-xl border rounded-sm flex flex-col-reverse md:flex-row  ">
                    {/* text div start*/}
                    <div className="space-y-1 md:w-4/6 pl-4 py-4 flex flex-col">
                    <h2 className=" text-2xl text-red-900">{food_name}</h2>
                    <h2 className=" text-lg"> Category: {food_category}</h2>
                    <h2 className=" text-lg">Price: {price}</h2>
                    <h2 className=" text-lg">Quantity: {quantity}</h2>
                          
                          {/* foodPurchase */}
                          <Link to={`/foodDetails/${_id}`}><button className="btn text-red-900">Details</button></Link>
                          
                         

                    </div>
                    {/* text div end */}
                    {/* image div start */}
                    <div className="md:w-2/6">
                         <div className="flex justify-center items-center h-full p-4">
                         <img className=" md:h-[130px]  w-full md:w-[200px] " src={food_image} alt="" />
                         </div>
                    </div>
                    {/* image div end */}
                    </div>
                    {/* card end */}
                    
               </div>
     );
};

export default AllFoodCard;