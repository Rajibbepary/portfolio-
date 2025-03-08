
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Contact from "../components/Contact";
import About from "../about/About";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
       {
         path:'about',
         element:<About/>
       }
      ]
    },
  ]);