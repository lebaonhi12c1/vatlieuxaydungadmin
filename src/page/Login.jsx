import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigation = useNavigate()
    const [user,setUser] = useState({
        username: '',
        password: ''
    })
    const handleLogin = useCallback(async()=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/employee/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await res.json()
            localStorage.setItem('user', JSON.stringify(data.data));
            navigation('/')
        } catch (error) {
            console.log(error)
        }
    })
    useEffect(()=>{
        localStorage.getItem('user') && navigation('/')
    },[])
    return (
        <div className='flex fixed rounded-sm inset-0 items-center justify-center'>
            <div className="bg-white w-[400px] h-[400px] shadow-xl shadow-orange-600/70 flex flex-col items-center justify-center p-4 gap-4">
                <div className="text-[24px]">Login</div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Username..." className='p-2 border border-slate-300 rounded-sm focus-visible:outline-orange-600' onChange={e=>setUser({...user,username: e.target.value})} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" placeholder="Password..." className='p-2 border border-slate-300 rounded-sm focus-visible:outline-orange-600' onChange={e=>setUser({...user,password: e.target.value})} />
                </div>
                <button className='py-2 px-3 bg-orange-600 rounded-sm text-white hover:scale-105 active:scale-90 duration-150 shadow-md shadow-orange-600/70' onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;