import React from 'react';
import Rows from './Rows';

function TableList({col,row,handleDelete,handleValueUpdate,type,handleAccept,handleDeliveryBill, handleReceipts,handleOpenUpdateReceipt,handleSetUpdateDeliveryBIll}) {
    return (
        <div className='flex flex-col gap-2 overflow-auto'>
            <div className='flex items-center gap-2 bg-slate-400 py-2 w-fit'>
                {col?.map((item,index)=>(
                    <div className=" font-bold  overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0" key={index}>{item}</div>
                ))|| 'Loading...'}
                <div className='font-bold  overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>Action</div>
            </div>
            <div className='flex flex-col'>
                {/* {row?.map((item,index)=>(
                    <div className={`flex items-center gap-2  ${index%2===0 && 'bg-slate-200'} py-2`} key={index} onClick={()=>handleValueUpdate(item)}>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item._id}</div> 
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.name}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.address}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.phone}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.fax}</div>
                        <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150"onClick={()=>handleDelete(item._id)}>
                            Delete
                        </button>
                    </div>
                ))} */}
                <Rows handleDelete={handleDelete} handleValueUpdate={handleValueUpdate} type={type} row={row} handleAccept={handleAccept} handleDeliveryBill={handleDeliveryBill} handleReceipts={handleReceipts} handleOpenUpdateReceipt={handleOpenUpdateReceipt} handleSetUpdateDeliveryBIll={handleSetUpdateDeliveryBIll}/>
            </div>
        </div>
    );
}

export default TableList;