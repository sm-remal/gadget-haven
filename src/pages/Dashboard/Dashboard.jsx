import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
    return (
        <div className='content-layout'>
            <div className='text-center space-y-4 bg-[#9538E2] py-12'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white'>Dashboard</h2>
                <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className='hidden md:flex'/> the coolest accessories, we have it all!</p>
                <div className='flex gap-3 justify-center items-center mt-8 '>
                    <Link to="/cart"><button className='py-2 px-4 font-medium cursor-pointer bg-white hover:bg-gray-300 rounded-full'>Cart</button></Link>
                    <Link to="/wishlist"><button className='py-2 px-4 rounded-full bg-[#9538E2] cursor-pointer hover:bg-purple-700  text-white border-2'>Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;