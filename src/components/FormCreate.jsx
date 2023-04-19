import React from 'react';

function FormCreate({ data,handleSubmit }) {
    return (
        <div className='flex flex-col gap-2 p-4 border border-slate-200 rounded-sm'>
            {data.map((item, index) => {
                return (
                    <div className="flex flex-col gap-2 w-full" key={index}>
                        <label htmlFor={item.label}>{item.label}</label>
                        <input
                            type="text"
                            placeholder={item.placeholder}
                            className=" border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
                            onChange={e=>item.handlers(e.target.value)}
                        />
                    </div>
                )
            })}
            <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-sm h-[40px] w-fit hover:scale-105 active:scale-90 duration-150" onClick={handleSubmit}>
                Create
            </button>
        </div>
    );
}

export default FormCreate;