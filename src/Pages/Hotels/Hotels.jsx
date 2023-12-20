import { useEffect, useState } from "react";
import Features from "../../Featurs/Features";
import Navbar from "../Home/Home/Navbar/Navbar";
import Allfeatures from "../../Featurs/Allfeatures";



const Hotels = () => {
    const [Faeture,setFeatures] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/featurs')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div>
            <Navbar/>
      

                <Features />
              <div>
                <input type="text" className="bg-red-300" />
              </div>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-12 ">
                
                {
                    Faeture.map(item=><Allfeatures key={item._id} item={item}></Allfeatures>)
                }
            </div>
           
        </div>
    );
};

export default Hotels;