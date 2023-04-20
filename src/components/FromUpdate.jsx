import React from 'react';

function FromUpdate({ data, handleSubmit, initValue,type }) {
    const getProductValue = type => {
        switch (type) {
            case 'Name':

                return initValue.name
            case 'Address':

                return initValue.address
            case 'Phone':

                return initValue.phone
            case 'Fax':

                return initValue.fax

            default:
                break;
        }
    }
    const getCategoryValue = type=>{
        switch (type) {
            case 'Name':
                return initValue.name
            default:
                break;
        }
    }
    const getType = value => {
        switch (type) {
            case 'product':
                return getProductValue(value)
            case 'category':
                return getCategoryValue(value)
            default:
                break;
        }
    }

    return (
        <div className='flex flex-col gap-2 p-4 border border-slate-200 rounded-sm'>
            {data?.map((item, index) => {
                return (
                    <div className="flex flex-col gap-2 w-full" key={index}>
                        <label htmlFor={item.label}>{item.label}</label>
                        <input
                            value={getType(item.label)}
                            type="text"
                            placeholder={item.placeholder}
                            className=" border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            onChange={e => item.handlers(e.target.value)}
                        />
                    </div>
                )
            }) || "Loading..."}
            <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-sm h-[40px] w-fit hover:scale-105 active:scale-90 duration-150" onClick={handleSubmit}>
                Update
            </button>
        </div>
    );
}

export default FromUpdate;