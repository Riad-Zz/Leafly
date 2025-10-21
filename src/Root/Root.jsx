import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';

const Root = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;