import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithEmailLink, signOut } from "firebase/auth";
import app from "../Firbase";
export const Authcontext =createContext(null)
const auth = getAuth(app)
const Auths = ({children}) => {
    const [user,setUser] =useState()
    const [loading,setLoading] =useState(true)

    const createuser =(email,passsword) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passsword)
    }

    const signin =(email,passsword) =>{
      setLoading(true)
      return signInWithEmailAndPassword(email,passsword)
    }

    const logout =() =>{
      setLoading(true)
      return signOut(auth)

    }

    useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, currenuser =>{
        setLoading(false)
        setUser(currenuser)

      })
      return () => {
        unsubscribe();
      }



    },[])


  const authInfo = { user, loading, createuser, signin, logout }

    return (
       <Authcontext.Provider value={authInfo}>
        {children}
       </Authcontext.Provider>
    );
};

export default Auths;