import React from 'react'
import {Route,Outlet, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function ProtectedRoutes() {
  const[islogin, setIsLogin] = useState('')
 console.log(islogin)

  const checkUserToken =()=>{
    const token= localStorage.getItem('auth_token')
    console.log(token)
    if(!token || token==='undefined'){
        setIsLogin(false)
    }
    setIsLogin(true)
  }

  useEffect(()=>{
   checkUserToken()
  },[islogin])  
  return (
    islogin ? <Outlet /> : <Navigate to='/login'/>
  )

}

export default ProtectedRoutes;
