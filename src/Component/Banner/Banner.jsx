import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import photo from "../../assets/banner1.png";
import photo2 from "../../assets/Banner2.png";
import photo3 from "../../assets/banner3.png";
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'

const Banner = () => {

    //----------------------Data For Our SlideShow-------------------------------------------
    const slides = [
    {
        title: "Nature Inside",
        description:
            "Bring nature indoors with our modern and stylish plant arrangements. From elegant planters to statement greenery pieces, our designs blend seamlessly with any decor. Create a personal sanctuary that inspires creativity, relaxation, and connection to the natural world.",
        img: photo3,
    },
    {
        title: "Plant Your Space",
        description:
            "Add a touch of serenity to your workspace or study with low-maintenance plants that thrive even in low light. Our curated collection improves focus, reduces stress, and creates a visually refreshing environment — perfect for home offices, studios, or cozy reading nooks.",
        img: photo2,
    },
    {
        title: "Green Paradise",
        description:
            "Transform your home into a lush indoor oasis with our premium indoor plants. From air-purifying ferns to vibrant flowering plants, each selection is hand-picked to enhance your space. Enjoy cleaner air, a boost in mood, and the calming presence of nature in every corner.",
        img: photo,
    },
    
];


    const products = [
        {
            name: "Snake Plant",
            img: product1,
        },
        {
            name: "Monstera Deliciosa",
            img: product2,
        },
    ];


    return (
        <div className=" text-black w-full  md:py-10  px-1 md:px-6">
            {/*-------------------Grid Layout--------------------------------*/}
            <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-6 md:max-w-10/12 mx-auto">
                {/* ------------------Swiper Carousel-------------------------------*/}
                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop
                        className="rounded-xl shadow-lg"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#F3F3F3] flex  flex-col-reverse md:flex-row items-center justify-between h-[75vh] rounded-xl overflow-hidden relative ">

                                    {/* -----------------Right Side---------------------------------------- */}
                                    <div className="lg:flex flex-col space-y-3 p-4 lg:p-10 md:max-w-1/2 ">
                                        <h2 className="text-[#179800] text-4xl md:text-5xl font-bold drop-shadow">
                                            {slide.title}
                                        </h2>
                                        <p className="text-black text-sm md:text-base drop-shadow">
                                            {slide.description}
                                        </p>
                                        <div className="flex gap-3 pt-4">
                                            <button className="bg-[#179800] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-transparent hover:text-[#179800] hover:outline hover:outline-[#179800] transition cursor-pointer">
                                                SEE MORE
                                            </button>
                                            <button className="font-bold border border-[#179800] px-6 py-3 rounded-full text-sm hover:bg-[#179800] hover:text-white transition">
                                                SUBSCRIBE
                                            </button>
                                        </div>
                                    </div>

                                    {/*---------------------- Left Side Image--------------------------------------- */}
                                    <div className="lg:flex relative w-full h-full rounded-xl overflow-hidden">
                                        <img
                                            src={slide.img}
                                            alt={slide.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>

                {/*----------------------------Product Cards-------------------------------------------- */}
                <div className="hidden lg:flex flex-col justify-between gap-3 h-[75vh]">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative flex-1 rounded-xl overflow-hidden border border-[#13131326] group cursor-pointer p-4 bg-white"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-3/3 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#F3F3F3] rounded-xl p-3"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
