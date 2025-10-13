import React from 'react';
import { Link } from 'react-router';

const Card = ({ gadgets }) => {
    console.log(gadgets)
    const { product_image, price, product_title } = gadgets
    return (
        <div className="card bg-base-100 overflow-hidden rounded-md shadow-lg relative group border-2 border-gray-200">
            <figure>
                <img
                    src={product_image}
                    alt="Shoes"
                    className='w-full h-[240px] object-cover transform group-hover:scale-105 transition duration-300' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_title}
                    <div className="badge bg-[#9538E2] text-white">NEW</div>
                </h2>
                <p>Price: <span>{price}</span> TK</p>
                <Link><button className='btn rounded-full border-2 border-[#9538E2] text-[#9538E2]'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Card;