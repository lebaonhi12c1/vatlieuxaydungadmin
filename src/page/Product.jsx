import React from 'react';
import FormCreate from '../components/FormCreate';
import FromUpdate from '../components/FromUpdate';
import TableList from '../components/TableList';
const col = [
    'Name',
]
function Product(props) {
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <FormCreate/>
                <div>
                    <img src="https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681980042~exp=1681980642~hmac=fd696269f330460ea5a0a23c5a837cfd08f3172ac4e3c2cc023ac25948418952" alt="object-contain" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <FromUpdate/>
                <div>
                    <img src="https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681980042~exp=1681980642~hmac=fd696269f330460ea5a0a23c5a837cfd08f3172ac4e3c2cc023ac25948418952" alt="object-contain" />
                </div>
            </div>
            <TableList type={'product'}  />
        </div>
    );
}

export default Product;