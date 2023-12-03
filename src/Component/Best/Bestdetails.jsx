/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Bestdetails = ({item}) => {
    return (
        <div className=" mt-12 mb-12 hover:bg-white hover:shadow-2xl hover:shadow-gray-700 transition">

            <div className="relative flex w-[400px]  h-[480px] flex-col rounded-xl bg-base-100 bg-clip-border text-gray-700 shadow-xl">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img className="w-full"
                        src={item?.image}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {item?.name}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        {item?.details}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6 font-bold">
                    <p className="text-red-400"> $ {item?.price}</p>
                    <p className="flex justify-center gap-3 items-center  font-sans text-base antialiased  leading-relaxed text-inherit font-bold">
                    <Rating 
                            style={{ maxWidth: 110}}
                            value={item.rating}
                            readOnly
                        />
                        {item.rating} 
                       
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Bestdetails;