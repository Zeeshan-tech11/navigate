import React, { useState } from 'react'
import { users } from '../database/users'
import { redirect,useNavigate } from 'react-router-dom'
export default function Login(props) {
  let [name,setName]=useState('')
  let [password,setPassword]=useState('')
  const navigate=useNavigate()
   const handleSubmit=(e)=>{
     if(users[name]){
       if(users[name]===password){

        localStorage.setItem('isAuth',true)
        navigate('/todo')
       }else{
        console.log('please enter correct password');
        localStorage.setItem('isAuth',null)

       }
     }else{
      console.log("User not found");
      localStorage.setItem('isAuth',null)

     }
   }
   
 
  return (
    <div>
        <input type="text" value={name} placeholder="user name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit} value="submit">Login</button>
    </div>
  )
}
