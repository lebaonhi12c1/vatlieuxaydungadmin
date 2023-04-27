import React from 'react';

function Rows({ row, type,handleDelete,handleValueUpdate }) {
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
                        ))|| 'Loading...'}
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
                        ))|| 'Loading...'}
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
                        ))|| 'Loading...'}
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
                        ))|| 'Loading...'}
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