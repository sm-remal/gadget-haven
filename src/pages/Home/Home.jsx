import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import useCustomHook from '../../Hooks/useCustomHook';

const Home = () => {
    const gadgetsData = useCustomHook()
    const {allProducts} = gadgetsData
    // console.log(allProducts)
    const [selectCategory, setSelectCategory] = useState('All Product');

    const filteredProducts = selectCategory === 'All Product'
        ? allProducts || []
        : (allProducts || []).filter(item => item.category === selectCategory);

    const categories = ["All Product", "Laptop", "Phones", "Accessories", "Smart Watches", "MacBook", "IPhone"];

    return (
        <div className='bg-gray-100 content-layout'>
            <Banner />

            <section className='pb-8 md:pb-14 px-4'>
                <div className='text-center mt-12 mb-6 md:mt-20 md:mb-10'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                        Explore Cutting-Edge Gadgets
                    </h2>
                </div>

                <div className='grid md:grid-cols-12 gap-6'>
                    {/* Categories Sidebar */}
                    <div className='md:col-span-2 rounded-lg shadow-sm bg-white py-3'>
                        {categories.map(category => (
                            <li
                                key={category}
                                className='px-3 py-2 list-none'
                                onClick={() => setSelectCategory(category)}
                            >
                                <button className={`btn w-full rounded-full ${selectCategory === category ? 'bg-[#9538E2] text-white' : 'bg-gray-200'}`}>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className='md:col-span-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(gadget => (
                                    <Card key={gadget.product_id} gadgets={gadget} />
                                ))
                            ) : (
                                <p className='text-center col-span-full'>No products found for "{selectCategory}"</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;