import Tourcategori from "./Tourcategori";


const Tourstabs = ({item}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                {

                    item.map((item, idx) => <Tourcategori key={idx} item={item}></Tourcategori>)

                }
            </div>
        </div>
    );
};

export default Tourstabs;