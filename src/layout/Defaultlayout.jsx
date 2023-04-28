import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slibar from '../components/Slibar';
function Defaultlayout(props) {
    const navigation = useNavigate()
    useEffect(()=>{
        !localStorage.getItem('user') && navigation('/login')
    },[])
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