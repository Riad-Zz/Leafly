import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const PlantDetails = () => {
    const navigate = useNavigate();
    const allPlants = useLoaderData();
    // console.log(allPlants) ;
    const obj_id = useParams();
    const plantId = parseInt(obj_id.id)
    // console.log(plantId) ;
    const currentPlant = allPlants.find(p => p.plantId === plantId);
    // console.log(plant) ;

    const handleOnSubmit = (e) =>{
        e.preventDefault() ;
        // console.log("Clickedddd") ;
        toast.success("Consultation Booked !") ;
        e.target.reset() ;
    }

    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row justify-between gap-12 items-center max-w-10/12 mx-auto mt-20'>

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


            {/*------------------Consultaion Form-----------------------*/}
            <div className='md:max-w-10/12 mx-auto mt-10'>
                <p className="text-center text-4xl font-bold  font-[Playfair_Display]">
                    Book Consultation
                </p>
                <div className='flex justify-center mt-7 p-2'>

                    <form onSubmit={handleOnSubmit} className='rounded-xl border-[#13131326] w-xs md:w-lg lg:w-xl border py-10 px-5 md:p-10 '>

                        <label className="label font-bold text-xl mb-2 text-black">Name</label>
                        <input type="text" required className="input w-full mb-4"  placeholder="Enter Your Name" />

                        <label className="label font-bold text-xl mb-2 text-black">Email</label>
                        <input type="email" required className="input w-full mb-4" placeholder="Email" />
                    <div className='flex justify-center'>
                        <button className="btn btn-neutral my-4 bg-[#179800] text-white text-bold border-none">Book Now</button>

                    </div>
                    
                </form>
                </div>
                
            </div>

            {/*----------------Go Back Button--------------------*/}
            <div className='flex justify-center mb-7 font-bold'>
                <button
                    onClick={() => navigate(-1)}
                    className='bg-[#1E3D32]  px-7 py-4 rounded-xl text-white font-semibold mt-10 flex items-center gap-4 cursor-pointer'>
                    <IoArrowBackSharp /> Go Back
                </button>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PlantDetails;