import React, { useEffect, useState } from 'react';

function Profile(props) {
    const [user, setUser] = useState(null)

    const setLocalStore = ()=>{
        localStorage.setItem('user',JSON.stringify(user))
    }
    // useEffect(()=>{
    //     localStorage.setItem('user',JSON.stringify(user))
    // },user)
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    const handleUpdateProfile = async()=>{
        console.log(user)
        try {
            const res = await fetch('http://localhost:8080/employee/update',{
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                }
                ,
                body: JSON.stringify(user)
            })
            const data = await res.json()
           setUser(data.data)
           setLocalStore(user)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex p-4 flex-col gap-4'>
            <div className='text-[24px] text-center'>Your Profile</div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor='name'>Name: </label>
                    <input 
                        type="text"
                        className='border border-slate-400 rounded-sm p-1'
                        defaultValue={user?.name}
                        onChange={e=>setUser({...user,name: e.target.value})}
                        placeholder='Update...'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor='email'>Email: </label>
                    <input 
                        type="email"
                        className='border border-slate-400 rounded-sm p-1'
                        defaultValue={user?.email}
                        onChange={e=>setUser({...user,email: e.target.value})}
                        placeholder='Update...'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor='phone'>Phone: </label>
                    <input 
                        type="text"
                        className='border border-slate-400 rounded-sm p-1'
                        defaultValue={user?.phone}
                        onChange={e=>setUser({...user,phone: e.target.value})}
                        placeholder='Update...'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor='address'>Address: </label>
                    <input 
                        type="text"
                        className='border border-slate-400 rounded-sm p-1'
                        defaultValue={user?.address}
                        onChange={e=>setUser({...user,address: e.target.value})}
                        placeholder='Update...'
                    />
                </div>
                <button className='py-2 px-4 hover:scale-105 active:scale-90 duration-150  bg-orange-500 text-white rounded-sm w-fit' onClick={handleUpdateProfile}>Apply</button>
            </div>
        </div>
    );
}

export default Profile;