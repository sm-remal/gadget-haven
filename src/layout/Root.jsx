import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';

const Root = () => {
    const navigation = useNavigation()
    // console.log(navigation)
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                {
                    navigation?.state === "loading" ? <Loader></Loader> : <div className='flex-1 bg-base-300'>
                        <Outlet></Outlet>
                    </div>
                }
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;



