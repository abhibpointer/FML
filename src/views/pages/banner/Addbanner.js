import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { useRef } from 'react'
import './Addbanner.css'
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

function Addbanner() {
  const ref = useRef(null)
  const [title, setTitle] = useState('')
  const [outletid, setOutletId] = useState('')
  const [active, setActive] = useState(1)
  const [fix, setFix] = useState('')
  const [todate, setToDate] = useState('')
  const [fromdate, setFromDate] = useState('')
  const [file, setFile] = useState(null)
  // const [message, setMessage] = useState('')
  console.log(active)

  //Drop down state
  const [ouletInfo, setOutletInfo] = useState('')

  //Error validation
  const [titleErr, setTitleErr] = useState(false)
  const [outletidErr, setOutletErr] = useState(false)
  //const [activeErr, setActiveErr] = useState(false)
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
    let re = /[0-1]/g
    if (!re.test(fix) || fix.trim() == null) {
      setFixErr('Fix number must be between 0 to 1')
    } else {
      setFixErr(false), setFixErr('')
    }
    setFix(fix)
  }

  const handleToDate = (e) => {
    let todate = e.target.value
    if (todate == '') {
      setTodateErr('To date is required')
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

  // const handleFile = (e) => {
  //   let file = e.target.files[0]
  //   if (!file || file.length == 0) {
  //     setFileErr('File is required')
  //   } else {
  //     setFileErr(false), setFileErr('')
  //   }
  //   setFile(file)
  // }

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
      await axios.get('http://localhost:7777/outletlist').then((res) => {
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

    const uri = 'http://localhost:7777/add'

    axios
      .post(uri, formData)
      .then((res) => {
        console.log(res)
        alert('Successfully banner data added')
        window.location.reload()
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
                <CForm className="starlabel">
                  <h1 className="text-center bg-light">Add your Banner</h1>
                  {/* <p className="text-medium-emphasis text-center">{message}</p> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText className="CInputGroupText">Banner Title:</CInputGroupText>
                    <CFormInput
                      placeholder="Enter Title"
                      name="banner_title"
                      value={title}
                      onChange={handleTitle}
                    />
                  </CInputGroup>
                  {titleErr && <p style={{ color: 'red' }}>{titleErr}</p>}

                  <CInputGroup className="mb03">
                    <CInputGroupText>Outlet</CInputGroupText>

                    <CFormSelect
                      className="text-left"
                      aria-label="Default select example"
                      value={outletid}
                      onChange={handleOutletId}
                    >
                      <option>Select Outlet</option>
                      {ouletInfo
                        ? ouletInfo.map((item, index) => (
                            <option key={index} value={item.outletId}>
                              {item.locality}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </CInputGroup>
                  {outletidErr && <p style={{ color: 'red' }}>{outletidErr}</p>}
                  <br />

                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>Active:</CInputGroupText>
                    <CFormInput
                      type="text"

                      placeholder="Active"
                      // name="is_active"
                      // onChange={handleActive}
                    />
                  </CInputGroup>
                  {activeErr && <p style={{ color: 'red' }}>{activeErr}</p>} */}

                  <CInputGroup className="mb-3">
                    <CInputGroupText>Fix :</CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Enter fix"
                      name="is_fix"
                      onChange={handleFix}
                    />
                  </CInputGroup>
                  {fixErr && <p style={{ color: 'red' }}>{fixErr}</p>}
                  {fix == '0' ? (
                    <div className="date">
                      <CInputGroup className="mb-3">
                        <CInputGroupText>To Date:</CInputGroupText>
                        <CFormInput
                          type="date"
                          placeholder="Enter date"
                          name="todate"
                          onChange={handleToDate}
                        />
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>From Date:</CInputGroupText>
                        <CFormInput
                          type="date"
                          placeholder="Enter date"
                          name="fromDate"
                          onChange={handleFromdate}
                        />
                      </CInputGroup>
                    </div>
                  ) : null}
                  <CInputGroup className="mb-4">
                    <CFormInput type="file" name="uploadfile" onChange={handleFile} />
                  </CInputGroup>
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
