import React, { useState } from 'react';

function StatusModal({value,handleUpdateStatus,isOpen, handleClose}) {
    const [status,setStatus] = useState(value?.status)
    const handleChangeStatus = value=>{
        setStatus(value)
    }
    return (
        isOpen && <div className='flex items-center justify-center bg-black/20 fixed inset-0 overflow-y-auto'>
            <div className='flex flex-col gap-4 bg-white p-4'>
                <div className='text-[24px] text-center'>Update Order</div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Customer info:</div>
                        <div className='flex flex-col'>
                            <div>Name: {value?.customerid?.name}</div>
                            <div>Phone: {value?.customerid?.phone}</div>
                            <div>Email: {value?.customerid?.email}</div>
                            <div>Address: {value?.customerid?.address}</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Product info:</div>
                        <div className='flex flex-col'>
                            {value?.productid.map((item,index)=>(
                                <div className="flex flex-col" key={index}>
                                    <div>Name: {item.name}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div>Price: {item.price}</div>
                                    <div>Category: {item.categoryid.name}</div>
                                    <div>Producer: {item.producerid.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div  className='flex flex-col gap-2'>
                   <div className='font-bold'>Status: </div> 
                   <select name="status" id="status" defaultValue={value.status} onChange={e=>handleChangeStatus(e.target.value)} className='border border-slate-400 rounded-sm p-2'>
                        <option value="pending">Pending</option>
                        <option value="delivering">Delivering</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                   </select>
                </div>
                <div className='flex items-center w-fit self-end gap-4'>
                    <button className='py-1 px-2 bg-blue-500 text-white rounded-sm' onClick={()=>handleUpdateStatus(value,status)}>Apply</button>
                    <button className='py-1 px-2 bg-red-500 text-white rounded-sm' onClick={()=>handleClose(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default StatusModal;