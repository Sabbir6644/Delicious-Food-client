import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import AuthProvider from './Components/Authentication/AuthProvider';
import Home from './Components/Home/Banner/Home';
import { HelmetProvider } from 'react-helmet-async';
import SingleFood from './Components/Pages/Foods/SingleFood';
import FoodPurchase from './Components/Pages/Foods/FoodPurchase';
import Login from './Components/Authentication/Login';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import Registration from './Components/Authentication/Registration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "foodDetails",
        element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>
      },
      {
        path: "/foodPurchase",
        element: <FoodPurchase></FoodPurchase>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
