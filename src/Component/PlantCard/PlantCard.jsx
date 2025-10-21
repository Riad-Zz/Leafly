import React from 'react';
import star from '../../assets/starIcon.svg'

const PlantCard = ({ plant }) => {
    return (
        <div>
            <div className='border border-[#13131326] p-6 rounded-2xl'>
    
                <img
                    src={plant.image}
                    alt={plant.plantName}
                    className='bg-[#F3F3F3] rounded-2xl px-14 w-full md:h-[300px] 2xl:px-30 py-8 xl:object-cover'
                />

                
                <div className='flex my-3 gap-5 flex-wrap'>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold'>{plant.category}</span>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold'>{plant.careLevel}</span>
                </div>

                <p className='playfair-display font-bold text-2xl'>{plant.plantName}</p>


                <p className='text-[#131313cc] text-lg my-2'>Price: ${plant.price}</p>

                <hr className="border-t-2 border-dashed border-[#13131326] my-5" />
                <div className='flex justify-between mt-2'>
                    <p>{plant.providerName}</p>
                    <div className='flex gap-2 items-center'>
                        <p>{plant.rating}</p>
                        <img src={star} alt="star icon" className='w-5 h-5' />
                    </div>
                </div>
                <div className='flex justify-center '>
                <button className='btn bg-[#179800] text-white font-bold py-3 px-10 mt-4 rounded-xl cursor-pointer'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default PlantCard;