/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './AuthProvider';




const PrivateRoute = ({children}) => {
     const location = useLocation();
     const {user, loading}= useContext(AuthContext)
     if (loading) {
          return
     }
     return (
          <div>
               {user? children : <Navigate state={location.pathname} to={"/login"}></Navigate>
               }
          </div>
     );
};

export default PrivateRoute;