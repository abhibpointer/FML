import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
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
  const [file, setFile] = useState(null)
  //const [message, setMessage] = useState('')
  const [getFile, setGetFile] = useState(null)
  const [messageErr, setMessageErr] = useState('')
  console.log(banner_title)

  //Dropdown oulet data
  const [outletInfo, setOuletInfo] = useState([])

  const isValidFileUploaded=(file)=>{
    const validExtensions = ['png','jpeg','jpg']
    const fileExtension = file.type.split('/')[1]
    return validExtensions.includes(fileExtension)
  }
  
  const fileChange = e => {
      if(e.target.files.length < 1){
        return;
      }
      const file = e.target.files[0];
      if(isValidFileUploaded(file)){
        setFile(file)
      }else{
        alert('Please enter valid formate file')
        window.location.reload()
      }
  }
  

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:7777/outletlist').then((res) => {
        // console.log(res.data.data)
        setOuletInfo(res.data.data)
      }, [])
    }
    fetchData()
  }, [])

  //get data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await axios.get(`http://localhost:7777/list/${id}`)
        let items = getData.data.data
        console.log(items)

        setOutletId(items.outlet_id)
        setTitle(items.banner[0].banner_title)
        setActive(items.banner[0].is_active)
        setFix(items.banner[0].is_fix)

         // need to improve here
        // const val1 = items.banner[0].duration.todate
        // const date = (date) => {
        //   const dateConverter = format(new Date(date), 'dd/mm/yyyy')
        //   return dateConverter
        // }
        // setToDate(date(val1))
        // const val2 = items.banner[0].duration.fromdate
        // setFromDate(date(val2))

        setGetFile(items.banner[0].image_path)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

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

    axios
      .put(`http://localhost:7777/update/${id}`, formData)
      .then((res) => {
        alert('Successfully banner data updated');
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
                <CForm>
                  <h1 className="text-center bg-light">Edit your Banner</h1>
                  {/* <p className="text-medium-emphasis text-center">{message}</p> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Banner Title:</CInputGroupText>
                    <CFormInput
                      placeholder="Enter Title"
                      name="banner_title"
                      value={banner_title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Oulet:</CInputGroupText>
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
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Active:</CInputGroupText>
                    <CFormInput
                      placeholder="Enter active"
                      name="is_active"
                      value={is_active}
                      onChange={(e) => setActive(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Fix :</CInputGroupText>
                    <CFormInput
                      placeholder="Enter fix"
                      name="is_fix"
                      value={is_fix}
                      onChange={(e) => setFix(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>To Date:</CInputGroupText>
                    <CFormInput
                      type="date"
                      placeholder="Enter date"
                      name="todate"
                      value={todate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>From Date:</CInputGroupText>
                    <CFormInput
                      type="date"
                      placeholder="Enter date"
                      name="fromDate"
                      value={fromdate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      type="file"
                      name="uploadfile"
                      onChange={fileChange}
                    />
                  </CInputGroup>
                  <p className="text-medium-emphasis text-left pd-30px">{getFile}</p>
                  <div className="d-grid">
                    <CButton color="btn btn-primary" onClick={handleSubmit}>
                      Update Banner
                    </CButton>
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
