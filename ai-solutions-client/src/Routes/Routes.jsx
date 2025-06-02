import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminHome from "../components/DashboardContent/AdminHome";
import AddProduct from "../components/DashboardContent/AddProduct";
import ManageProduct from "../components/DashboardContent/ManageProduct";
import DemoRequest from "../components/DashboardContent/DemoRequest";
import ManageServices from "../components/DashboardContent/ManageServices";
import ContactUsMessage from "../components/DashboardContent/ContactUsMessage";
import AboutPage from "../pages/About/AboutPage";
import Contact from "../pages/ContactUs/Contact";
import ServicesPage from "../pages/Services/ServicesPage";



export const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/services',
    element: <ServicesPage></ServicesPage>
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
      {
        path: 'manageProduct',
        element: <ManageProduct></ManageProduct>
      },
      {
        path: 'demoRequest',
        element: <DemoRequest></DemoRequest>
      },
      {
        path: 'manageServices',
        element: <ManageServices></ManageServices>
      },
      {
        path: 'ContactUsMessage',
        element: <ContactUsMessage></ContactUsMessage>
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