import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = use(AuthContext)

    const plantData = {
        favoritePlant: "Monstera Deliciosa",
        plantLoverLevel: "Expert Gardener 🌿",
        memberSince: "March 2023",
        savedPlants: 24,
        greenScore: 89,
    };

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className=" flex justify-center  px-4 py-16  ">
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg border border-green-100 rounded-3xl w-full max-w-5xl p-10">

                {/* Left: Large profile image */}
                <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full  opacity-40"></div>
                    <img
                        src={user?.photoURL || "https://i.ibb.co/6b6R5T0/default-avatar.png"}
                        alt="User Avatar"
                        className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#e2f7e5] shadow-xl"
                    />
                </div>

                {/* Right: Info */}
                <div className="flex-1 text-left space-y-4">
                    <h2 className="text-4xl font-bold text-[#179800] playfair-display-font">
                        {user?.displayName || "Green Enthusiast"}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">{user?.email}</p>

                    <div className="h-[2px] w-24 bg-gradient-to-r from-[#179800] to-[#56c755] rounded-full my-3"></div>

                    <div className="space-y-2 text-gray-700">
                        <p>
                            <span className="font-semibold text-[#179800]">🌿 Favorite Plant:</span>{" "}
                            {plantData.favoritePlant}
                        </p>
                        <p>
                            <span className="font-semibold text-[#179800]">🌱 Level:</span>{" "}
                            {plantData.plantLoverLevel}
                        </p>
                        <p>
                            <span className="font-semibold text-[#179800]">📅 Member Since:</span>{" "}
                            {plantData.memberSince}
                        </p>
                        <p>
                            <span className="font-semibold text-[#179800]">🪴 Saved Plants:</span>{" "}
                            {plantData.savedPlants}
                        </p>
                        <p>
                            <span className="font-semibold text-[#179800]">💚 Green Score:</span>{" "}
                            {plantData.greenScore}/100
                        </p>
                    </div>

                    <button
                        
                        className="mt-6 bg-[#179800] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Profile;