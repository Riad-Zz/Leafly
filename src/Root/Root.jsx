import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { HashLoader } from 'react-spinners';
import Loader from '../Component/Loader/Loader';

const Root = () => {
    const naviagtion = useNavigation();
    const isNavigating = naviagtion.state === "loading";
    
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            {
                isNavigating && (
                    <div className='fixed inset-0 z-50 flex justify-center items-center bg-white/70 backdrop-blur-sm'><Loader></Loader></div>
                )
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;