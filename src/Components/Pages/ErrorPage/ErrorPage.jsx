import { Helmet } from "react-helmet-async";
import error from "/src/assets/images/error.png"
import { Link } from "react-router-dom";


const ErrorPage = () => {
     return (
          <div>
               <Helmet>
                    <title>Delicious food | Error</title>
               </Helmet>
                    <div className=" max-w-7xl mx-auto relative w-full rounded-md">
                         <img src={error} className="w-full" />
                         <div className=" text-white absolute transform -translate-y-2/3  right-[50%] top-[10%] ">
                              <Link to={'/'}><button className="py-2 px-4 rounded-md bg-red-700 text-white">Go Home</button></Link>
                         </div>
                    </div>

               </div>

     );
};

export default ErrorPage;