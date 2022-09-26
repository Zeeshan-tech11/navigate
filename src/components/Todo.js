import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import authContext from './Context';
export default function Todo() {
    let [todoList,setTodoList]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(list=>{
            return(list.slice(0,10))
        }).then(list=>{
            setTodoList(list)
        })
        .catch(err=>console.log(err))
    },[])
    const isAuth=useContext(authContext)
    console.log(isAuth);
  return (
    
    <div>
        {console.log(todoList)}
        <table style={{border:'2px solid red'}}>
        <tr>
            <th>No</th>
            <th>Todos</th>
            <th>Status</th>
        </tr>
       {todoList.map(list=>(
        <tr key={list.id} >
            <td>{list.id}</td>
            <td >{list.title}</td>
            <td>{list['completed']?<img style={{width:25}} src='https://cdn-icons-png.flaticon.com/512/5290/5290081.png' alt='done'></img>:<img style={{width:25}} alt='undoe' src='https://cdn.vectorstock.com/i/1000x1000/39/33/sand-hourglass-for-time-countdown-icon-vector-42843933.webp'></img>}</td>

        </tr>
       ))}
       </table>
    </div>
  )
}
