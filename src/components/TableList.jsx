import React from 'react';

function TableList({col,row,handleDelete}) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                {col.map((item,index)=>(
                    <div className=" font-bold  overflow-hidden whitespace-nowrap w-[200px]" key={index}>{item}</div>
                ))}
                <div className='font-bold  overflow-hidden whitespace-nowrap w-[200px]'>Action</div>
            </div>
            <div className='flex flex-col'>
                {row?.map((item,index)=>(
                    <div className={`flex items-center gap-2  ${index%2===0 && 'bg-slate-200'} py-2`} key={index}>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item._id}</div> 
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.name}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.address}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.phone}</div>
                        <div className=' overflow-hidden whitespace-nowrap w-[200px]'>{item.fax}</div>
                        <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150"onClick={()=>handleDelete(item._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TableList;