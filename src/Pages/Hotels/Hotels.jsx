import Features from "../../Featurs/Features";
import Navbar from "../Home/Home/Navbar/Navbar";
import Hotelcard from "./Hotelcard";


const Hotels = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/fxFLJHy/image.png' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-8xl  font-bold">All Features Here</h1>
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="">

                <Features />


            </div>
           
        </div>
    );
};

export default Hotels;