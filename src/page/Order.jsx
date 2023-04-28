import React, { useCallback, useEffect, useState } from 'react';
import TableList from '../components/TableList'
import OrderModal from '../components/OrderModal';
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
    const [order,setOrder] = useState(null)
    const [ismodal, setModal] = useState(false)
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
    const handleValueUpdate = useCallback(item=>{
        setOrder(item)
        setModal(true)
    },[])
    return (
        <div className='p-4'>
            <div className=''>
                <TableList col={col} row={orders} handleDelete={handleDelete} type={'order'} handleAccept={handleAccept} handleValueUpdate={handleValueUpdate}/>
            </div>
            <OrderModal isOpen = {ismodal} handleClose={setModal} data={order}/>
        </div>
    );
}

export default Order;