import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Header/Footer/Footer";


const MainLayout = () => {
     return (
          <div>
               <Header></Header>
               <div className="min-h-screen max-w-7xl mx-auto">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;