
import Banner from '../Banner/Banner';
import Destination from '../../../Component/Destination/Destination';
import Brst from '../../../Component/Best/Brst';
import Navbar from './Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner></Banner>
            <Destination></Destination>
        <Brst></Brst>
      
        </div>
    );
};

export default Home;