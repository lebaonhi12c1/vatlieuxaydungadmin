import React, { useCallback, useEffect, useState } from 'react';
import TableList from '../components/TableList';
import FromUpdate from '../components/FromUpdate';
const col = [
    'Id',
    'Username',
    'Password',
    'Name',
    'Email',
    'Phone',
    'Address',
    'Image',
]
function User(props) {
    const [users,setUsers] = useState(null)
    const [user,setUser] = useState({
        _id: '',
        name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        address: '',
        image: 'https://img.freepik.com/free-vector/colorful-new-product-composition-with-flat-design_23-2147903423.jpg?w=740&t=st=1682573578~exp=1682574178~hmac=05beb067a455e4f801b75f3591a0018f3c74b93c8945af6d75e2938f2474c700',
    })
    const inputs = [
        {
            label: 'Name',
            name: 'name',
            value: user.name,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,name: e.target.value}),
        },
        {
            label: 'Username',
            name: 'username',
            value: user.username,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,username: e.target.value}),
        },
        {
            label: 'Password',
            name: 'password',
            value: user.password,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,password: e.target.value}),
        },
        {
            label: 'Email',
            name: 'email',
            value: user.email,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,email: e.target.value}),
        },
        {
            label: 'Phone',
            name: 'phone',
            value: user.phone,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,phone: e.target.value}),
        },
        {
            label: 'Address',
            name: 'address',
            value: user.address,
            placeholder: 'Enter your content...',
            handlers: e=>setUser({...user,address: e.target.value}),
        },
        {
            label: 'Image',
            type: 'file',
            handlers: e => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener('load',()=>setUser({...user,image: reader.result}))
            }
        },
    ]
    const getUsers = async() =>{
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/user`)
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUsers()
    },[])
    const handleDelete = useCallback(async id => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/user/delete/${id}`, {
              method: 'delete'
            })
            const feedback = await res.json()
            getUsers()
            console.log(feedback)
          } catch (error) {
            console.log(error)
          }
    }, [])
    const handleValueUpdate = useCallback(item => {
       setUser({
        _id: item._id,
        name: item.name,
        username: item.username,
        password: item.password,
        email: item.email,
        phone: item.phone,
        address: item.address,
        image: item.image,
       })
    }, [])
    const handleSubmit = useCallback(async()=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/user/update`, {
              method: 'put',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ...user
              })
            })
            const feedback = await res.json()
            console.log(feedback)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    },[user])
    return (    
        <div className='p-4'>
            <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <FromUpdate data={inputs} type={'user'} initValue={user} handleSubmit={handleSubmit}/>
                    <div>
                        <img src={user.image} alt="user-image" className='w-full h-full object-contain' />
                    </div>
                </div>
                <TableList col={col} row={users} type={'user'} handleDelete={handleDelete} handleValueUpdate={handleValueUpdate}/>
            </div>
        </div>
    );
}

 export default User;