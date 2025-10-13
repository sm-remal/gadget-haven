import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=''>
            <div className='bg-[#9538E2] pt-8 md:pt-14 pb-24 md:pb-58'>
                <div className='text-center max-w-2xl mx-auto space-y-5 pb-7 md:pb-4 px-6'>
                    <h1 className='text-lg md:text-xl lg:text-3xl font-semibold text-white'>Upgrade Your Tech Accessorize with <br className='hidden md:flex' /> Gadget Heaven Accessories</h1>
                    <p className='text-xs md:text-sm text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to="/dashboard"><button className='btn'>Shop Now</button></Link>
                </div>
            </div>
            <div className='flex justify-center -mt-26 md:-mt-54'>
                 <div className="p-3 border-2 border-gray-100 rounded-2xl">
                <img src={bannerImg} alt="Banner" className='w-[220px] h-[180px] md:w-[680px] md:h-[420px] rounded-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;