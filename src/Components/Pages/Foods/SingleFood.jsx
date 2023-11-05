import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const SingleFood = () => {
     return (
          <div>
               <Helmet>
                    <title>Delicious Food | Food Details</title>
               </Helmet>
               <div className="py-4">
                    <h2 className="text-5xl font-bold text-center font-rancho">Food Details</h2>
               </div>
               <div className="my-4">
                    {/* card start */}
                    <div className="shadow-xl border rounded-sm flex flex-col-reverse md:flex-row  ">
                    {/* text div start*/}
                    <div className="space-y-2 md:w-4/6 pl-4 py-4">
                    <h2 className=" text-2xl">Food Name</h2>
                    <h2 className=" text-lg"> Category: </h2>
                    <h2 className=" text-lg">Price: </h2>
                    <h2 className=" text-lg">Made By: </h2>
                    <h2 className=" text-lg"> Food Origin (Country): </h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Quisquam, deleniti.</p>
                          <p>Price: 100 tk</p>
                          {/* foodPurchase */}
                          <Link to={'/foodPurchase'}><button className="btn">Order</button></Link>
                          
                         

                    </div>
                    {/* text div end */}
                    {/* image div start */}
                    <div className="md:w-2/6">
                         <div className="flex justify-center items-center h-full p-4">
                         <img className="h-full md:h-[200px] lg:h-full w-full md:w-[200px] lg:w-full" src="/src/assets/images/ban1.png" alt="" />
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