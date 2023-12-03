import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from '../Banner/Banner';
import Destination from '../../../Component/Destination/Destination';
import Brst from '../../../Component/Best/Brst';
import Footer from '../../../Component/Fotter/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Destination></Destination>
        <Brst></Brst>
        <Footer></Footer>
        </div>
    );
};

export default Home;