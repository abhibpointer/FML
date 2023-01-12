import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const {REACT_APP_LOCAL_HOST } = process.env

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

function Editbanner() {
  const { id } = useParams()

  const [banner_title, setTitle] = useState('')

  const [outlet_id, setOutletId] = useState('')
  const [is_active, setActive] = useState('')
  const [is_fix, setFix] = useState('')

  const [todate, setToDate] = useState('')
  const [fromdate, setFromDate] = useState('')

  const [file, setFile] = useState('')
  //const [message, setMessage] = useState('')
  const [getFile, setGetFile] = useState('')

  const [messageErr, setMessageErr] = useState('')

  //Dropdown oulet data
  const [outletInfo, setOuletInfo] = useState([])

    // const preFile = getFile.split('/')[1]
    // console.log(preFile)

  const isValidFileUploaded = (file) => {
    const validExtensions = ['png', 'jpeg', 'jpg']
    const fileExtension = file.type.split('/')[1]
    return validExtensions.includes(fileExtension)
  }
   
  const fileChange = (e) => {
    const file = e.target.files[0] 
  
    if (isValidFileUploaded(file)) {
      setFile(file)
    } else {
    alert('Please enter valid formate file')
    window.location.reload()
    }
     
  }
  // fileChange(preFile)
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${REACT_APP_LOCAL_HOST}outletlist`).then((res) => {
        setOuletInfo(res.data.data)
      }, [])
    }
    fetchData()
  }, [])

  //get data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await axios.get(`${REACT_APP_LOCAL_HOST}getBanner/${id}`)
        let items = getData.data.data
        const item = items.banner.find((obj) => obj._id == id)

        setOutletId(items.outlet_id)
        setTitle(item.banner_title)
        setActive(item.is_active)
        setFix(item.is_fix)
        setGetFile(item.image_path)

        const date = (date) => {
          const dat = format(new Date(date), 'yyyy/MM/dd').toLocaleString()
          return dat
        }

        const val1 = item.duration.todate
        setToDate(date(val1))
        const val2 = item.duration.fromdate
        setFromDate(date(val2))
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  const handletodate = (date) => {
    let b = format(new Date(date), 'yyyy/MM/dd').toLocaleString()
    setToDate(b)
  }

  const handleFromdate = (date) => {
    let b = format(new Date(date), 'yyyy/MM/dd').toLocaleString()
    setFromDate(b)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('outlet_id', outlet_id)
    formData.append('banner_title', banner_title)
    formData.append('is_active', is_active)
    formData.append('is_fix', is_fix)
    formData.append('todate', todate)
    formData.append('fromdate', fromdate)
    formData.append('uploadfile', file)

    axios.put(`${REACT_APP_LOCAL_HOST}updateBanner/${id}`, formData)
      .then((res) => {
        console.log(res)
        alert('Successfully banner data updated')
        window.location.reload()
      })
      .catch(() => {
        setMessageErr('Please enter above infromation')
      })
    setMessageErr('')
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm className="row g-3">
                  <h2 className="text-center bg-light">Edit Banner</h2>
                  {/* <p className="text-medium-emphasis text-center">{message}</p> */}
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>Banner Title:</CInputGroupText>
                    <CFormInput
                      placeholder="Enter Title"
                      name="banner_title"
                      value={banner_title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </CInputGroup> */}
                  <div className="col-md-12">
                    <label className="form-label">Banner Title :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                      name="banner_title"
                      value={banner_title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Oulet :</label>
                    <CFormSelect
                      className="text-left"
                      value={outlet_id}
                      onChange={(e) => setOutletId(e.target.value)}
                    >
                      <option>Select Outlet</option>
                      {outletInfo
                        ? outletInfo.map((item, index) => (
                            <option key={index} value={item.outletId}>
                              {item.locality}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Active :</label>
                    <input
                      type="Number"
                      min='0'
                      max='1'
                      className="form-control"
                      placeholder="Enter active"
                      name="is_active"
                      value={is_active}
                      onChange={(e) => setActive(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Fix :
                    </label>
                    <input
                      type="Number"
                      min='0'
                      max='1'
                      className="form-control"
                      placeholder="Enter fix"
                      name="is_fix"
                      value={is_fix}
                      onChange={(e) => setFix(e.target.value)}
                    />
                  </div>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>Active:</CInputGroupText>
                    <CFormInput
                      placeholder="Enter active"
                      name="is_active"
                      value={is_active}
                      onChange={(e) => setActive(e.target.value)}
                    />
                  </CInputGroup> */}
                  {is_fix == '0' ? (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">From Date:</label>
                        <DatePicker
                          disableFuture
                          className="form-control"
                          value={fromdate}
                          dateFormat="dd/MM/yyyy"
                          name="fromDate"
                          isClearable
                          onChange={handleFromdate}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">To Date:</label>
                        <DatePicker
                          disableFuture
                          className="form-control"
                          value={todate}
                          openTo="year"
                          dateFormat="dd/MM/yyyy"
                          max={todate}
                          onChange={handletodate}
                          isClearable
                        />
                        {/* {console.log(todate)} */}
                      </div>
                    </div>
                  ) : null}

                  <div className="mb-2 mt-3">
                  <label className="form-label">File Upload :</label>
                    <input
                      type="file"
                      className="form-control"
                      name="uploadfile"
                      onChange={fileChange}
                    />
                  </div>
                  <p className="text-medium-emphasis text-left pd-30px">{getFile}</p>
                  <div className="d-grid">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Update Banner
                    </button>
                    {messageErr && (
                      <p className="text-center" style={{ color: 'red' }}>
                        {messageErr}
                      </p>
                    )}
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

export default Editbanner
