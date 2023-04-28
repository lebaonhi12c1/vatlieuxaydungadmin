import React from 'react';

function Rows({ row, type, handleDelete, handleValueUpdate, handleAccept }) {
    const getStyleStatusOrder = value => {
        switch (value) {
            case 'pending':
                return 'bg-slate-300'
            case 'confirmed':
                return 'bg-green-500 text-white'
            case 'delivered':
                return 'bg-yellow-500'
            case 'canceled':
                return 'bg-red-500 text-white'
            default:
                break;
        }
    }
    const getStyleAcceptButton = type=>{
        return type !== 'pending'
    }
    const getRows = () => {
        switch (type) {
            case 'producer':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2 w-fit`} key={index} onClick={() => handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item._id}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.address}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.phone}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.fax}</div>
                                <button className="flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 w-[200px] flex-shrink-0 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )
            case 'category':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2`} key={index} onClick={() => handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item._id}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.name}</div>
                                <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        )) || 'Loading...'}
                    </div>
                )
            case 'product':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2 w-fit`} key={index} onClick={() => handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.quantity}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.price}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>
                                    <img src={item.image} alt="" className='w-[40px] h-full rounded-full object-cover border border-slate-200' />
                                </div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.categoryid?.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.producerid?.name}</div>
                                <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        )) || 'Loading...'}
                    </div>
                )
            case 'user':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2 w-fit`} key={index} onClick={() => handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item._id}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.username}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.password}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.email}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.phone}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.address}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>
                                    <img src={item.image} alt="" className='w-[40px] h-full rounded-full object-cover border border-slate-200' />
                                </div>
                                <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        )) || 'Loading...'}
                    </div>
                )
            case 'employee':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2 w-fit`} key={index} onClick={() => handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item._id}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.username}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.password}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.email}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.phone}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.address}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.position}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>
                                    <img src={item.image} alt="" className='w-[40px] h-full rounded-full object-cover border border-slate-200' />
                                </div>
                                <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        )) || 'Loading...'}
                    </div>
                )
            case 'order':
                return (
                    <div className="">
                        {row?.map((item, index) => (
                            <div className={`flex items-center gap-2  ${index % 2 === 0 && 'bg-slate-200'} py-2 w-fit`} key={index} onClick={()=>handleValueUpdate(item)}>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item._id}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.customerid.name}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.sumary}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.vat}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.debt}</div>
                                <div className={`' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0 bg-slate-300 rounded-md py-1 text-center ${getStyleStatusOrder(item.status)}'`}>{item.status}</div>
                                <div className=' overflow-hidden whitespace-nowrap w-[200px] flex-shrink-0'>{item.employeeid?.name || item.employeeid?._id}</div>
                                <button className={`inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide rounded-sm  duration-150 ${getStyleAcceptButton(item.status) ? 'bg-slate-300 text-slate-500 cursor-not-allowed': 'text-white bg-green-500 hover:scale-105 active:scale-90'}`} onClick={() => handleAccept(item)}>
                                    Accept
                                </button>
                                <button className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-sm hover:scale-105 active:scale-90 duration-150" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        )) || 'Loading...'}
                    </div>
                )
            default:
                break;
        }
    }
    return (
        <div>
            {getRows()}
        </div>
    );
}

export default Rows;