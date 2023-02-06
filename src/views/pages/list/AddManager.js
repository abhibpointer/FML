import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
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

function AddManager() {
  let navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [outletId, setOutletId] = useState('')
  const [accessType, setAccessType] = useState('')
  const [password, setPassword] = useState('')
  const [outletInfo, setOutletInfo] = useState([])

  const [userNameErr, setUserNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false);
  const [submitErr, setSubmitErr] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const getData = await axios.get(`${REACT_APP_ENDPOINT}/outletlist`)
      setOutletInfo(getData.data.data)
    }
    fetchData()
  }, [])

  const handleUserName = (e) => {
    let name = e.target.value
    if (name.length < 3 || name == null || name == '') {
      setUserNameErr('Name must be greater then 3')
    } else {
      setUserNameErr(false), setUserNameErr('')
    }
    setUserName(name)
  }

  const handlePassword = (event) => {
    let password = event.target.value
    if (password.length < 4 || password == '' || password == null) {
      setPasswordErr('Password must be greater 4')
    } else {
      setPasswordErr(false), setPasswordErr('')
    }
    setPassword(password)
  }

  const handleAccessType = (event) => {
    let accessType = event.target.value
    setAccessType(accessType)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log(accessType)
    axios
      .post(`${REACT_APP_ENDPOINT}/addconsole`, {
        userName: userName,
        outletId: outletId,
        accessType: accessType,
        password: password,
        token:'',
        gcmId:''
      })
      .then((res) => {
        console.log(res)
        alert('Successfully Console data added')
        navigate('/managerlist')
        
      })
      .catch((err) => {
        console.log(err.message)
        setSubmitErr('Please enter above Fields')
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
                  <h3 className="p-2 bg-light text-dark text-center">Add Manager</h3>

                  <div className="col-md-12">
                    <label className="form-label">User Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={handleUserName}
                    />
                  </div>
                  {userNameErr && <p style={{ color: 'red' }}>{userNameErr}</p>}
                  <div className="col-md-6">
                    <label className="form-label">Oulet :</label>
                    <CFormSelect
                      className="text-left"
                      value={outletId}
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
                    <label className="form-label">Access Type:</label>
                    <CFormSelect onChange={handleAccessType}>
                      <option>Select type</option>
                      <option value="full">full</option>
                      <option value="manager">manager</option>
                    </CFormSelect>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Password:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter access type"
                      onChange={handlePassword}
                    />
                  </div>
                  {passwordErr && <p style={{color:'red'}}>{passwordErr}</p>}
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                  {submitErr && <p style={{color:'red'}} className='text-center'>{submitErr}</p>}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AddManager
