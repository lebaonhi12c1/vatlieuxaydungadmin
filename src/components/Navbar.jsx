import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
    const navigation = useNavigate()
    const handleLogout = ()=>{
      localStorage.removeItem('user')
      navigation('/login')
    }
    return (
        <div className=' h-[80px] shadow-md shadow-slate-200 flex items-center justify-end px-10 gap-10'>
            <div className="flex items-center gap-5 w-[300px] border border-gray-200 rounded-lg py-3 px-5">
              <span className="flex-shrink-0 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Enter your content..."
              />
            </div>
            <div
              aria-label="noti"
              className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
            >
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full">
                5
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div className=''>
                {JSON.parse(localStorage.getItem('user'))?.name}
            </div>
            <button className='text-white py-1 px-2 bg-orange-600 rounded-sm hover:scale-105 duration-150 active:scale-90' onClick={handleLogout}>
              Logout
            </button>
        </div>
    );
}

export default Navbar;