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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
        path: "/foodDetails/:id",
        element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-11-server-jade.vercel.app/singleFood/${params.id}`),
      },
      {
        path: "/foodPurchase/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-11-server-jade.vercel.app/singleFood/${params.id}`),
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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
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
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
