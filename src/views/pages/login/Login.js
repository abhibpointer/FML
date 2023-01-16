import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//const {REACT_APP_LOCAL_HOST_ADMIN} = process.env
//import './style.css'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigator = useNavigate()
 
  const [userName, setUserName] = useState('')  
  const [password, setPassword] = useState('')
  const [userNameErr, setUserNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [message, setMessage] = useState('')



 const handleUsername =(e)=>{
  let username = e.target.value
  if(username.trim() == null || username ==''){
    setUserNameErr("Username is required")
  }else{
    setUserNameErr(false), setUserName("")
  }
  setUserName(username)
 }
 const handlePassword = (e) => {
  let password= e.target.value
  //let re="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$" re.test(password)
  if(password == null || password ==''){
    setPasswordErr("No password provided")
  }else{
    setPasswordErr(false), setPasswordErr("")
  }
  setPassword(password)
 }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://35.154.86.71:7778/login', {
        userName: userName,
        password: password,
      })
      .then((res) => {
        
        if (res.data.data.auth_token) {
         const key = res.data.data.auth_token
          localStorage.clear()
          //localStorage.setItem('auth_token', key) 
           localStorage.setItem("auth_token", JSON.stringify(key))
          navigator("/pages/banner/Listbanner")
          
        }
      })
      .catch(() => {
        setMessage("Enter valid username and password")
      })
      
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>  
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <>
                  <CForm>
                    <h1 className=''>Login</h1>
                    <p className="text-medium-emphasis">After logining in, you can enjoy the provoleges.</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type='text'
                        placeholder="Username"
                        autoComplete="username"
                        floatingLabel="Username"
                        value={userName}
                        onChange={handleUsername}
                      />
                    </CInputGroup>
                    {userNameErr&& <p style={{color:"red", fontsize:"12px"}}>{userNameErr}</p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                         floatingLabel="Password"
                         autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </CInputGroup>
                    {passwordErr && <p style={{color:"red", fontsize:"12px"}}>{passwordErr}</p>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>
                          Login
                        </CButton>
                        <p className="text-center" style={{color:"red"}}>{message}</p>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <Link to='/forgetpage'>
                          <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                        </Link>
                      </CCol> */}
                    </CRow>
                  </CForm>
                  </>
                </CCardBody>
              </CCard>

  
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  
  )
}

export default Login
