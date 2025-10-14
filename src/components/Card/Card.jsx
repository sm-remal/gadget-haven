import React from 'react';
import { Link } from 'react-router';

const Card = ({ gadgets }) => {
    // console.log(gadgets)
    const {product_id, product_image, price, product_title } = gadgets
    return (
        <div className="card bg-base-100 overflow-hidden rounded-md shadow-sm relative group border-1 border-gray-100">
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
                <Link to={`/product-details/${product_id}`}><button className='btn rounded-full border-2 border-[#9538E2] text-[#9538E2]'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Card;