import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const {REACT_APP_LOCAL_HOST} = process.env
import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import avatar8 from './../../../assets/images/avatars/8.jpg'

function Managerlist() {
  console.log(REACT_APP_LOCAL_HOST)
  const [values, setValues] = useState('')
  const [list, setList] = useState('')
  const [outletInfo, setOutletInfo] = useState('')
  const [messageErr, setMessageErr] = useState('')
  console.log(list)
  //console.log(values)


  useEffect(() => {
  const fetchData = async () => {
    const getData = await axios.get(`${REACT_APP_LOCAL_HOST}outletlist`)
    setOutletInfo(getData.data.data)
  }
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    let useMe = values == 'manager' ? `accessType=${values}` : `outletId=${values}`

    const uri = `${REACT_APP_LOCAL_HOST}managerlist?` + useMe
    await axios.get(uri)
      .then((res) => {
        setList(res.data.data)
      })
      .catch((error) => {
        console.log(error.message)
        setMessageErr(error)
      })
  }

  return (
    <div className="main-container mt-4">
        <h3 className="text-center">Manager List</h3>
        <span>{messageErr}</span>
        <div className='row flex justify-content-start'>
          <div className='col-md-2'>
          <select className="search dropdown mt-2 w-100 h-90"
          onChange={(e) => setValues(e.target.value)}
          value ={values}
          >
          {/* <option value="">Select the locality</option> */}
          <option value="manager">All</option>
            {
             outletInfo ? outletInfo.map((item, i)=>(
                <option key={i} value={item.outletId}>{item.locality}</option>
              )): null
            } 
          </select>
          </div>
          <div className='col-md-1'>
            <button className="btn btn-info w-100" onClick={handleSubmit}>
              Find
            </button>
          </div>
        </div>
      <br />
      <div>
        <CRow className="CRow">
          <CCol xs>
            <CCard className="mb-4">
              <CCardBody>
                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow className="text-center">
                      <CTableHeaderCell>Sr. No.</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">
                        <CIcon icon={cilPeople} />
                      </CTableHeaderCell>
                      <CTableHeaderCell>Outlet</CTableHeaderCell>
                      <CTableHeaderCell>Manager Name</CTableHeaderCell>
                      <CTableHeaderCell>Password</CTableHeaderCell>
                      <CTableHeaderCell>Access Type</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {list
                      ? list.map((item, index) => (
                          <CTableRow key={index} className="text-center">
                            <CTableDataCell>{index + 1}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              <CAvatar size="md" src={avatar8} />
                            </CTableDataCell>
                            <CTableDataCell>{item.outletId}</CTableDataCell>
                            <CTableDataCell>{item.userName}</CTableDataCell>
                            <CTableDataCell>{item.password}</CTableDataCell>
                            <CTableDataCell>{item.accessType}</CTableDataCell>
                          </CTableRow>
                        ))
                      : null}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Managerlist
