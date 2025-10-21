import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Component/PlantCard/PlantCard';

const Plants = () => {
    const allPlants = useLoaderData() ;
    return (
        <div className='max-w-10/12 mx-auto mt-10'>
            <p className="text-center text-4xl font-bold  font-[Playfair_Display]">
                Our All Plants
            </p>
            <p className='text-center my-3 text-[18px] text-[#131313cc] font-medium'>Explore our diverse collection of indoor plants, carefully curated to enhance your home’s beauty, air quality, and calm ambiance..</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    allPlants.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default Plants;