import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminHome from "../components/DashboardContent/AdminHome";
import AddProduct from "../components/DashboardContent/AddProduct";



export const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'addProduct',
        element: <AddProduct></AddProduct>
      },
    ]
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },

]);