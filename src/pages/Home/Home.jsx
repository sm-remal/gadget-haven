import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import { NavLink, useLoaderData } from 'react-router';

const Home = () => {
    const gadgetsData = useLoaderData()
    console.log(gadgetsData)

    const categories = ["All Product", "Laptop", "Phones", "Accessories", "Smart Watches", "MacBook", "IPhone"]
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <section className='pb-8 md:pb-14 px-4'>
                <div className='text-center mt-12 mb-6 md:mt-20 md:mb-10'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Explore Cutting-Edge Gadgets</h2>
                </div>
                <div className='grid md:grid-cols-12 gap-6'>
                    <div className='md:col-span-2  rounded-lg shadow-md bg-white py-3'>
                        {
                            categories.map(category =>
                                <div className=''>
                                    <li className='px-3 py-2 list-none'><NavLink className="btn w-full bg-gray-200 rounded-full">{category}</NavLink></li>
                                </div>
                            )
                        }
                    </div>
                    <div className='md:col-span-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                gadgetsData.map(gadgets => <Card gadgets={gadgets}></Card>)
                            }
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;