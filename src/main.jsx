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
import MyAddedFood from './Components/Pages/Foods/MyAddedFood';
import AddFood from './Components/Pages/Foods/AddFood';
import MyOrderedFood from './Components/Pages/Foods/MyOrderedFood';
import AllFoods from './Components/Pages/AllFoods/AllFoods';
import Blog from './Components/Pages/Blogs/Blog';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>
      },
      {
        path: "/foodDetails",
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
      {
        path: "/myAddedFood",
        element: <MyAddedFood></MyAddedFood>
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "/orderedFood",
        element: <MyOrderedFood></MyOrderedFood>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
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
