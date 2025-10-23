import React from 'react';
import Banner from '../Component/Banner/Banner';
import TopPlants from '../Component/TopPlants/TopPlants';
import PlantCare from '../Component/PlantCareTips/PlantCare';
import Experts from '../Component/PlantExperts/Experts';
import Potw from '../Component/POTW/Potw';
import Decoration from '../Component/HomeDecor/Decoration';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopPlants></TopPlants>
            <PlantCare></PlantCare>
            <Potw></Potw>
            <Experts></Experts>
            <Decoration></Decoration>
        </div>
    );
};

export default Home;