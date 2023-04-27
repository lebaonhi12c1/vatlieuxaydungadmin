import React, { useCallback, useEffect, useReducer, useState } from 'react';
import TableList from '../components/TableList';
import FormCreate from '../components/FormCreate';
import { producerReducer } from '../reducer';
import FromUpdate from '../components/FromUpdate';
const col = [
  'Id',
  'Name',
  'Address',
  'Phone',
  'Fax'
]
function Producer(props) {
  const [isFetch, setFetch] = useState({
    isloading: false,
    data: null,
    message: ''
  })
  const [row, setRow] = useState(null)
  const [idupdate,setIdupdate] = useState('')
  const [producer, dispatchProducer] = useReducer(producerReducer.reducer, producerReducer.init)
  const inputs = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your content...',
      handlers: e => dispatchProducer({ type: 'setName', payload:  e.target.value  })
    },
    {
      label: 'Address',
      type: 'text',
      placeholder: 'Enter your content...',
      handlers: e => dispatchProducer({ type: 'setAddress', payload:  e.target.value  })
    },
    {
      label: 'Phone',
      type: 'text',
      placeholder: 'Enter your content...',
      handlers: e => dispatchProducer({ type: 'setPhone', payload:  e.target.value  })
    },
    {
      label: 'Fax',
      type: 'text',
      placeholder: 'Enter your content...',
      handlers: e => dispatchProducer({ type: 'setFax', payload:  e.target.value  })
    },
  ]
  const fetchProducer = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/producer`)
      const data = await res.json()
      setFetch({ isloading: false, data: data, message: 'Success' })
      setRow(data.map(item => item))
      console.log(row)
    } catch (error) {
      setFetch({ isloading: false, data: data, message: error })
    }
  }
  useEffect(() => {
    fetchProducer()
  }, [])
  const handleSubmit = useCallback(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/producer/create`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...producer
        })
      })
      const data = await res.json()
      fetchProducer()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [producer])
  const handleDelete = useCallback(async id => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/producer/delete/${id}`, {
        method: 'delete'
      })
      const feedback = await res.json()
      fetchProducer()
      console.log(feedback)
    } catch (error) {
      console.log(error)
    }
  }, [])
  const handleSubmitUpdate = useCallback(async ()=>{
    try {
      const res =await fetch(`${import.meta.env.VITE_SERVER}/producer/update`,{
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: idupdate,
          ...producer
        })
      })
      const feedback = await res.json()
      console.log(feedback)
      fetchProducer()
    } catch (error) {
      console.log(error)
    }
  },[producer,idupdate])
  const handleValueUpdate = useCallback(item=>{
    setIdupdate(item._id)
    dispatchProducer({type:'setName',payload: item.name})
    dispatchProducer({type:'setPhone',payload: item.phone})
    dispatchProducer({type:'setAddress',payload: item.address})
    dispatchProducer({type:'setFax',payload: item.fax})
  },[])
  console.log(producer)
  return (
    <div className='p-4 flex flex-col gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <FormCreate data={inputs} handleSubmit={handleSubmit} />
        <FromUpdate data={inputs} handleSubmit={handleSubmitUpdate} initValue={producer} type={'producer'}/>
      </div>
      <TableList col={col} row={row} handleDelete={handleDelete} handleValueUpdate = {handleValueUpdate} type={'producer'}  />
    </div>
  );
}

export default Producer;