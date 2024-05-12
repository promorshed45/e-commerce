



import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../../App";
import About from "../pages/About";
import ErrorPage from "../ErrorPage";
import Contact from "../pages/Contact";
import Root from "../Root/Root"
import Service from "../pages/Service";
import User from "../ui/User";
import Shop from '../../component/pages/Shop'
import ProductDetails from "../ui/ProductDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <App/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/service",
          element: <Service/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/user",
          element: <User/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/productDetails",
          element: <ProductDetails/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }

      ]
    },
    
      
  ]);

  export default router;