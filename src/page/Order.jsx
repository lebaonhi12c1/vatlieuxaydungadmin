import React, { useCallback, useEffect, useState } from 'react';
import TableList from '../components/TableList'
import OrderModal from '../components/OrderModal';
import StatusModal from '../components/StatusModal';
import Receipts from '../components/Receipts';
import ReceiptUpdate from '../components/ReceiptUpdate';
import Delivery from '../components/Delivery';
import BillUpdateModal from '../components/BillUpdateModal';
const col = [
    'Id',
    'Customer',
    'Sumary',
    'Vat',
    'Debt',
    'Status',
    'DeliveryBill',
    'Receipts',
    'Employee',
]
const orderStatus = [
    'All',
    'Pending',
    'Delivering',
    'Completed',
    'Canceled'
]
function Order(props) {
    const [active, setActive] = useState('All')
    const [orders, setOrdders] = useState(null)
    const [isReceipts, setIsReceipts] = useState(false)
    const [isReceiptUpdate, setIsReceiptUpdate] = useState(false)
    const [receipts, setReceipts] = useState([])
    const [bills, setBills] = useState([])
    const [receiptInit, setReceiptInit] = useState(null)
    const [isDeliveryBill, setIsDeliveryBill] = useState(false)
    const [row, setRow] = useState(orders)
    const [order, setOrder] = useState(null)
    const [ismodal, setModal] = useState(false)
    const [isUpdateStatus, setIsUpdateStatus] = useState(false)
    const [billUpdate, setBillUpdate] = useState(null)
    const [isUpdateBillModal, setIsUpdateBillModal] = useState(false)
    const getOrder = useCallback(async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order`)
            const data = await response.json()
            setOrdders(data)
        } catch (error) {
            console.log(error)
        }
    })
    useEffect(() => {
        setReceipts(order?.receipts)
        setBills(order?.deliveryBill)
    }, [order])
    useEffect(() => {
        getOrder()
    }, [])
    const handleDelete = useCallback(async (id, event) => {
        event.stopPropagation()
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/delete/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            console.log(data)
            getOrder()
        } catch (error) {
            console.log(error)
        }
    }, [])
    const handleAccept = useCallback((item, e) => {
        e.stopPropagation()
        setOrder(item)
        setIsUpdateStatus(true)
        // try {
        //     const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`,{
        //         method:'put',
        //         headers:{
        //             'Content-Type':'application/json'
        //         },
        //         body: JSON.stringify(
        //             {
        //                 _id: item._id,
        //                 customerid: item.customerid._id,
        //                 status: 'confirmed',
        //                 employeeid: JSON.parse(localStorage.getItem('user'))._id
        //             }
        //         )
        //     })
        //     const data = await response.json()
        //     console.log(data)
        //     getOrder()
        // } catch (error) {
        //     console.log(error)
        // }

    }, [])
    const handleValueUpdate = useCallback(item => {
        setOrder(item)
        setModal(true)

    }, [])
    useEffect(() => {
        active === 'All' ? setRow(orders) : setRow(orders.filter(item => item.status === active.toLowerCase()))
    }, [active, orders])
    const handleDeliveryBill = useCallback((item, e) => {
        e.stopPropagation()
        setOrder(item)
        setIsDeliveryBill(true)
    }, [])
    const handleReceipts = useCallback((item, e) => {
        e.stopPropagation()
        setOrder(item)
        setIsReceipts(true)
    }, [])
    const handleCreateReceipts = useCallback(async (order, receipt) => {
        setIsReceipts(false)
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: order._id,
                        customerid: order.customerid._id,
                        receipts: [...receipts, receipt],
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
    }, [receipts])
    const handleOpenUpdateReceipt = useCallback((order, index, e) => {
        e.stopPropagation()
        setOrder(order)
        setReceiptInit(order.receipts[index])
        setIsReceiptUpdate(true)
    }, [])
    const handleUpdateReceipt = useCallback(async (order) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: order._id,
                        customerid: order.customerid._id,
                        receipts: receipts.map(item => item._id === receiptInit._id ? receiptInit : item),
                        employeeid: JSON.parse(localStorage.getItem('user'))._id
                    }
                )
            })
            const data = await response.json()
            console.log(data)
            getOrder()
            setIsReceiptUpdate(false)
        } catch (error) {
            console.log(error)
        }
    }, [receipts, receiptInit])
    const handleUpdateStatus = useCallback(async (order, status) => {
        setIsUpdateStatus(false)
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: order._id,
                        customerid: order.customerid._id,
                        status: status,
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
    }, [])
    const handleCreateDeliveryBill = useCallback(async (order, bill) => {
        setIsDeliveryBill(false)
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: order._id,
                        customerid: order.customerid._id,
                        deliveryBill: [...bills, bill],
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
    }, [bills])
    const handleSetUpdateDeliveryBIll = useCallback((order, index, e) => {

        e.stopPropagation()
        setOrder(order)
        setBillUpdate(order.deliveryBill[index])
        setIsUpdateBillModal(true)
    }, [])
    const handleUpdateDeliveryBill = useCallback(async (order) => {
        setIsUpdateBillModal(false)
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/order/update`,{
                method:'put',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(
                    {
                        _id: order._id,
                        customerid: order.customerid._id,
                        deliveryBill: bills.map(item=>item._id === billUpdate._id ? billUpdate : item),
                        employeeid: JSON.parse(localStorage.getItem('user'))._id
                    }
                )
            })
            const data = await response.json()
            console.log(data)
            getOrder()
            setIsUpdateBillModal(false)
        } catch (error) {
            console.log(error)
        }
    }, [bills, billUpdate])
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                {orderStatus.map((item, index) => (
                    <div className={`py-2 px-4 rounded-sm text-white ${active === item ? 'bg-orange-500' : 'bg-slate-400'}`} onClick={() => setActive(item)} key={index}>{item}</div>
                ))}
            </div>
            <div className=''>
                <TableList col={col} row={row} handleDelete={handleDelete} type={'order'} handleAccept={handleAccept} handleValueUpdate={handleValueUpdate} handleDeliveryBill={handleDeliveryBill} handleReceipts={handleReceipts} handleOpenUpdateReceipt={handleOpenUpdateReceipt} handleSetUpdateDeliveryBIll={handleSetUpdateDeliveryBIll} />
            </div>
            <OrderModal isOpen={ismodal} handleClose={setModal} data={order} />
            <StatusModal isOpen={isUpdateStatus} handleClose={setIsUpdateStatus} value={order} handleUpdateStatus={handleUpdateStatus} />
            <Receipts isOpen={isReceipts} handleClose={setIsReceipts} handleCreateReceipts={handleCreateReceipts} value={order} />
            <ReceiptUpdate isOpen={isReceiptUpdate} handleClose={setIsReceiptUpdate} init={receiptInit} handleUpdateReceipt={handleUpdateReceipt} value={order} handleSetReceipt={setReceiptInit} />
            <Delivery isOpen={isDeliveryBill} handleClose={setIsDeliveryBill} handleCreateDeliveryBill={handleCreateDeliveryBill} value={order} />
            <BillUpdateModal isOpen={isUpdateBillModal} handleSetBillUpdate={setBillUpdate} handleClose={setIsUpdateBillModal} init={billUpdate} value={order} handleUpdateDeliveryBill={handleUpdateDeliveryBill} />
        </div>
    );
}

export default Order;