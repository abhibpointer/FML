import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
} from '@coreui/react'

function AddManager() {
const [userName, setUserName] = useState('');
const [ouletId, setOutletId] = useState('');
const [accessType, setAccessType] = useState('');
const [password, setPassword] = useState('');

useEffect(()=>{
const fetchOulet= async()=>{

}
fetchOulet
},[])

const handleSubmit = ()=>{

}
    
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9} lg={7} xl={6}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm className="row g-3">
                <h2 className="text-center">Add Manager</h2>

                <div className="col-md-12">
                  <label className="form-label">User Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={(e)=> setUserName(e.target.value)}
                  />
                </div>
                <div className='col-md-12'>
                    <label className='form-label'>Outlet:</label>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter outlet'
                    />
                </div>
                <div className='col-md-12'>
                <label className='form-label'>Access Type:</label>
                <input 
                type='text'
                className='form-control'
                placeholder='Enter access type'
                />
                </div>
                <div className='col-md-12'>
                <label className='form-label'>Password:</label>
                <input 
                type='text'
                className='form-control'
                placeholder='Enter access type'
                />
                </div>
                <div className='col-md-12 text-center'>
                 <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                </div>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>

  )
}

export default AddManager