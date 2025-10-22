import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import loginModel from '../assets/loginModel.png';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const { user, setUser, loginWithEmail, googleLogin } = use(AuthContext);
    // ------------------- Onclick EyeControl ----------------
    const handleEyeClick = (e) => {
        e.preventDefault();
        setEye(!eye);
    }

    //---------------Handle Email and password Login----------------- 
    const handleEmailLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password) ;
        loginWithEmail(email, password).then((result) => {
            const person = result.user;
            setUser(person);
            navigate(location.state || '/');
        })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(errorMessage) ;
            });
    }

    //-------------------Handle google Login---------------------------
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        googleLogin().then((result) => {
            const personnn = result.user;
            setUser(personnn)
            navigate(location.state || '/');
        })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(errorMessage) ;
            });
    }

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-2 md:px-5 py-10 '>

            {/* Image Section */}
            <div className='hidden md:flex md:w-1/2 justify-center items-center'>
                <img
                    src={loginModel}
                    alt="Login Illustration"
                    className='max-w-xl w-full object-contain'
                />

            </div>

            {/* Form Section */}
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <form onSubmit={handleEmailLogin} className='bg-white lg:py-24 rounded-xl shadow-md  border border-gray-200 w-full max-w-md lg:max-w-2xl p-8 md:p-12'>

                    <p className='text-black playfair-display-font text-3xl md:text-4xl text-center font-semibold mb-8'>
                        Login to your account
                    </p>

                    <label className="label font-bold text-[#403F3F] text-[16px] mb-2">Email</label>
                    <input
                        type="email"
                        className="input mb-3 w-full bg-[#F3F3F3] py-4 px-4 rounded-lg"
                        placeholder="Email"
                        name='email'
                    />

                    <label className="label font-bold text-[#403F3F] text-[16px] mb-2 mt-4">Password</label>
                    <div className='relative'>
                        <input
                            type={`${eye ? "text" : "password"}`}
                            className="input mb-3 w-full bg-[#F3F3F3] pr-10 py-4 px-4 rounded-lg"
                            placeholder="Password"
                            name='password'
                        />
                        {
                            eye ? <FaEyeSlash onClick={handleEyeClick} className='z-10 absolute right-4 bottom-5 text-xl text-gray-800'></FaEyeSlash> : <FaEye onClick={handleEyeClick} className='z-10 absolute right-4 bottom-5 text-xl text-gray-800'></FaEye>
                        }
                    </div>
                    <div className='mt-3 flex flex-col md:flex-row gap-3 justify-between'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="checkbox " />
                            <p className='font-bold'>Remember me</p>
                        </div>
                        <p className='text-gray-600 font-bold cursor-pointer hover:text-green-800'>Forget Password</p>
                    </div>

                    <button className="btn mt-7 mb-3 bg-[#179800] hover:bg-[#138000] transition font-bold border-none text-white w-full py-3 rounded-lg">
                        Login
                    </button>

                    <p className='text-center font-semibold text-gray-500 mb-4'>OR</p>

                    <button onClick={handleGoogleLogin} className="btn font-bold bg-gray-100 text-black border border-[#e5e5e5] w-full flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-gray-200 transition">
                        <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </svg>
                        Login with Google
                    </button>

                    <p className='text-[#706F6F] text-center mt-6'>
                        Don’t have an account?{' '}
                        <Link to={'/register'} className='font-bold text-green-700 hover:text-green-900'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
