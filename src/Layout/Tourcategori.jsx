

const Tourcategori = ({item}) => {
    const { image, name, price, days, description } =item;
    return (
        <div className="">
            <div className="card bg-base-100 h-[500px] shadow-xl mt-12">
                <figure><img className="w-full " src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ml-9">{name}</h2>
                    <p className="text-center">{description}</p>
                    <div className="card-actions flex justify-between font-bold text-red-300">
                        <p>price:${price}</p>
                        <p>Days :{days}</p>

                    </div>
                    <div className="mt-5">
                        <button className="btn btn-outline btn-info w-full ">Buy Pakage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourcategori;