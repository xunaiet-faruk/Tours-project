/* eslint-disable react/prop-types */


const Destiationdetails = ({item}) => {
    return (
        <div className="mt-8"> 
           
            <div className="relative w-full  space-y-5 flex flex-col text-gray-700 bg-white   justify-evenly items-center rounded-xl bg-clip-border">
              
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700  bg-black h-96 rounded-full bg-clip-border">
                    <img
                        src={item.image_url}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="absolute mb-0">
                    <h1 className="text-white font-bold italic text-xl">{item.destination}</h1>
                    <p className="text-2xl font-bold text-white text-center">${item.cost}</p>
                </div>
               
            </div>
            
        </div>
    );
};

export default Destiationdetails;