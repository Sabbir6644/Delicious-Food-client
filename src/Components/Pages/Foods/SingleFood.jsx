import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Animation from "../../../Hooks/Animation";


const SingleFood = () => {
     const food = useLoaderData();
     const {_id,description, food_category, food_image, food_name, food_origin, price, made_by}=food;
     return (
          <div>
               <Helmet>
                    <title>Delicious Food | Food Details</title>
               </Helmet>
               <div className="py-4">
                    <Animation><h2 className="text-5xl font-bold text-red-900 text-center font-rancho">Details of {food_name}</h2></Animation>
               </div>
               <div className="my-4">
                    {/* card start */}
                    <div className="shadow-xl border rounded-sm flex flex-col-reverse md:flex-row  ">
                    {/* text div start*/}
                    <div className="space-y-2 md:w-4/6 pl-4 py-4">
                    <h2 className=" text-2xl">Food Name: {food_name}</h2>
                    <h2 className=" text-lg"> Category: {food_category}</h2>
                    <h2 className=" text-lg">Price: {price} TK</h2>
                    <h2 className=" text-lg">Made By: {made_by}</h2>
                    <h2 className=" text-lg"> Food Origin (Country): {food_origin}</h2>
                    <p>{description}</p>
                          
                          {/* foodPurchase */}
                          <Link to={`/foodPurchase/${_id}`}><button className="btn text-red-900">Order</button></Link>
                          
                         

                    </div>
                    {/* text div end */}
                    {/* image div start */}
                    <div className="md:w-2/6">
                         <div className="flex justify-center items-center h-full p-4">
                         <img className="h-full md:h-[200px] lg:h-full w-full md:w-[200px] lg:w-full" src={food_image} alt="" />
                         </div>
                    </div>
                    {/* image div end */}
                    </div>
                    {/* card end */}
                    
               </div>
          </div>
     );
};

export default SingleFood;