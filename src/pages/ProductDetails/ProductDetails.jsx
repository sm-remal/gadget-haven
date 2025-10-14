import React from 'react';
import useCustomHook from '../../Hooks/useCustomHook';
import { useParams } from 'react-router';
import { Heart, Star } from 'lucide-react';

const ProductDetails = () => {
    const { allProducts } = useCustomHook()
    const { id } = useParams()
    const details = allProducts.find(product => product.product_id === id)
    const { product_image, product_title, price, rating, description, category, availability, specification } = details || {}
    console.log(details)
    return (
        <div className='pb-14'>
            <div className='bg-[#9538E2] text-center space-y-5 pt-10 pb-52 px-3 md:px-0'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-white font-semibold'>Products Details</h2>
                <p className='max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex justify-center -mt-44'>
                <div className='flex flex-col md:flex-row gap-8 shadow-sm max-w-5xl p-5.5 rounded-2xl bg-white '>
                    <div className='flex justify-center'>
                        <img src={product_image} alt="" className='w-[400px] h-full rounded-2xl' />
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>{product_title}</h2>
                        <p className='font-medium text-gray-500'>price: {price} TK</p>
                        <div className='flex gap-5'>
                            <p className='btn btn-xs rounded-full bg-violet-200 border-2 border-violet-600 text-violet-600'>{category}</p>
                            <h3 className={`${availability ? "bg-green-200 border-2 border-green-600 text-green-600" : "bg-amber-100 border-2 border-amber-400 text-amber-400"} btn btn-xs py-0 px-2 rounded-full`}>{availability ? "In-Stock" : "Stock-Out"}</h3>
                        </div>
                        <p className='text-sm md:text-md text-gray-500'>{description}</p>
                        <h3 className='text-gray-500'><span className='font-bold'>Specification: </span> {specification?.map((p, index) => <li className='ml-14 text-sm' key={index}>{p}</li>)}</h3>

                        <div className='space-y-1'>
                            <h3 className='text-gray-500 font-bold'>Rating</h3>
                            <div className='flex gap-4'>
                                <span className='flex'><Star color='gold' size={20} /><Star color='gold' size={20} /><Star color='gold' size={20} /><Star color='gold' size={20} /><Star size={20} color='gray' /></span>
                                <span className='text-gray-500'>{rating}</span>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='btn bg-violet-600 text-white btn-sm'>Add To Cart</button>
                            <span className='cursor-pointer'><Heart color='red' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;