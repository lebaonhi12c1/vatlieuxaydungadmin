import React, { useCallback, useEffect, useReducer, useState } from 'react';
import FormCreate from '../components/FormCreate';
import FromUpdate from '../components/FromUpdate';
import TableList from '../components/TableList';
import { productReducer } from '../reducer';
const col = [
    'Name',
    'Quantity',
    'Price',
    'Image',
    'Category',
    'Prodecer',
]
function Product(props) {
    const [products, setProducts] = useState(null)
    const [categorys, setcategorys] = useState(null)
    const [producers, setproducers] = useState(null)
    const [productCreate, dispatchproductCreate] = useReducer(productReducer.create.reducer, productReducer.create.init)
    const [productUpdate, dispatchproductUpdate] = useReducer(productReducer.update.reducer, productReducer.update.init)
    const inputs = [
        {
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductCreate({ type: 'setName', payload: e.target.value })
        },
        {
            label: 'Quantity',
            type: 'number',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductCreate({ type: 'setQuantity', payload: e.target.value })
        },
        {
            label: 'Price',
            type: 'number',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductCreate({ type: 'setPrice', payload: e.target.value })
        },
        {
            label: 'Image',
            type: 'file',
            placeholder: 'Enter your content...',
            handlers: e => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                    dispatchproductCreate({ type: 'setImage', payload: reader.result })
                };
            }
        },
    ]
    const inputUpdate = [
        {
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductUpdate({ type: 'setName', payload: e.target.value })
        },
        {
            label: 'Quantity',
            type: 'number',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductUpdate({ type: 'setQuantity', payload: e.target.value })
        },
        {
            label: 'Price',
            type: 'number',
            placeholder: 'Enter your content...',
            handlers: e => dispatchproductUpdate({ type: 'setPrice', payload: e.target.value })
        },
        {
            label: 'Image',
            type: 'file',
            placeholder: 'Enter your content...',
            handlers: e => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                    dispatchproductUpdate({ type: 'setImage', payload: reader.result })
                };
            }
        },
    ]
    const getProducts = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/product`)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getCategory = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category`)
            const data = await res.json()
            setcategorys(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getProducer = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/producer`)
            const data = await res.json()
            setproducers(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleCreateProduct = useCallback(async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/product/create`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...productCreate
                })
            })
            const feedback = await res.json()
            console.log(feedback)
            getProducts()
        } catch (error) {
            console.log(error)
        }
    })
    const handleDelete = useCallback(async id => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/product/delete/${id}`, {
              method: 'delete'
            })
            const feedback = await res.json()
            getProducts()
            console.log(feedback)
          } catch (error) {
            console.log(error)
          }
    }, [products])
    const handleValueUpdate = useCallback(item => {
        dispatchproductUpdate({type: 'setId', payload: item._id})
        dispatchproductUpdate({type: 'setName', payload: item.name})
        dispatchproductUpdate({type: 'setPrice', payload: item.price})
        dispatchproductUpdate({type: 'setQuantity', payload: item.quantity})
        dispatchproductUpdate({type: 'setImage', payload: item.image})
        dispatchproductUpdate({type: 'setCategoryid', payload: item.categoryid})
        dispatchproductUpdate({type: 'setProducerid', payload: item.producerid})
    }, [])
    const handleUpdate = useCallback(async () => {
        try {
            const res =await fetch(`${import.meta.env.VITE_SERVER}/product/update`,{
              method: 'put',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...productUpdate
              })
            })
            const feedback = await res.json()
            console.log(feedback)
            getProducts()
          } catch (error) {
            console.log(error)
          }
    })
    useEffect(() => {
        getProducts()
        getCategory()
        getProducer()
    }, [])
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-4 border border-slate-200 rounded-sm p-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="producer">Producer</label>
                        <select name="producer" id="" className='border border-slate-300 py-1 px-2 rounded-sm'onChange={(e)=>dispatchproductCreate({type: 'setProducerid', payload: e.target.value})}>
                            {producers?.map(item => (
                                <option key={item._id} value={item._id} className=''>{item.name}</option>
                            )) || 'Loading...'}
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="producer">Category</label>
                        <select name="category" id="" className='border border-slate-300 py-1 px-2 rounded-sm'onChange={(e)=>dispatchproductCreate({type: 'setCategoryid', payload: e.target.value})}>
                            {categorys?.map(item => (
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )) || 'Loading...'}
                        </select>
                    </div>
                    <FormCreate data={inputs} handleSubmit={handleCreateProduct} />
                </div>

                <div>
                    <img src={productCreate?.image || "https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681980042~exp=1681980642~hmac=fd696269f330460ea5"} className="object-contain" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-4 border border-slate-200 rounded-sm p-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="producer">Producer</label>
                        <select name="producer" id="" className='border border-slate-300 py-1 px-2 rounded-sm' onChange={(e)=>dispatchproductUpdate({type: 'setProcuderid', payload: e.target.value})}>
                            {producers?.map(item => (
                                <option key={item._id} value={item._id} className=''>{item.name}</option>
                            )) || 'Loading...'}
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="producer">Category</label>
                        <select name="category" id="" className='border border-slate-300 py-1 px-2 rounded-sm' onChange={(e)=>dispatchproductUpdate({type: 'setCategoryid', payload: e.target.value})}>
                            {categorys?.map(item => (
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )) || 'Loading...'}
                        </select>
                    </div>
                    <FromUpdate data={inputUpdate} handleSubmit={handleUpdate} initValue={productUpdate} type={'product'} />
                </div>
                
                <div>
                    <img src={productUpdate?.image || "https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681980042~exp=1681980642~hmac=fd696269f330460ea5a0a23c5a837cfd08f3172ac4e3c2cc023ac25948418952"} className="object-contain" />
                </div>
            </div>
            <TableList type={'product'} col={col} row={products} handleDelete={handleDelete} handleValueUpdate={handleValueUpdate} />
        </div>
    );
}

export default Product;