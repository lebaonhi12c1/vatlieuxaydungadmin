import React from 'react';

function Loading({message, isOpen}) {
    return (
        isOpen && <div className='flex items-center justify-center bg-black/20'>
            <div className='flex items-center gap-4 bg-white'>
                <div className='w-[30px] h-[30px] border-[4px] border-slate-500 border-r-transparent animate-spin'></div>
                <div>{message}</div>
            </div>
        </div>
    );
}

export default Loading;