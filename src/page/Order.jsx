import React, { useCallback, useEffect, useState } from 'react';
import TableList from '../components/TableList'
const col = [
    'Id',
    'Customer',
    'Sumary',
    'Vat',
    'Debt',
    'Status',
    'Employee',
]
function Order(props) {
    const [orders,setOrdders] = useState(null)
    const getOrder = useCallback(async()=>{
       try {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/order`)
        const data = await response.json()
        setOrdders(data)
       } catch (error) {
        console.log(error)
       }
    })
    useEffect(()=>{
        getOrder()
    },[])
    const handleDelete = useCallback(async(id)=>{
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/delete/${id}`,{
                method:'DELETE',
            })
            const data = await response.json()
            console.log(data)
            getOrder()
        } catch (error) {
            console.log(error)
        }
    })
    const handleAccept = useCallback(async item=>{
        console.log(item)
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`,{
                method:'put',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: item._id,
                        customerid: item.customerid._id,
                        status: 'confirmed',
                        employeeid: JSON.parse(localStorage.getItem('user'))._id
                    }
                )
            })
            const data = await response.json()
            console.log(data)
            getOrder()
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <div className='p-4'>
            <div className=''>
                <TableList col={col} row={orders} handleDelete={handleDelete} type={'order'} handleAccept={handleAccept}/>
            </div>
        </div>
    );
}

export default Order;