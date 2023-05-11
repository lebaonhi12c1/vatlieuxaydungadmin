import React, { useEffect, useState } from 'react';
function ReceiptUpdate({isOpen,handleUpdateReceipt,handleClose,init,value,handleSetReceipt}) {
    return (
        isOpen && <div className='flex items-center justify-center fixed inset-0 bg-black/20 overflow-y-auto'>
           <div className='flex flex-col gap-4 bg-white p-4'>
                <div className='text-[24px] text-center'>Update Receipt</div>
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
                <div  className='flex flex-col gap-4'>
                   <div className='flex flex-col gap-2'>
                        <label htmlFor="date">Date</label>
                        <input type="date" onChange={e=>handleSetReceipt(pre=>({...pre,date: e.target.value}))} className='p-2 border border-slate-400 rounded-sm' defaultValue={init?.date}  />
                   </div>
                   <div className='flex flex-col gap-2'>
                        <label htmlFor="times">Times</label>
                        <input type="number" onChange={e=>handleSetReceipt(pre=>({...pre,stt: e.target.value}))}  className='p-2 border border-slate-400 rounded-sm' placeholder='Enter your content...'  defaultValue={init?.stt} />
                   </div>
                   <div className='flex flex-col gap-2'>
                        <label htmlFor="money">Amount of money</label>
                        <input type="number" onChange={e=>handleSetReceipt(pre=>({...pre,money: e.target.value}))} className='p-2 border border-slate-400 rounded-sm' placeholder='Enter your content...' defaultValue={init?.money}  />
                   </div>
                   <div className='flex flex-col gap-2'>
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status"onChange={e=>handleSetReceipt(pre=>({...pre,status: e.target.value}))} defaultValue={init?.status} className='p-2 border border-slate-400 rounded-sm'>
                            <option value="unpaid">Unpaid</option>
                            <option value="paid">Paid</option>
                        </select>
                   </div>
                </div>
                <div className='flex items-center w-fit self-end gap-4'>
                    <button className='py-1 px-2 bg-blue-500 text-white rounded-sm' onClick={()=>handleUpdateReceipt(value)}>Apply</button>
                    <button className='py-1 px-2 bg-red-500 text-white rounded-sm' onClick={()=>handleClose(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ReceiptUpdate;