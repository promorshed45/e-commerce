import React from 'react'
import ReactDOM from 'react-dom/client'



import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/pages/About.jsx';
import Contact from './component/pages/Contact.jsx';
import Root from './component/Root/Root.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import Shop from './component/pages/Shop.jsx';
import Category from './component/pages/Category.jsx';


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
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/category",
        element: <Category/>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    

  </React.StrictMode>,
)
