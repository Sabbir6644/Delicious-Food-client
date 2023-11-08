

const Discount = () => {
     return (
          <div className="flex flex-col-reverse md:flex-row bg-gray-100 my-5">
               
               <div className="flex-1 flex justify-center items-center">
               
               <div className=" text-center py-4 text-5xl md:text-7xl font-rancho font-extrabold ">
               <h2><span className="text-red-900">10%</span> off </h2>
               <p>on every <span className="text-red-900">Friday</span></p>
               </div>

              
               

               </div>
               
               <div className="flex-1">
               <img className="w-full max-h-[300] md:max-h-[400px]" src="https://i.ibb.co/Xpxxv6t/burger.png" alt="" />
               </div>
          </div>
     );
};

export default Discount;