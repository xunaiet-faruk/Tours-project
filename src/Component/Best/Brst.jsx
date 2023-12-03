import { useEffect, useState } from "react";
import Bestdetails from "./Bestdetails";


const Brst = () => {
    const [Best,setBest] =useState([])

    useEffect(()=>{

        fetch('/Best.json')
        .then(res => res.json())
        .then(data =>setBest(data))


    },[])
    return (
        <div className="mt-28">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold text-center italic">Best Value Trips</h1>
                <p className="text-xl text-gray-500 text-center">Best offers trips from us</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-5">

           {


            Best.map((item,idx) =><Bestdetails key={idx} item={item}></Bestdetails>)


           }

            </div>
        </div>
    );
};

export default Brst;