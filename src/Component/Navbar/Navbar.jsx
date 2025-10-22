import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/Logo.png";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
    
    // user = true 
    // setUser(true) ;
    const {user,loading ,logOut} = use(AuthContext) ;
    //  const [isOpen, setIsOpen] = useState(false);
    // console.log(user) 
    //  const photo = user.photoURL ;
    //  console.log(photo) ;

    const links = (
        <>
            <li>
                <NavLink to={'/'}  className="hover:text-[#179800] text-black font-bold">Home</NavLink>
            </li>
            <li>
                <NavLink to={'/plants'} className="hover:text-[#179800] text-black font-bold">Plants</NavLink>
            </li>
            <li>
                <NavLink to={'/profile'} className="hover:text-[#179800] text-black font-bold">My Profile</NavLink>
            </li>
        </>
    );


    const handleLogOut = (e) => {
        e.preventDefault() ; 
        logOut().then(()=>{
            toast.success("Logged Out") ;
        })
        .catch((error) => {
            const message = error.message ;
            toast.warning(message) ;
});
    }

    return (
        <div className="w-full shadow-sm">
            <div className="lg:max-w-10/12 mx-auto px-1  flex justify-between items-center h-20">
                
                <div className="flex items-center relative">
                    {/*------------- Three bar for small screens----------------------- */}
                    <div className="lg:hidden">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-square">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                            >
                                {links}
                            </ul>
                        </div>
                    </div>

                    
                    <Link to={'/'}>
                    <img src={logo} alt="Logo" className=" w-28 h-28 relative -left-4 top-1 lg:left-5 md:top-2 z-10" />
                    </Link>
                    <Link to={'/'}>
                    <span className="hidden lg:block text-3xl  font-bold text-[#179800]">
                        Leafly
                    </span>
                    </Link>

                </div>

                {/*---------------------- Mid Links--------------------------------- */}
                <ul className="hidden lg:flex gap-10 text-gray-700 text-[18px] font-medium midnav">
                    {links}
                </ul>

                {/*-----------------Conditional Redering for User  logo or  Register & Login---------------*/}
                <div className="flex items-center gap-3 md:gap-5 ">
                    {user 
                    
                    ?//------------If User Present-------------------- 
                    
                    (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                    loading ? <span className="loading loading-spinner text-success"></span> :
                                    <img src={`${user.photoURL}`}></img>
                                    }
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-32"
                            >
                                <li>
                                    <button onClick={handleLogOut}  className="hover:bg-gray-200 w-full  px-2 py-1 font-bold ">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) 
                    
                    :             //-----------------If Not Prsent Login/Register----------------------------
                    
                    (
                        <>
                            <Link to={'/login'}>
                            <button className=" outline outline-[#179800]  text-black font-bold px-4 md:px-6 py-2 rounded hover:bg-[#179800] hover:text-white cursor-pointer">
                                Login
                            </button>
                            </Link>
                            <Link to={'/register'}>
                            <button className="bg-[#179800] text-white font-bold px-4 md:px-6 py-2 rounded cursor-pointer">
                                Register
                            </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;
