

const Allfeatures = ({item}) => {
  

    return (
        <div className="max-w-xl mx-auto mb-12">
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure><img src={item?.image}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item?.name}
                        <div className="badge badge-secondary">{item?.time_of_day}</div>
                    </h2>
                    <p>{item?.description}</p>
                    <div className="card-actions justify-end">
                        <div className="text-red-400">$ {item?.price}</div>
                        
                      
                    </div>
                    <div>
                        <button className="btn">Buy</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Allfeatures;