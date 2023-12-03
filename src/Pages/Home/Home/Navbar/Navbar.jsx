import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { Authcontext } from "../../../../Firbase/Authprovider/Auths";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {

    const {user,logout} =useContext(Authcontext)

    const handlelogout = () =>{
        logout()
        .then(() => {})
        .catch(error =>console.log(error))
    }

    const links = <>

      <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
      </li>
      <li>
            <NavLink
                to="/tour"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
               Tour
            </NavLink>
      </li>
      <li>
            <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
               Shop
            </NavLink>
      </li>
     

                {


                    user ? <>
                    
              <button onClick={handlelogout} className="btn btn-sm mt-1  btn-error">Logout</button>
                    
                    </>
                    :
                    <>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Login
                        </NavLink>

                    </li>

                 
                    
                    </>


                }
    
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30  text-white font-bold  pl-12">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {links}
                        </ul>
                    </div>
                    <img className=" w-[100px]" src={'https://i.ibb.co/VjvT5tQ/image-removebg-preview-3.png'} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                 
                  
                       
                        
                  
                    <Link to={'/login'}>
                    <button className="btn bn5 px-7">Login</button>
                    </Link>

                    <TiShoppingCart className="text-5xl" />
                    <div className="badge badge-secondary mb-12 ">+99</div>

                 
                </div>
            </div>
        </div>
    );
};

export default Navbar;