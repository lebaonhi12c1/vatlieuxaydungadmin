import React, { useCallback, useEffect, useReducer, useState } from 'react';
import TableList from '../components/TableList';
import FormCreate from '../components/FormCreate';
import { producerReducer } from '../reducer';
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
    const [row,setRow] = useState(null)
    const [producer, dispatchProducer] = useReducer(producerReducer.reducer,producerReducer.init)

    const fetchProducer = async()=>{
        try {
          const res = await fetch(`${import.meta.env.VITE_SERVER}/producer`)
          const data = await res.json()
          setFetch({isloading:false,data: data,message: 'Success'})
          setRow(data.map(item=>item))
          console.log(row)
        } catch (error) {
          setFetch({isloading: false,data:data, message: error})
        }
      }
    useEffect(()=>{
        fetchProducer()
    },[]) 
    const handleSubmit =  useCallback( async()=>{
      try {
        console.log(producer.name)
        const res = await fetch(`${import.meta.env.VITE_SERVER}/producer/create`,{
            method: 'post',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name : producer.name
            })
        })
        const data = await res.json()
        fetchProducer()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },[producer])
    const handleDelete = useCallback(async id=>{
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER}/producer/delete/${id}`,{
            method: 'delete'
        })
        const feedback = await res.json()
        fetchProducer()
        console.log(feedback)
      } catch (error) {
        console.log(error)
      }
    },[])
    const inputs = [
        {
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your producer...',
            handlers: value => dispatchProducer({type: 'setName',payload: value})
        }
    ]
    
    return (
        <div className='p-4'>
            <div className='grid grid-cols-2'>
                <FormCreate data={inputs} handleSubmit={handleSubmit}/>
            </div>
            <TableList col={col} row={row} handleDelete={handleDelete}/>
        </div>
    );
}

export default Producer;