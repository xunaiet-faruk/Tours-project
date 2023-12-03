/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Destiationdetails from "../Destinationdetails/Destiationdetails";

const Destination = () => {

    const [Destination,setDestinatio] =useState([])

    useEffect(()=>{

            fetch('Destination.json')
            .then(res => res.json())
            .then(data => setDestinatio(data))


    },[])


    return (
        <div className="pt-12 ">
            <h1 className="text-5xl italic text-center mt-12 font-bold">Popular Destinations</h1>
            <p className="text-center italic mt-2 text-gray-700">World's best tourist destinations</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {

                Destination.map(item =><Destiationdetails key={item.id} item={item}></Destiationdetails>)
            }
            </div>
        </div>
    );
};

export default Destination;