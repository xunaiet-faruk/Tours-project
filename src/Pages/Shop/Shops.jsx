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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-screen-xl mx-auto">
                {


                    shop.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={item?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)


                }
            </div>

        </div>
    );
};

export default Shops;