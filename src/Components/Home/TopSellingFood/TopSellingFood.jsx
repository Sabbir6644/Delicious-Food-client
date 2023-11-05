

const TopSellingFood = () => {
     return (
          <div>
               <div className="py-4">
                    <h2 className="text-5xl font-bold text-center font-rancho">Top Selling Food</h2>
               </div>
               <div className="my-4">
                    {/* card start */}
                    <div className="shadow-xl border rounded-sm max-w-lg flex">
                    {/* text div start*/}
                    <div className="space-y-2 w-4/6 pl-4 py-4">
                    <h2 className=" text-2xl">Food Name</h2>
                    <h2 className=" text-xl"> Category: </h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Quisquam, deleniti.</p>
                          <p>Price: 100 tk</p>
                          <button className="btn">Details</button>

                    </div>
                    {/* text div end */}
                    {/* image div start */}
                    <div className="w-2/6">
                         <div className="flex justify-center items-center h-full px-4">
                         <img className="h-[140px] w-[140px]" src="/src/assets/images/ban1.png" alt="" />
                         </div>
                    </div>
                    {/* image div end */}
                    </div>
                    {/* card end */}
                    <div className="flex justify-center items-center my-5">
                         <button className="btn">See All</button>
                    </div>
               </div>
          </div>
     );
};

export default TopSellingFood;