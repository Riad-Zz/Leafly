import React from 'react';
import img1 from '../../assets/homedecor-1.jpg'
import img2 from '../../assets/homedecor-2.jpg'
import img3 from '../../assets/homedecor-3.jpg'
import img4 from '../../assets/homedecor-4.jpg'
import img5 from '../../assets/homedecor-5.jpg'
const Decoration = () => {
    return (
        <div className='max-w-10/12 mx-auto my-10'>
            <p className='text-center text-4xl text-black font-extrabold fleur-de-leah-regular my-3'>#leafly Decor</p>
            <p className='text-center mt-3 mb-5 text-[18px] text-[#131313cc]'>Bring nature indoors and transform your <br /> living  space with the calming touch of greenery.
From vibrant ferns to minimal succulents, plants make every corner feel alive and refreshing.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  
                    <img src={img1} alt="" className='w-full object-cover rounded-md hover:scale-102 transition-all'/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <img src={img2} alt="" className='rounded-md hover:scale-102 transition-all'/>
                    <img src={img5} alt="" className='rounded-md hover:scale-102 transition-all'/>
                    <img src={img3} alt="" className='rounded-md hover:scale-102 transition-all'/>
                    <img src={img4} alt="" className='rounded-md hover:scale-102 transition-all' />

                </div>
            </div>

        </div>
    );
};

export default Decoration;