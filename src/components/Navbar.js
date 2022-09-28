import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigator=useNavigate()
  return (
    <div className='navbar'>
                 <div> <button className='nav-btn' onClick={()=>navigator(-1)}>Back</button></div>
          <div>  <Link to ="/todo">Todo</Link>
            <Link to ="/settings">Change settings</Link></div>
    </div>
  )
}
