import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env;
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CRow,
  CFormSelect,
} from '@coreui/react'

function Downloaddrinks() {
 const [outletData, setOutletData] = useState([]);
 const [drinkData, setDrinkData] = useState([])

 
const handleOutlet= async(e)=>{
let outletId= e.target.value
      const res= await axios.get(`${REACT_APP_ENDPOINT}/downloaddrink/${outletId}`)
        setDrinkData(res.data.data)
}
    useEffect(()=>{
    const fetchOulet = async ()=>{
    const oulet= await axios.get(`${REACT_APP_ENDPOINT}/outletlist`)
     setOutletData(oulet.data.data)
    }
    fetchOulet()
    },[])

const handleSubmit =(e)=>{
e.preventDefault()
  const Export = (a) => {
    console.log(a)
        const fileType ="xlsx"
        const ws= XLSX.utils.json_to_sheet(a);
        const wb = {Sheets:{data:ws}, SheetNames:["data"]};
        const excelBuffer =XLSX.write(wb, {bookType:"xlsx", type:"array"});
        const data= new Blob([excelBuffer], {type:fileType});
        FileSaver.saveAs(data, "drink file"+".xlsx" )
  };  
  Export(drinkData)
}
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9} lg={7} xl={6}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm> 
                <h2 className="text-center">Download drink</h2>
                <div className='col-md-12'>
                 <label className='form-label'>Outlet:</label>
                 <CFormSelect className='text-left' onChange={handleOutlet}>
                  <option>Select Oulet</option>
                   {outletData ? outletData.map((item, index)=>(
                   <option key={index} value={item.outletId}>{item.locality}</option>  
                   )) : null}
                 </CFormSelect>
                </div>
                <div className='col-md-12 text-center mt-4'>
                 <button className='btn btn-primary' onClick={handleSubmit}>Download</button>
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

export default Downloaddrinks