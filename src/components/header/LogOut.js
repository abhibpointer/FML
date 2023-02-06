import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogOut() {
  const nevigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    nevigate('/login');
  }
  return (
       <div className='' onClick={logout}>
        Logout
      </div>
  )
}
export default LogOut
