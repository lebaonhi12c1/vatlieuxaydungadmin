import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Slibar(props) {
    const router = useLocation()
    const getActive = type =>{

        return router.pathname.includes(type)
    }
    return (
        <div className='bg-orange-950 text-white pb-10'>
           
            <div className='flex flex-col gap-10'>
                <div className='flex h-[80px] items-center bg-orange-600 justify-center'>logo</div>
                <Link to={'/'} className={`px-4 ${router.pathname === '/' && 'bg-orange-600'} text-white py-2`}>Dashboard</Link>
                <div className=' flex flex-col gap-2'>
                    <div className='ml-4'>Manager</div>
                    <div className='flex flex-col italic'>
                        <Link to={'/user'} className={`px-8 py-2 text-white ${getActive('user') && 'bg-orange-600'}`}>user</Link>
                        <Link to={'/employee'} className={`px-8 py-2 text-white ${getActive('employee') && 'bg-orange-600'}`}>employee</Link>
                        <Link to={'/producer'} className={`px-8 py-2 text-white ${getActive('producer') && 'bg-orange-600'}`}>producer</Link>
                        <Link to={'/product'} className={`px-8 py-2 text-white ${getActive('product') && 'bg-orange-600'}`}>product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slibar;