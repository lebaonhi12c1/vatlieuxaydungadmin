import React, { useState } from 'react';
import { uid } from 'uid';

function Delivery({isOpen,value,handleClose,handleCreateDeliveryBill}) {
    const [bill,setBill] = useState({
        _id: uid(),
        date: '',
    })
    return (
        isOpen && <div className='flex items-center justify-center fixed inset-0 bg-black/20 overflow-y-auto'>
           <div className='flex flex-col gap-4 bg-white p-4'>
                <div className='text-[24px] text-center'>Create DeliveryBill</div>
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
                        <div className='flex gap-4'>
                            <div className='flex gap-4'>
                                {value?.productid.map((item,index)=>(
                                    <div className="flex flex-col border-l border-slate-400 px-4" key={index}>
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
                </div>
                <div  className='flex flex-col gap-4'>
                   <div className='flex flex-col gap-2'>
                        <label htmlFor="date">Date of inventory</label>
                        <input type="date" onChange={e=>setBill({...bill,date: e.target.value})} className='p-2 border border-slate-400 rounded-sm'  />
                   </div>
                </div>
                <div className='flex items-center w-fit self-end gap-4'>
                    <button className='py-1 px-2 bg-blue-500 text-white rounded-sm' onClick={()=>handleCreateDeliveryBill(value,bill)}>Apply</button>
                    <button className='py-1 px-2 bg-red-500 text-white rounded-sm' onClick={()=>handleClose(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Delivery;