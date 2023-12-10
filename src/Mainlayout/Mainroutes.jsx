import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Navbar/Navbar";
import Footer from "../Component/Fotter/Footer";

const Mainroutes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainroutes;