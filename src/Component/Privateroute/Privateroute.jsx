import { useContext } from "react";
import { Authcontext } from "../../Firbase/Authprovider/Auths";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const loaction = useLocation();
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <div className="flex justify-center"><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;

};


export default Privateroute;