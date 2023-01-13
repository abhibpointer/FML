import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
// const {REACT_APP_LOCAL_HOST } = process.env
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Listbanner = () => {
  // List show data
  const navigate = useNavigate()
  const baseUri = 'http://35.154.86.71:7777/'
  const [values, setValues] = useState([])
  const [message, setMessage] = useState('')
 // console.log(values)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://35.154.86.71:7777/getBannerList')
        const response = result.data.data
         // console.log(response)
        const list = []

        for (let i = 0; i < response.length; i++) {
          for (let j = 0; j < response[i].banner.length; j++) {
            var outletBanner = {
              _id: response[i]._id,
              outlet_id: response[i].outlet_id,
              banner: response[i].banner[j],
            }
            list.push(outletBanner)
          }
        }
        setValues(list)
      } catch (error) {
        setMessage(error.message)
      }
    }
    fetchData()
  }, [])

  // Delete data start
  const toDelete = (id, outlet_id) => {
    axios
      .delete(`http://35.154.86.71:7777/deleteBanner/${id}/${outlet_id}`)
      .then(() => {
        setValues(
          values.filter((val) => {
            return val._id !== id
          }),
        )
      //  setMessage('Successfully banner data deleted')
      alert('Successfully banner data deleted')
      window.location.reload()
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  // Delete Data end

  //Navigate to Edit page
  const handleProcess = (id) => {
    console.log(id)
    navigate(`/pages/banner/Editbanner/${id}`)
  }

  //Date converter
  const date = (date) => {
    let b =format(new Date(date), 'yyyy/MM/dd').toLocaleString()
    return b
  }
  return (
    <>
      <br />
      <div className="flex-right">
        <Link to="/pages/banner/Addbanner">
          <button
            className="btn btn-primary btn-lg"
           // style={{ display: 'flex', justifyContent: 'flex-end ' }}
          >
            {' '}
            Create
          </button>
        </Link>
      </div>
      <div />
      <p className="text-medium-emphasis text-center">{message}</p>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow className="text-center">
                    <CTableHeaderCell>Sr. No.</CTableHeaderCell>
                    <CTableHeaderCell>Outlet Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Banner Title</CTableHeaderCell>
                    <CTableHeaderCell className="image">Image</CTableHeaderCell>
                    <CTableHeaderCell>Active</CTableHeaderCell>
                    <CTableHeaderCell> Fix</CTableHeaderCell>
                    <CTableHeaderCell>From Date</CTableHeaderCell>
                    <CTableHeaderCell>To Date</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {values
                    ? values.map((item, index) => (
                        <CTableRow key={index} className="text-center ">
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>{item.outlet_id}</CTableDataCell>
                          <CTableDataCell>{item.banner.banner_title}</CTableDataCell>
                          <CTableDataCell>
                            {
                              <img
                                src={baseUri + item.banner.image_path}
                                className='rounded'
                                height="40px"
                                width="50px"
                                border-radius="5px"
                              />
                            }
                          </CTableDataCell>
                          <CTableDataCell>{item.banner.is_active}</CTableDataCell>
                          <CTableDataCell>{item.banner.is_fix}</CTableDataCell>
                          <CTableDataCell>
                            {item.banner.is_fix == 0 ? date(item.banner.duration.fromdate) : '-'}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item.banner.is_fix == 0 ? date(item.banner.duration.todate) : '-'}
                          </CTableDataCell>
                          {/* <div> */}
                          <CTableDataCell>
                            <div>
                              <button
                                className="btn btn-info"
                                type="button"
                                onClick={() => handleProcess(item.banner._id)}
                              >
                                Edit
                              </button>{' '}
                              {/* {
                                console.log(item.banner._id)
                              } */}
                              <button className="btn btn-danger" onClick={() => toDelete(item.banner._id,item._id)}>
                                Delete
                              </button>
                            </div>
                          </CTableDataCell>
                          {/* </div> */}
                        </CTableRow>
                      ))
                    : null}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Listbanner
