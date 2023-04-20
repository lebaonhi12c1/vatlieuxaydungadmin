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
    const [categoryUpdate, dispatchCategoryUpdate] = useReducer(categoryReducer.create.reducer, categoryReducer.create.init)
    const inputs = {
        create: [
            {
                label: 'Name',
                placeholder: 'Enter your content...',
                type: 'text',
                handlers: value => dispatchCategoryCreate({ type: 'setName', payload: value })
            }
        ],
        update: [
            {
                label: 'Name',
                placeholder: 'Enter your content...',
                type: 'text',
                handlers: value => dispatchCategoryUpdate({ type: 'setName', payload: value })
            }
        ]
    }
    const getCategory = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category`)
            const data = await res.json()
            setCategory(data)
            console.log(data)
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

    }, [])
    const handleValueUpdate = useCallback(item => {
        dispatchCategoryUpdate({ type: 'setId', playload: item._id })
        dispatchCategoryUpdate({ type: 'setId', playload: item.name })
    }, [])
    const handleUpdate = useCallback(async () => {

    })
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