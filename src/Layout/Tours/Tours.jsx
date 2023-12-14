import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Usealltours from "../../Hooks/Usealltours";
import Tourcategori from "../Tourcategori";
import Tourstabs from "../Tourstabs";
import Navbar from "../../Pages/Home/Home/Navbar/Navbar";


const Tours = () => {
    const [menu] =Usealltours()
    const Adventure = menu.filter(item => item.travel_type === 'Adventure')
    const Beach = menu.filter(item => item.travel_type === 'Beach')
    const Countryside = menu.filter(item => item.travel_type === 'Countryside')
    const Riverside = menu.filter(item => item.travel_type === 'Riverside')
    const Mountain = menu.filter(item => item.travel_type === 'Mountain')
    const City = menu.filter(item => item.travel_type === 'City')
    return (
        <div>
        <Navbar/>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/hWGjMRp/pexels-nothing-ahead-3571551-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold italic mt-16">Embark on a Journey to Unforgettable Destinations</h1>
                        <p className="mb-5">Start your extraordinary journey today</p>
                   
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 max-w-screen-xl mx-auto">
                <Tabs className="mt-20">
                    <TabList>
                        <Tab>Adventure</Tab>
                        <Tab>City</Tab>
                        <Tab>Forest</Tab>
                        <Tab>Beach</Tab>
                        <Tab>Mountain</Tab>
                        <Tab>Countryside</Tab>
                    </TabList>

                    <TabPanel>
                        <Tourstabs item={Adventure}></Tourstabs>
                    </TabPanel>
                    <TabPanel>
                        <Tourstabs item={Beach}></Tourstabs>
                    </TabPanel>
                    <TabPanel>
                        <Tourstabs item={Countryside}></Tourstabs>
                    </TabPanel>
                    <TabPanel>
                        <Tourstabs item={Riverside}></Tourstabs>
                    </TabPanel>
                    <TabPanel>
                        <Tourstabs item={Mountain}></Tourstabs>
                    </TabPanel>
                    <TabPanel>
                        <Tourstabs item={City}></Tourstabs>
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default Tours;