import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slibar from '../components/Slibar';
function Defaultlayout(props) {
    return (
        <div className='root-container'>
            <div className='grid grid-cols-5'>
                <Slibar />
                <div className='col-span-4'>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Defaultlayout;