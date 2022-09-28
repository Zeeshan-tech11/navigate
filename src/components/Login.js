import React, { useState } from 'react'
import { users } from '../database/users'
import { useNavigate } from 'react-router-dom'
export default function Login({handleLogin}) {
  
  let [name,setName]=useState('')
  let [password,setPassword]=useState('')
  let navigate=useNavigate()
   const handleSubmit=()=>{
     if(users[name]){
       if(users[name]===password){
        handleLogin(true)
        navigate('/todo')
       }else{
        console.log('please enter correct password');

       }
     }else{
      console.log("User not found");


     }
   }
   
 
  return (
    <div className='input-box'>
        <input type="text" value={name} placeholder="user name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit} value="submit">Login</button>
    </div>
  )
}
