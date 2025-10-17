import React from 'react';

const CartDashboard = () => {
    return (
        <div>
            <div className='flex  justify-between items-center my-6 px-4'>
                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>Cart</h2>
                <div className='flex gap-3 flex-col md:flex-row items-center '>
                    <h2 className='font-medium'>Total Cost: <span>999</span></h2>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 rounded-full text-[#9538E2] border-2 border-[#9538E2]">Sort by Price</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <button className='py-2 px-4 bg-[#9538E2] text-white rounded-full'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default CartDashboard;