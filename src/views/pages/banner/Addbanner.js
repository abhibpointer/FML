import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_LOCAL_HOST } = process.env
import { format } from 'date-fns'
import { useRef } from 'react'
import './Addbanner.css'
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

// console.log(REACT_APP_LOCAL_HOST)
function Addbanner() {
  const ref = useRef(null)
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [outletid, setOutletId] = useState('')
  const [active, setActive] = useState(1)
  const [fix, setFix] = useState('')
  const [todate, setToDate] = useState('')
  const [fromdate, setFromDate] = useState('')
  const [file, setFile] = useState(null)
  // const [message, setMessage] = useState('')

  //Drop down state
  const [ouletInfo, setOutletInfo] = useState('')

  //Error validation
  const [titleErr, setTitleErr] = useState(false)
  const [outletidErr, setOutletErr] = useState(false)
  // const [activeErr, setActiveErr] = useState(false)
  const [fixErr, setFixErr] = useState(false)
  const [todateErr, setTodateErr] = useState(false)
  const [fromdateErr, setFromdateErr] = useState(false)
  const [fileErr, setFileErr] = useState(false)
  const [messageErr, setMessageErr] = useState('')

  const handleTitle = (e) => {
    let title = e.target.value
    if (title.length < 3 || title == null || title == '') {
      setTitleErr('Banner title is required')
    } else {
      setTitleErr(false), setTitleErr('')
    }
    setTitle(title)
  }

  const handleOutletId = (e) => {
    let outletId = e.target.value
    if (!Number(outletId) || outletId.trim() == null || outletId == '') {
      setOutletErr('OutletId is required')
    } else {
      setOutletErr(false), setOutletErr('')
    }
    setOutletId(outletId)
  }

  // const handleActive = (e) => {
  //   let active = e.target.value
  //   let re = /[1]/g
  //   if (!re.test(active) || active.trim() == null) {
  //     setActiveErr('Active is required')
  //   } else {
  //     setActiveErr(false), setActiveErr('')
  //   }
  //   setActive(active)
  // }

  const handleFix = (e) => {
    let fix = e.target.value
  
    if (/[^01]/.test(fix)) {
      setFixErr('Enter number must be 0 and 1')
    } else if(fix.length > 1){
       setFixErr("Enter number must be 0 and 1")
    }
    else {
      setFixErr(false), setFixErr('')
    }
    setFix(fix)
  }

  const handleToDate = (e) => {
    let todate = e.target.value
    if (todate == '') {
      setTodateErr('Date is required')
    } else {
      setTodateErr(false), setTodateErr('')
    }
    setToDate(todate)
  }

  const handleFromdate = (e) => {
    let fromdate = e.target.value
    if (fromdate == '') {
      setFromdateErr('Fromdate is required')
    } else {
      setFromdateErr(false), setFromdateErr('')
    }
    setFromDate(fromdate)
  }

  const isValidFileUploaded = (file) => {
    const validExtensions = ['png', 'jpeg', 'jpg']
    const fileExtension = file.type.split('/')[1]
    return validExtensions.includes(fileExtension)
  }

  const handleFile = (e) => {
    if (e.target.files.length < 1) {
      return
    }
    const file = e.target.files[0]
    if (isValidFileUploaded(file)) {
      setFile(file)
    } else {
      alert('Please enter valid formate file')
      window.location.reload()
    }
  }

  // drop down
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://35.154.86.71:7777/outletlist').then((res) => {
        // console.log(res.data.data)
        setOutletInfo(res.data.data)
      })
    }
    fetchData()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('banner_title', title)
    formData.append('outlet_id', outletid)
    formData.append('is_active', active)
    formData.append('is_fix', fix)
    formData.append('todate', todate)
    formData.append('fromdate', fromdate)
    formData.append('uploadfile', file)

    const uri = 'http://35.154.86.71:7777/addBanner'

    axios
      .post(uri, formData)
      .then((res) => {
        console.log(res)
        alert('Successfully banner data added')
        window.location.reload()
        //need to improve on redirection
        navigate('/bannerlist')
      })
      .catch(() => {
        setMessageErr('Please enter above information')
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
                  <h2 className="text-center bg-light">Add Banner</h2>

                  {/* <p className="text-medium-emphasis text-center">{message}</p> */}
                  <div className="col-md-12">
                    <label className="form-label">Banner Title :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                      name="banner_title"
                      onChange={handleTitle}
                    />
                  </div>
                  {titleErr && <p style={{ color: 'red' }}>{titleErr}</p>}

                  <div className="col-md-12">
                    <label className="form-label">Oulet :</label>
                    <CFormSelect className="text-left" value={outletid} onChange={handleOutletId}>
                      <option>Select Outlet</option>
                      {ouletInfo
                        ? ouletInfo.map((item, index) => (
                            <option key={index} value={item.outletId}>
                              {item.locality}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </div>
                  {outletidErr && <p style={{ color: 'red' }}>{outletidErr}</p>}
                  <br />

                  {/* <div className="col-mb-6">
                    <label className='form-label'>Active:</label>
                    <input
                      type="text"
                      placeholder="1"
                      disabled
                      className='form-control'
                      name="is_active"
                      onChange={handleActive}
                    />
                  </div>
                  {activeErr && <p style={{ color: 'red' }}>{activeErr}</p>}  */}

                  <div className="col-md-12">
                    <label className="form-label">Fix :</label>
                    <input
                      type="Number"
                      min="0"
                      max="1"
                      maxLength="1"
                      className="form-control"
                      placeholder="Enter fix"
                      name="is_fix"
                      onChange={handleFix}
                    />
                  </div>

                  {fixErr && <p style={{ color: 'red' }}>{fixErr}</p>}
                  {fix == '0' ? (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label"> From Date:</label>
                        <input
                          type="date"
                          className="form-control"
                          max={todate}
                          name="fromDate"
                          onChange={handleFromdate}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label"> To Date :</label>
                        <input
                          type="date"
                          className="form-control"
                          // format='yyyy/mm/dd'
                          placeholder="Enter date"
                          min={fromdate}
                          name="todate"
                          onChange={handleToDate}
                        />
                      </div>
                    </div>
                  ) : null}
                  <div className="mb-3 mt-3">
                    <label className="form-label">File Upload :</label>
                    <input
                      type="file"
                      className="form-control"
                      name="uploadfile"
                      onChange={handleFile}
                    />
                  </div>
                  {fileErr && <p style={{ color: 'red' }}>{fileErr}</p>}
                  <div className="d-grid">
                    <CButton color="btn btn-primary" onClick={handleSubmit}>
                      Create Banner
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

export default Addbanner
