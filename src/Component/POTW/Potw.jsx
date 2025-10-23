import React from 'react';
import plantImg from '../../assets/potw.png'
import { Link } from 'react-router';

const Potw = () => {
    return (
        <div className='max-w-10/12 mx-auto mt-10'>
            <h2 className="text-center text-4xl font-bold  font-[Playfair_Display]">
                Plant of the Week
            </h2>
            <p className='text-center mt-3 text-[18px] text-[#131313cc] font-medium'>Every week, we celebrate a special plant that brings life, color, and calm to your space. This week’s star: the graceful Peace Lily.</p>

            <section className=" px-6 lg:mt-3 xl:mt-0 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-10">


                {/* Left: Image */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                        src={plantImg}
                        alt="Plant of the Week"
                        className="rounded-2xl w-full max-w-xl object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right: Text */}
                <div className="lg:w-1/2 w-full">
                    <h3 className="text-3xl  font-bold mb-4 text-[#179800]">
                        The Peace Lily (Spathiphyllum)
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Known for its elegant white blooms and lush, deep-green leaves, the Peace Lily
                        (<i>Spathiphyllum</i>) is one of the most beloved indoor plants for both beginners and
                        seasoned plant lovers. It doesn’t just add beauty to your home — it also improves air
                        quality by filtering out common household toxins, making your space feel fresher and
                        calmer. <br /><br />
                        Peace Lilies thrive in low to moderate light, preferring indirect sunlight that mimics
                        their natural tropical environment. They enjoy slightly moist soil but dislike
                        overwatering — allowing the top inch of soil to dry out before watering again keeps
                        
                    </p>
                    <p className="text-gray-700 italic mb-5">
                        “A symbol of peace, purity, and new beginnings.”
                    </p>
                    <Link to={'/details/6'}>
                    <button className="bg-[#179800] cursor-pointer hover:bg-[#127a00] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                        Learn More
                    </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Potw;