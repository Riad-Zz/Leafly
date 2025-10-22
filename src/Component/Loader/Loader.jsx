import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <HashLoader color="#438a42" />
        </div>
    );
};

export default Loader;