
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";


const Shops = () => {

    const [shop,setShop] =useState([])
    useEffect(()=>{
        fetch('/Product.json')
        .then(res => res.json())
        .then(data => setShop(data))

    })


    return (
        <div>
            <div className="hero min-h-screen mb-12" style={{ backgroundImage: 'url(https://i.ibb.co/D4mJW55/image.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mt-96">
                        <h1 className="mb-5 text-5xl font-bold ">Shop Here </h1>
                        <p className="mb-5 text-xl">Embark on Your Next Adventure! Discover top-notch travel gear and essentials at our shop. From luggage to outdoor gear, find everything you need for your unforgettable journey. Shop now and gear up for your next exploration!"</p>
                       
                    </div>
                </div>
            </div>
            <h1 className="text-6xl text-center font-bold mt-5 mb-12 italic">Shop Here</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-screen-xl mx-auto">
                {


                    shop.map(item => <div key={item._id} className="card w-[370px]  card-compact bg-base-100 hover:shadow-xl border">
                        <figure><img className="w-[250px] h-[250px]" src={item?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">{item?.name}</h2>
                            <p>
                                <Rating 
                                    style={{ maxWidth: 110 }}
                                    value={item.rating}
                                    readOnly
                                />

                                
                              

                       </p>
                          <p className="text-xl font-bold text-red-500">$ {item?.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn hover:bg-yellow-500">Buy Now</button>
                            </div>
                        </div>
                    </div>)


                }
            </div>

        </div>
    );
};

export default Shops;