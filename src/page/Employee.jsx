import React, { useCallback, useEffect, useState } from 'react';
import FormCreate from '../components/FormCreate';
import FromUpdate from '../components/FromUpdate';
import TableList from '../components/TableList';
const col = [
    'Id',
    'Username',
    'Password',
    'Name',
    'Email',
    'Phone',
    'Address',
    'Position',
    'Image',
]
function Employee(props) {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        position: 'Basic',
        image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1682575443~exp=1682576043~hmac=dba1979174948653b69953a7ea9ebe8cbda18eb31e8c0a517846dae2eff84f97',
    })
    const [employeeUpdate, setEmployeeUpdate] = useState({
        _id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        position: 'Basic',
        image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1682575443~exp=1682576043~hmac=dba1979174948653b69953a7ea9ebe8cbda18eb31e8c0a517846dae2eff84f97',
    })
    const [employees, setEmployees] = useState(null)
    const inputCreate = [
        {
            label: 'Name',
            name: 'name',
            value: employee.name,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, name: e.target.value }),
        },
        {
            label: 'Username',
            name: 'employeename',
            value: employee.employeename,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, username: e.target.value }),
        },
        {
            label: 'Password',
            name: 'password',
            value: employee.password,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, password: e.target.value }),
        },
        {
            label: 'Email',
            name: 'email',
            value: employee.email,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, email: e.target.value }),
        },
        {
            label: 'Phone',
            name: 'phone',
            value: employee.phone,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, phone: e.target.value }),
        },
        {
            label: 'Address',
            name: 'address',
            value: employee.address,
            placeholder: 'Enter your content...',
            handlers: e => setEmployee({ ...employee, address: e.target.value }),
        },
        {
            label: 'Image',
            type: 'file',
            handlers: e => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener('load', () => setEmployee({ ...employee, image: reader.result }))
            }
        },
    ]
    const inputUpdate = [
        {
            label: 'Name',
            name: 'name',
            value: employee.name,
            placeholder: 'Enter your content...',
            type: 'text',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, name: e.target.value }),
        },
        {
            label: 'Username',
            name: 'employeename',
            value: employee.employeename,
            placeholder: 'Enter your content...',
            type: 'text',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, username: e.target.value }),
        },
        {
            label: 'Password',
            name: 'password',
            value: employee.password,
            placeholder: 'Enter your content...',
            type: 'password',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, password: e.target.value }),
        },
        {
            label: 'Email',
            name: 'email',
            value: employee.email,
            placeholder: 'Enter your content...',
            type: 'email',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, email: e.target.value }),
        },
        {
            label: 'Phone',
            name: 'phone',
            value: employee.phone,
            placeholder: 'Enter your content...',
            type: 'text',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, phone: e.target.value }),
        },
        {
            label: 'Address',
            name: 'address',
            value: employee.address,
            placeholder: 'Enter your content...',
            type: 'text',
            handlers: e => setEmployeeUpdate({ ...employeeUpdate, address: e.target.value }),
        },
        {
            label: 'Image',
            type: 'file',
            handlers: e => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener('load', () => setEmployeeUpdate({ ...employee, image: reader.result }))
            }
        },
    ]
    const getEmployees = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/employee`)
            const data = await res.json()
            setEmployees(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getEmployees()
    }, [])
    const handleDelete = useCallback(async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/employee/delete/${id}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            console.log(data)
            getEmployees()
        } catch (error) {
            console.log(error)
        }
    }, [])
    const handleCreate = useCallback(async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/employee/create`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee)
            })
            const data = await res.json()
            getEmployees()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [employee])
    const handleUpdate = useCallback(async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/employee/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...employeeUpdate
                }),
            })
            const data = await res.json()
            getEmployees()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [employeeUpdate])
    const handleValueUpdate = item => {
        setEmployeeUpdate(item)
    }
    return (
        <div className='p-4'>
            <div className='flex flex-col gap-10'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2 p-4 border border-slate-400 rounded-sm'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="producer">Position</label>
                            <select name="category" id="" className='border border-slate-300 py-1 px-2 rounded-sm' onChange={(e) => setEmployee({ ...employee, position: e.target.value })}>
                                <option value="Basic">Basic</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <FormCreate data={inputCreate} handleSubmit={handleCreate} />
                    </div>

                    <div>
                        <img src={employee.image} alt="employee-image" className='w-full h-full object-contain' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2 p-4 border border-slate-400 rounded-sm'>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="producer">Position</label>
                            <select value={employeeUpdate.position} name="category" id="" className='border border-slate-300 py-1 px-2 rounded-sm' onChange={(e) => setEmployee({ ...employeeUpdate, position: e.target.value })}>
                                <option value="Basic">Basic</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <FromUpdate data={inputUpdate} handleSubmit={handleUpdate} initValue={employeeUpdate} handleValueUpdate={handleValueUpdate} type={'employee'} />
                    </div>

                    <div>
                        <img src={employeeUpdate.image} alt="employee-image" className='w-full h-full object-contain' />
                    </div>
                </div>
                <TableList col={col} row={employees} handleDelete={handleDelete} handleValueUpdate={handleValueUpdate} type={'employee'} />
            </div>
        </div>
    );
}

export default Employee;