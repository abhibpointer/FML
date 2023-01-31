import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
const {REACT_APP_ADMIN_ENDPOINT } = process.env
import { format } from 'date-fns'
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

function Deletedrinkproduct() {
 const [file, setFile] = useState(null)
 const [fileErr, setFileErr] = useState(null)



const handleExcelFile = (event) =>{
 const file = event.target.files[0];
//  let fileType = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
// console.log(file.type)

 if(file){
let fileName = file.name
 if(!(fileName.trim().slice(fileName.lastIndexOf('.')+1) === 'xlsx')){
  setFileErr("Please select only Xlsx file")
 }else{
  setFileErr(false), setFileErr("")
 }
 setFile(file)

// if(file && fileType.includes(file.type)){
//     setFile(file)
// }else{
//   setFileErr('Please select only Xlsx file')
//   setFile(null)
// }
}
}

const handleDelete = (e) =>{
 e.preventDefault();
 console.log(file)
 const formData = new FormData();
 formData.append('uploadfile', file)
  
 axios.post(`${REACT_APP_ENDPOINT}/deletedrinkdata`, formData).then((res)=>{
  console.log(res)
  alert('product deleted successfully')
 })
 .catch((error)=>{
  console.log(error)
  alert('Something wrong')
 })

}
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm className="row g-3">
                  <h3 className="p-3 mb-2 bg-light text-dark text-center">Delete Drink Product</h3>
                   {/* <div className='col-md-12'>
                     <label className='form-label'>Item Code:</label>
                     <input
                     type='Number'
                     className='form-control'
                     min='0'
                     onChange={handleItemCode}
                     />
                   </div>
                   <div className='col-md-12'>
                   <label className='form-label'>Outlet Name:</label>
                  <CFormSelect className='text-left' onChange={handleDropdown}>
                    <option>Select name</option>
                    {
                      dropdown ? dropdown.map((item, index)=>(
                        <option key={index} value={item.outletId}>{item.locality}</option>
                      )):null
                    }
                  </CFormSelect>
                   </div> */}
                   <div>
                    <label className='form-label'> File:</label>
                    <input 
                    type='file'
                    className='form-control'
                    onChange={handleExcelFile}
                    />
                   </div>
                   {fileErr && (<p style={{color:'red', textAlign:'left'}}>{fileErr}</p>)}
                   <div className='col-md-12 text-center'>
                    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
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

export default Deletedrinkproduct