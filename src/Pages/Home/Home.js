import React from 'react';
import Hero from '../Hero/Hero';
import CaseStudies from '../CaseStudies/CaseStudies';
import OurClients from '../OurClients/OurClients';
import Benefits from '../Benefits/Benefits';
import Automation from '../Automation/Automation';
import WeDo from '../WeDo/WeDo';
import DoIt from '../DoIt/DoIt';
import Trade from '../Trade/Trade';
import Why from '../Why/Why';
import Featured1 from '../Featured/Featured1';
import Featured2 from '../Featured/Featured2';
import Featured3 from '../Featured/Featured3';
import Featured4 from '../Featured/Featured4';
import Featured5 from '../Featured/Featured5';
import Featured6 from '../Featured/Featured6';
import Featured7 from '../Featured/Featured7';
import Featured8 from '../Featured/Featured8';
import SemiFooter from '../SemiFooter/SemiFooter';

const Home = () => {
    return (
        <div className='font-sansSerif bg-MainBG text-justify'>
            <Hero></Hero>
            <CaseStudies></CaseStudies>
            <OurClients></OurClients>
            <Benefits></Benefits>
            <Automation></Automation>
            <WeDo></WeDo>
            <DoIt></DoIt>
            <Trade></Trade>
            <Why></Why>
            <Featured1></Featured1>
            <Featured2></Featured2>
            <Featured3></Featured3>
            <Featured4></Featured4>
            <Featured5></Featured5>
            <Featured6></Featured6>
            <Featured7></Featured7>
            <Featured8></Featured8>
            <SemiFooter></SemiFooter>
        </div>
    );
};

export default Home;