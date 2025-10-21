import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../PlantCard/PlantCard';

const TopPlants = () => {
    const PlantData = useLoaderData() ;
    // console.log(PlantData) ;
    return (
        <div className='md:max-w-10/12 mx-auto mt-10'>
            <p className="text-center text-4xl font-bold  font-[Playfair_Display]">
                Our Top Plants
            </p>
            <p className='text-center my-3 text-[18px] text-[#131313cc] font-medium'>Discover our hand-picked top indoor plants that bring life, freshness, and a touch of nature to your home.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    PlantData.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default TopPlants;