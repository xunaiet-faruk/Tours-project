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
                className={({ isActive, isPending })=>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
               Shop
            </NavLink>
      </li>
      <li>
            <NavLink
                to="/hotels"
                className={({ isActive, isPending })=>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Features
            </NavLink>
      </li>
     

              
    
    </>
    return (
      <div className="">
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-24" src={"https://i.ibb.co/SfTxwdW/image-removebg-preview-9.png"} alt="" />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? "" : <Link to={'/login'}><button className="btn bn5">Login</button></Link>
                    }
                </div>
                {/* editessss */}

                {
                    user && <div className=" ">

                        <div className="flex-none gap-2">

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        
                                        {

                                            user ? <img className="w-12  rounded-full h-12" src={user.photoURL}></img> : ''


                                        }                            </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2  text-center bg-black shadow menu menu-sm dropdown-content text-xl font-bold italic rounded-box w-52">

                                    <li className="ml-12"><Link>Dashboard</Link></li>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
      </div>
    );
};

export default Navbar;