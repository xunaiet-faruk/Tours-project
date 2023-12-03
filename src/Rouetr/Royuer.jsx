import {
    createBrowserRouter,

} from "react-router-dom";
import Mainroutes from "../Mainlayout/Mainroutes";
import Home from "../Pages/Home/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register";
import Tours from "../Layout/Tours/Tours";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainroutes></Mainroutes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
            
                path:'/tour',
                element:<Tours></Tours>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);
