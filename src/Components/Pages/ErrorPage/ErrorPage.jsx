import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
     return (
          <div>
               <Helmet>
                    <title>Delicious food | Error</title>
               </Helmet>
             <h2>Error</h2>  
          </div>
     );
};

export default ErrorPage;