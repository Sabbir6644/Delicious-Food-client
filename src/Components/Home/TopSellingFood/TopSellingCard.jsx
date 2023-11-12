/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TopSellingCard = ({ topFood }) => {
     // description
     const { _id, food_category, food_image, food_name, description, price } = topFood;


     return (
          <div className="shadow-xl border rounded-sm max-w-lg flex">
               {/* text div start*/}
               <div className="space-y-2 w-4/6 pl-4 py-4">
                    <h2 className=" text-2xl text-red-900">{food_name}</h2>
                    <h2 className=" text-xl"> Category: {food_category}</h2>
                    <p>{description}</p>
                    <p>Price: {price} tk</p>
                    {/* foodDetails */}
                    <Link to={`/foodDetails/${_id}`}><button className="btn text-red-900">Details</button></Link>

               </div>
               {/* text div end */}
               {/* image div start */}
               <div className="w-2/6">
                    <div className="flex justify-center items-center h-full px-4">
                         <img className="h-[130px] w-[140px]" src={food_image} alt="" />
                    </div>
               </div>
               {/* image div end */}
          </div>
     );
};

export default TopSellingCard;