import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogOut() {
  const nevigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    nevigate('/login');
  }
  return (
    <div>
      <button className="btn btn-danger" onClick={logout}>
        LogOut
      </button>
    </div>
  )
}
export default LogOut
