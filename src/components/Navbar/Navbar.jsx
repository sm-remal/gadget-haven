import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown -ml-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='my-1'><NavLink>Home</NavLink></li>
                        <li className='my-1'><NavLink>Statistics</NavLink></li>
                        <li className='my-1'><NavLink>Dashboard</NavLink></li>
                    </ul>
                </div>
                <Link className="text-lg md:text-xl lg:text-2xl text-gray-700 font-bold" to="/">Gadget Haven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-1'><NavLink to="/">Home</NavLink></li>
                    <li className='mx-1'><NavLink to="/statistics">Statistics</NavLink></li>
                    <li className='mx-1'><NavLink to="/dashboard">Dashboard</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <Link className=""><ShoppingCart /></Link>
                <Link className=""><Heart /></Link>
            </div>
        </div>
    );
};

export default Navbar;