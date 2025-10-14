import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <HashLoader color='#9538E2' />
        </div>
    );
};

export default Loader;