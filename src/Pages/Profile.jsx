import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
    const { user, updateUserEmail, setUser, updateUserProfile } = use(AuthContext)

    const plantData = {
        favoritePlant: "Monstera Deliciosa",
        plantLoverLevel: "Expert Gardener 🌿",
        memberSince: "March 2023",
        savedPlants: 24,
        greenScore: 89,
    };

    const [update, setUpdate] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdate(!update);
    }


    const updateProfile = (e) => {
        e.preventDefault() ;
        const name = e.target.name.value ;
        const photo = e.target.photoURL.value ;
        updateUserProfile({ displayName: name, photoURL: `${photo ? photo : user.photoURL}` }).then(() => {
            setUser({ ...user, displayName: name, photoURL: `${photo ? photo : user.photoURL}` }) 
            // toast.success("Profile Updated") ;
        })
            .catch((error) => {
                toast.warning(error);
                setUser(user);
            });
    }

    // const handleEmailUpdate = (e) => {
    //     e.preventDefault();
    //     const emaill = e.target.email.value;
    //     console.log(emaill);

    //     updateUserEmail(emaill).then(() => {
    //         toast("Email Updated");
    //         // setUser({...user,email:email}) ;
    //     })
    //         .catch((error) => {
    //             alert(error.message);
    //         })
    // }



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

                    
                    {
                        update ?
                            <div className="flex-1 text-left space-y-6">
                                <h2 className="text-center text-3xl font-bold text-[#179800] playfair-display-font">
                                    Update Your Profile
                                </h2>

                                <form onSubmit={async (e)=>{
                                    e.preventDefault() ;

                                    await updateProfile(e) ;
                                    await handleUpdate(e) ;

                                }} className="space-y-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    
                                    <div>
                                        <label className="text-black block font-bold mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#179800] transition"

                                        />
                                    </div>

                                    
                                    <div>
                                        <label className="block text-black font-bold mb-1 ">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user?.email}
                                            disabled
                                            placeholder='Enter Your Email'
                                            className="bg-gray-100 cursor-not-allowed w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#179800] transition"

                                        />
                                    </div>

                                    {/* Photo URL */}
                                    <div>
                                        <label className="block text-black font-bold mb-1">
                                            Photo URL
                                        </label>
                                        <input
                                            type="text"
                                            name="photoURL"
                                            placeholder="Enter photo URL"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#179800] transition"
                                        />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <button
                                            // type="submit"
                                            className="flex-1 bg-[#179800] text-white font-semibold py-2.5 rounded-lg shadow-sm hover:bg-green-700 transition-all duration-300"
                                        >
                                            Save Changes
                                        </button>

                                        <button
                                            type="button"
                                            className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>


                            :

                            <div className="flex-1 text-left space-y-4">

                                <h2 className="text-4xl font-bold text-[#179800] playfair-display-font">
                                    {user?.displayName || "Green Enthusiast"}
                                </h2>
                                <p className="text-gray-600 text-lg font-medium">{user?.email}</p>

                                <div className="h-0.5 w-24 bg-linear-to-r from-[#179800] to-[#56c755] rounded-full my-3"></div>

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
                                    onClick={handleUpdate}
                                    className="cursor-pointer mt-6 bg-[#179800] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
                                >
                                    Update Profile
                                </button>
                            </div>
                    }

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Profile;