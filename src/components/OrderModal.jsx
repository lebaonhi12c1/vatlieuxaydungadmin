import React from 'react';

function OrderModal({ data, handleClose, isOpen }) {
    return (
        isOpen && <div className='flex items-center justify-center bg-black/20 fixed inset-0'>
            <div className='bg-white p-10 relative w-[60%]'>
                <div className='flex flex-col gap-4'>
                    <div className='text-[24px] self-center'>Order details</div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Customer info:</div>
                        <div className='flex gap-4'>
                            <div className='w-[80px] h-[80px] overflow-hidden rounded-full shadow-2xl shadow-slate-400'>
                                <img src={data.customerid.image} alt="w-full h-full object-cover " />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[16px] text-slate-500'>Id: {data.customerid._id || 'None'}</div>
                                <div className='text-[16px] text-slate-500'>Name: {data.customerid.name || 'None'}</div>
                                <div className='text-[16px] text-slate-500'>Email: {data.customerid.email || 'None'}</div>
                                <div className='text-[16px] text-slate-500'>Phone: {data.customerid.phone || 'None'}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Products:</div>
                        <div className='flex flex-col gap-2'>
                            {data.productid?.map(item => {
                                return (
                                    <div className=" flex gap-4 border-t border-slate-400 py-4" key={item._id}>
                                        <div className='w-[80px] h-[80px] overflow-hidden rounded-full shadow-2xl shadow-slate-400'>
                                            <img src={item.image} alt="w-full h-full object-cover " />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-[16px] text-slate-500'>Id: {item._id || 'None'}</div>
                                            <div className='text-[16px] text-slate-500'>Name: {item.name || 'None'}</div>
                                            <div className='text-[16px] text-slate-500'>Category: {item.categoryid.name || 'None'}</div>
                                            <div className='text-[16px] text-slate-500'>Producer: {item.producerid.name || 'None'}</div>
                                            <div className='text-[16px] text-slate-500'>Price: {item.price || 'None'}</div>
                                            <div className='text-[16px] text-slate-500'>Quantity: {item.quantity || 'None'}</div>
                                        </div>
                                    </div>
                                )
                            }) || 'Loading...'}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-slate-500'>Vat: {data.vat}</div>
                        <div className='text-slate-500'>Debt: {data.debt}</div>
                        <div className='text-red-500 font-bold text-[24px]'>Sumary: {data.sumary}$</div>
                    </div>
                </div>
                <div
                    aria-label="modal-close"
                    className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer right-5 top-5"
                    onClick={() => handleClose(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default OrderModal;