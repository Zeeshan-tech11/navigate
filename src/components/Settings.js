import React, { useState } from 'react'
import { users } from '../database/users'
export default function Settings(props) {
    let {user}=props
    let [newPassword,setNewPassword]=useState('')
    let [oldPassword,setOldPassword]=useState('')

    const handlePasswordChange=()=>{
       if(users[user]!==oldPassword){
        console.log('mismatched password');
       }else{
        console.log('password changed succesfully');
       }
    }
  return (
    <div>
        <input type="password" placeholder="old password" onChange={(e)=>setOldPassword(e.target.value)} />
        <input type="password" placeholder="new password" onChange={(e)=>setNewPassword(e.target.value)} />
        <input type='button'onClick={handlePasswordChange} value="change password"/>
    </div>
  )
}
