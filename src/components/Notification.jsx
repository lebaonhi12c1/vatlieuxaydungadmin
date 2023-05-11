import React from 'react';

function Notification({message, success}) {
    return (
        <div className='flex items-center justify-center fixed inset-0 bg-black/20'>
            <div className={`bg-white p-4 rounded-sm flex items-center gap-4 ${success ? 'text-green-500' : 'text-red-500'}`}>
                {message}
            </div>
        </div>
    );
}

export default Notification;