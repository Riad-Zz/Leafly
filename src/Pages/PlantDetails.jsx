import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PlantDetails = () => {
    const navigate = useNavigate() ;
    const allPlants = useLoaderData();
    // console.log(allPlants) ;
    const obj_id = useParams();
    const plantId = parseInt(obj_id.id)
    // console.log(plantId) ;
    const currentPlant = allPlants.find(p => p.plantId === plantId);
    // console.log(plant) ;
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row justify-between gap-12 items-center max-w-10/12 mx-auto mt-20'>
                
                <div className='flex-1'>
                    <img
                        src={currentPlant.image}
                        alt={currentPlant.plantName}
                        className='bg-[#F3F3F3] rounded-xl py-14 px-16 object-cover w-full'
                    />
                </div>

                
                <div className='flex-2'>
                    
                    <p className='playfair-display font-bold text-5xl'>{currentPlant.plantName}</p>

                    
                    <p className='text-[#131313cc] text-lg my-4'><span className='font-bold '>Provided by :</span>  {currentPlant.providerName}</p>

                    <hr className='border-t-[#13131326] mb-3' />

                    
                    <p className='text-[#131313cc] font-semibold'> <span className='font-bold'>Category:</span>   {currentPlant.category}</p>
                    <hr className='border-t-[#13131326] my-3' />

                    
                    <p className='text-[#131313cc] font-semibold'><span className='font-bold'>Care Level :</span> {currentPlant.careLevel}</p>
                    <hr className='border-t-[#13131326] my-3' />

                    
                    <p className='text-[#131313cc] font-semibold'><span className='font-bold'>Price: $</span>{currentPlant.price}</p>
                    <hr className='border-t-[#13131326] my-3' />

                    
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'><span className='font-bold'>Rating:</span></div>
                        <div>{currentPlant.rating}</div>
                    </div>

                    
                    <div className='font-bold flex gap-6 my-4'>
                        <div className='text-[#131313b3] font-normal'><span className='font-bold'>Available Stock :</span></div>
                        <div>{currentPlant.availableStock}</div>
                    </div>

                    
                    <div className='my-6'>
                        <p className='text-[#131313cc] text-base'>{currentPlant.description}</p>
                    </div>
                </div>
            </div>

            {/*----------------Go Back Button------------------- */}
            <div className='flex justify-center'>
                <button
                    onClick={() => navigate(-1)}
                    className='bg-[#23BE0A] px-7 py-4 rounded-xl text-white font-semibold mt-10 flex items-center gap-4 cursor-pointer'>
                    <IoArrowBackSharp /> Go Back
                </button>
            </div>

        </div>
    );
};

export default PlantDetails;