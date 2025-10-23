import React from 'react';

const Experts = () => {
    const expertsData = [
        {
            id: 1,
            name: "Alice Green",
            specialization: "Indoor Plants Specialist",
            photo: "https://i.postimg.cc/wT0T2SXb/Plant-Doctor-Request-Patch.jpg",
        },
        {
            id: 2,
            name: "John Leaf",
            specialization: "Succulents & Cacti Expert",
            photo: "https://i.postimg.cc/rwMZVP3n/We-re-featuring-Crazy-Plant-People-from-all-over-the-world-Get-involved-follow-us-and-tag-crazypl.jpg",
        },
        {
            id: 3,
            name: "Emma Flora",
            specialization: "Ornamental Plants Advisor",
            photo: "https://i.postimg.cc/brSHgQMM/We-re-featuring-Crazy-Plant-People-from-all-over-the-world-Get-involved-follow-us-and-tag-crazypl.jpg",
        },
        {
            id: 4,
            name: "David Moss",
            specialization: "Garden & Landscape Designer",
            photo: "https://i.postimg.cc/m2NV5SkC/We-re-featuring-Crazy-Plant-People-from-all-over-the-world-Get-involved-follow-us-and-tag-crazypl.jpg",
        },
    ];
    return (
        <div className="md:max-w-10/12 max-w-11/12 py-12 mx-auto">
            <h2 className="text-center text-4xl font-bold  font-[Playfair_Display] mt-10">
                Meet Our Green Experts
            </h2>
            <p className='text-center my-3 text-[18px] text-[#131313cc] font-medium'>Our team of passionate plant experts is here to guide you — from nurturing tiny succulents to maintaining lush indoor gardens.</p>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:px-4 my-10">
                {expertsData.map((expert) => (
                    <div className='border p-3 rounded-xl border-[#13131326]'>
                        <div
                            key={expert.id}
                            className="cursor-pointer bg-gray-50 hover:bg-gray-200 border-gray-200  p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                        >
                            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden shadow-inner">
                                <img
                                    src={expert.photo}
                                    alt={expert.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
                            <p className="text-gray-600 mt-1 text-center">{expert.specialization}</p>
                            <button className="mt-4 mb-4 px-7 cursor-pointer py-2 bg-green-700 text-white rounded-md text-sm font-semibold hover:bg-green-800 transition">
                                Contact
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Experts;