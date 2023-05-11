import React, { useCallback, useEffect, useReducer, useState } from 'react';
import FormCreate from '../components/FormCreate';
import FromUpdate from '../components/FromUpdate';
import TableList from '../components/TableList';
import { categoryReducer } from '../reducer';
import { useCloseNotification } from '../hooks';
import Loading from '../components/Loading'
import Notification from '../components/Notification';
const col = [
    'Id',
    'Name'
]
function Category(props) {
    const [feeback,setFeeback] = useState({
        notification: false,
        loading: false,
        success: false,
        message: '',
    })
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
        setFeeback({...feeback,loading:true})
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
            setFeeback({loading:false,message:feedback.message,success:feedback.success,notification:true})
            getCategory()
        } catch (error) {
            setFeeback({loading:false,message:error,success:false,notification:true})
        }
    })
    const handleDelete = useCallback(async id => {
        setFeeback({...feeback,loading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER}/category/delete/${id}`, {
              method: 'delete'
            })
            const feedback = await res.json()
            setFeeback({loading:false,message:feedback.message,success:feedback.success,notification:true})
            getCategory()
            console.log(feedback)
          } catch (error) {
            setFeeback({loading:false,message:error,success:false,notification:true})
          }
    }, [])
    const handleValueUpdate = useCallback(item => {
        dispatchCategoryUpdate({ type: 'setId', payload: item._id })
        dispatchCategoryUpdate({ type: 'setName', payload: item.name })
    }, [])
    useCloseNotification(feeback,setFeeback)
    const handleUpdate = useCallback(async () => {
        setFeeback({...feeback,loading: true})
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
            setFeeback({loading:false,message:feedback.message,success:feedback.success,notification:true})
            getCategory()
          } catch (error) {
            setFeeback({loading:false,message:error,success:false,notification:true})
          }
    },[categoryUpdate])
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='p-4 border border-slate-400 rounded-sm'><FormCreate data={inputs.create} handleSubmit={handleSubmit} /></div>
               <div className='p-4 border border-slate-400 rounded-sm'> <FromUpdate type={'category'} data={inputs.update} handleSubmit={handleUpdate} initValue={categoryUpdate} /></div>
            </div>
            <div>
                <TableList type={'category'} col={col} row={category} handleDelete={handleDelete} handleValueUpdate={handleValueUpdate} />
            </div>

            <Loading isOpen={feeback.loading} message={'Loading...'}/>
            {feeback.notification && (
                <Notification message={feeback.message} success={feeback.success}/>
            )}
        </div>
    );
}

export default Category;