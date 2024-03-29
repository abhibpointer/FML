import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
const {REACT_APP_ADMIN_ENDPOINT } = process.env
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
console.log(REACT_APP_ENDPOINT)
function Managerlist() {
  const [values, setValues] = useState('')
  const [list, setList] = useState('')
  const [outletInfo, setOutletInfo] = useState('')
  const [messageErr, setMessageErr] = useState('')
 

  useEffect(() => {
  const fetchData = async () => {
    const getData = await axios.get(`${REACT_APP_ENDPOINT}/outletlist`)
    setOutletInfo(getData.data.data)
    
  }
    fetchData()
  }, [])

  useEffect(()=>{
    const data = async () =>{
      const result = await axios.get(`${REACT_APP_ENDPOINT}/managerlist?accessType=manager`)
      setList(result.data.data)
      console.log(result.data.data)
    }
    data()
  },[])


  const handleSubmit = async (event) => {
    event.preventDefault()

    let useMe = values == 'manager' ? `accessType=${values}` : `outletId=${values}`;
     console.log(useMe)
    const uri =`${REACT_APP_ENDPOINT}/managerlist?`+useMe;
    await axios.get(uri)
      .then((res) => {
        setList(res.data.data)
        console.log(res.data.data)
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
        <div className='row flex justify-content-end'>
           {/* TODO: For Manager list */}
          {/* <div className='col-md-2'>
            <Link to='/addmanager'>
           <button type='button' className='btn btn-primary'>Add Manager</button>
           </Link>
          </div> */}
          <div className='col-md-2'>
          <select className="search dropdown mt-0 w-100 h-100"
          onChange={(e) => setValues(e.target.value)}
          value ={values}
          >
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
