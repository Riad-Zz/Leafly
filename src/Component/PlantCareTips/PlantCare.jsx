import React from 'react';

const PlantCare = () => {
    const tipsData = [
        {
            id: 1,
            title: "Watering",
            description:
                "Water your plants regularly, but avoid overwatering. Most indoor plants prefer the soil to dry slightly between waterings.",
            icon: "💧",
        },
        {
            id: 2,
            title: "Sunlight",
            description:
                "Place your plants where they get adequate sunlight. Some plants thrive in direct sunlight, while others prefer indirect light.",
            icon: "☀️",
        },
        {
            id: 3,
            title: "Fertilizing",
            description:
                "Feed your plants with a balanced fertilizer during the growing season to promote healthy growth and vibrant foliage.",
            icon: "🌱",
        },
    ];
    return (
        <div>
            <div className=" py-12">
                <h2 className="text-center text-4xl font-bold  font-[Playfair_Display] my-10">
                    Plant Care Tips
                </h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    {tipsData.map((tip) => (
                        <div
                            key={tip.id}
                            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-4xl mb-4 flex justify-center">{tip.icon}</div>
                            <h3 className="text-center text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                            <p className="text-center text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlantCare;