import Maps from "./Maps";

const Location = () => {
     return (
          <div className="shadow-2xl py-1">

               {/* map & location section */}
               <div className="lg:flex gap-5">
                    {/* map */}
                    <div className="w-full lg:w-1/2">
                         <Maps></Maps>
                    </div>
                    {/* location & hours */}
                    <div className="w-full lg:w-1/2">
                         {/* location */}
                         <div className="py-2">
                              <h2 className="text-3xl font-bold text-center font-rancho">Location & Hours</h2>
                         </div>
                         <div className="md:flex gap-5">

                              <div className="">
                                   <h2 className="text-xl font-semibold">Delicious Food </h2>
                                  <div className="text-lg">
                                  <p>12 ATATURK AVE</p>
                                   <p>BANANI, DHAKA 1213</p>
                                   <p>Tel: +(021)846-2513</p>
                                   <p>Email: deleciousfood@gmail.com</p>
                                  </div>
                                  
                              </div>
                              {/* hours */}
                              <div className="flex-1 text-lg">
                                   <h2>Monday 11:00 am - 10:00 pm </h2>
                                   <h2>Tuesday 11:00 am - 10:00 pm </h2>
                                   <h2>Wednessday 11:00 am - 10:00 pm </h2>
                                   <h2>Thursday 11:00 am - 10:00 pm </h2>
                                   <h2>Fridayday 11:00 am - 10:00 pm </h2>
                                   <h2>Saterday 11:00 am - 10:00 pm </h2>
                                   <h2>Sunday 11:00 am - 10:00 pm </h2>
                              </div>

                         </div>


                    </div>


               </div>
          </div>
     );
};

export default Location;