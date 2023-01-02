import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
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
  const [values, setValues] = useState('')
  const [list, setList] = useState('')
  const [outletInfo, setOutletInfo] = useState('')
  const [messageErr, setMessageErr] = useState('')
  //console.log(list)
  console.log(values)


  useEffect(() => {
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:7777/outletlist')
    setOutletInfo(getData.data.data)
  }
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    let useMe = values == 'manager' ? `accessType=${values}` : `outletId=${values}`

    const uri = 'http://localhost:7777/managerlist?' + useMe
    await axios
      .get(uri)
      .then((res) => {
        setList(res.data.data)
      })
      .catch((error) => {
        console.log(error.message)
        setMessageErr(error)
      })
  }

  return (
    <div className="main-container">
      <div className="wapper">
        <br />
        <h3 className="text-center py-50">Manager List</h3>
        <span>{messageErr}</span>
        <div>
          <select className="search dropdown"
          onChange={(e) => setValues(e.target.value)}
          value ={values}
          >
          <option value="">Select the locality</option>
          <option value="manager">All</option>
            {
             outletInfo ? outletInfo.map((item, i)=>(
                <option key={i} value={item.outletId}>{item.locality}</option>
              )): null
            } 
          </select>
          <div>
            <button className="btn btn-info" onClick={handleSubmit}>
              Find
            </button>
          </div>
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
