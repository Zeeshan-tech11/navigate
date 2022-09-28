import React, { useState } from 'react'
import { users,setPassword } from '../database/users'
import Navbar from './Navbar'
import authContext from './Context'
import { useNavigate } from 'react-router-dom'
export default function Settings(props) {
    let {user,isAuth}=props
    let navigator=useNavigate()
    if(authContext._currentValue==false){
      navigator('/')
    }
    let [newPassword,setNewPassword]=useState('')
    let [oldPassword,setOldPassword]=useState('')

    const handlePasswordChange=()=>{
       if(users[user]!==oldPassword){
        console.log('mismatched password');
       }else{
        setPassword(newPassword)
        console.log('password changed succesfully');
       }
    }
  return (
    <>
    <Navbar/>
    <div className='input-box'>
        <input type="password" placeholder="old password" onChange={(e)=>setOldPassword(e.target.value)} />
        <input type="password" placeholder="new password" onChange={(e)=>setNewPassword(e.target.value)} />
        <button onClick={handlePasswordChange} value="change password">Change Password</button>
    </div>
    </>
  )
}
