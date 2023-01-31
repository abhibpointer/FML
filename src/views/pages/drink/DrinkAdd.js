import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
const {REACT_APP_ADMIN_ENDPOINT } = process.env

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

function DrinkAdd() {
  const [file, setFile] = useState(null)
  const [fileErr, setFileErr] = useState(false)
  const [messageErr, setMessageErr] = useState('');

  //console.log(file)

  const handleFile = (event) => {
    const file = event.target.files[0]
    const fileName = file.name
    if (fileName.trim().slice(fileName.lastIndexOf('.') + 1) === 'xlsx') {
      setFile(file)
    } else {    
      setFileErr('Please enter valid file formate');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('uploadfile', file)

    await axios
      .post(`${REACT_APP_ADMIN_ENDPOINT}/updatedrinkdata`, formData)
      .then((res) => {
        console.log(res)
        alert('Food file Add successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message)
        setMessageErr('Something went wrong')
        return error
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm> 
                  <h2 className="text-center bg-light">Add Drink File</h2>
                  <CInputGroup className="mb-4 mt-4">
                    <CFormInput type="file" name="uploadfile" onChange={handleFile} />
                  </CInputGroup>
                  {fileErr && <p style={{ color: 'red', textAlign: 'left' }}>{fileErr}</p>}
                  <div className="d-grid">
                    <CButton color="btn btn-warning" onClick={handleSubmit}>
                      Add Drink
                    </CButton>
                  </div>
                  {messageErr && (
                    <p style={{ color: 'red' }} className="text-center">
                      {messageErr}
                    </p>
                  )}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default DrinkAdd
