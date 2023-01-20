import React from 'react'
import {Route,Outlet, Navigate, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'

// function ProtectedRoutes() {
  // const[islogin, setIsLogin] = useState('')
  //  console.log(islogin)
  // const checkUserToken =()=>{
  //   const token= localStorage.getItem('auth_token')
  //   console.log(token)
  //   if(!token || token==='undefined'){
  //       setIsLogin(false)
  //   }else{
  //   setIsLogin(true)
  //   }
  // }

  // useEffect(()=>{
  //  checkUserToken()
  // },[islogin])  
  // return (
  //   islogin ? <Outlet /> : <Navigate to='/login'/>
  // )

  function ProtectedRoutes() {
    const isAuthenticated = localStorage.getItem("auth_token");
   // console.log("this", isAuthenticated);
    
    return (
      
          isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
  }
  
export default ProtectedRoutes
