import React, { useCallback, useEffect, useReducer, useState } from 'react';
import FormCreate from '../components/FormCreate';
import FromUpdate from '../components/FromUpdate';
import TableList from '../components/TableList';
import { categoryReducer } from '../reducer';
const col = [
    'Id',
    'Name'
]
function Category(props) {
    const [category, setCategory] = useState(null)
    const [categoryCreate, dispatchCategoryCreate] = useReducer(categoryReducer.create.reducer, categoryReducer.create.init)
    const [categoryUpdate, dispatchCategoryUpdate] = useReducer(categoryReducer.update.reducer, categoryReducer.update.init)
    const inputs = {
        create: [
            {
                label: 'Name',
                placeholder: 'Enter your content...',
                type: 'text',
                handlers: e => dispatchCategoryCreate({ type: 'setName', payload: e.target.value })
            }
        ],
        update: [
            {
                label: 'Name',
                placeholder: 'Enter your content...',
                type: 'text',
                handlers: e => dispatchCategoryUpdate({ type: 'setName', payload: e.target.value })
            }
        ]
    }
    const getCategory = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category`)
            const data = await res.json()
            setCategory(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = useCallback(async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category/create`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...categoryCreate
                })
            })
            const feedback = await res.json()
            console.log(feedback)
            getCategory()
        } catch (error) {
            console.log(error)
        }
    })
    const handleDelete = useCallback(async id => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category/delete/${id}`, {
              method: 'delete'
            })
            const feedback = await res.json()
            getCategory()
            console.log(feedback)
          } catch (error) {
            console.log(error)
          }
    }, [])
    const handleValueUpdate = useCallback(item => {
        dispatchCategoryUpdate({ type: 'setId', payload: item._id })
        dispatchCategoryUpdate({ type: 'setName', payload: item.name })
    }, [])
    const handleUpdate = useCallback(async () => {
        try {
            const res =await fetch(`${import.meta.env.VITE_SERVER}/category/update`,{
              method: 'put',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...categoryUpdate
              })
            })
            const feedback = await res.json()
            console.log(feedback)
            getCategory()
          } catch (error) {
            console.log(error)
          }
    },[categoryUpdate])
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <FormCreate data={inputs.create} handleSubmit={handleSubmit} />
                <FromUpdate type={'category'} data={inputs.update} handleSubmit={handleUpdate} initValue={categoryUpdate} />
            </div>
            <div>
                <TableList type={'category'} col={col} row={category} handleDelete={handleDelete} handleValueUpdate={handleValueUpdate} />
            </div>
        </div>
    );
}

export default Category;