import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
const { REACT_APP_ENDPOINT } = process.env
const {REACT_APP_ADMIN_ENDPOINT } = process.env
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
  const navigate = useNavigate();
  const baseUri = `${REACT_APP_ENDPOINT}`;
  const [values, setValues] = useState([]);
  const [message, setMessage] = useState('');
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${REACT_APP_ENDPOINT}/getBannerList`);
        const response = result.data.data

        const res = await axios.get(`${REACT_APP_ENDPOINT}/outletlist`);
        const outletNa =res.data.data

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
          const data=[]
          for(let i=0; i<list.length; i++){
            for(let j=0; j<outletNa.length; j++){
              if(list[i].outlet_id === outletNa[j].outletId){
                var obj={
                    banner:list[i],
                    outletName:outletNa[j].locality
                }
                data.push(obj)
              }
          }
          } 
        setValues(data)
      } catch (error) {
        setMessage(error.message)
      }
    }
    fetchData()
  }, [])

// const compareOulet = (banner, outletInfo)=>{
//   const data=[]
//   for(let i=0; i<banner.length; i++){
//     for(let j=0; j<outletInfo.length; j++){
//       if(banner[i].outlet_id === outletInfo[j].outletId){
//         var obj={
//             banner:banner[i],
//             outletName:outletInfo[j].locality
//         }
//         data.push(obj)
//       }
//   }
//   } 
//    return data
// }
// const result = compareOulet(values, outletInfo)
// console.log(result)

  // Delete data start
  const toDelete = (id, outlet_id) => {
    axios
      .delete(`${REACT_APP_ENDPOINT}/deleteBanner/${id}/${outlet_id}`)
      .then(() => {
        setValues(
          values.filter((val) => {
            return val._id !== id
          }),
        )
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
    //console.log(id)
    navigate(`/editbanner/${id}`)
  }

  //Date converter
  const date = (date) => {
    let b =format(new Date(date), 'yyyy/MM/dd').toLocaleString()
    return b
  }
  return (
    <div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end ' }}> 
        <Link to="/addbanner">
          <button className="btn btn-primary btn-lg">
            {' '}
            Create
          </button>
        </Link>
      </div>
      <p className="text-medium-emphasis text-center">{message}</p>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow className="text-center">
                    <CTableHeaderCell>Sr. No.</CTableHeaderCell>
                    <CTableHeaderCell>Outlet Name</CTableHeaderCell>
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
                          <CTableDataCell>{item.outletName}</CTableDataCell>
                          <CTableDataCell>{item.banner.banner.banner_title}</CTableDataCell>
                          <CTableDataCell>
                            {
                              <img
                                src={baseUri + item.banner.banner.image_path}
                                className='rounded'
                                height="60px"
                                width="100px"
                                border-radius="5px"
                              />
                            }
                          </CTableDataCell>
                          <CTableDataCell>{item.banner.banner.is_active}</CTableDataCell>
                          <CTableDataCell>{item.banner.banner.is_fix}</CTableDataCell>
                          <CTableDataCell>
                            {item.banner.banner.is_fix == 0 ? date(item.banner.banner.duration.fromdate) : '-'}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item.banner.banner.is_fix == 0 ? date(item.banner.banner.duration.todate) : '-'}
                          </CTableDataCell>
                          {/* <div> */}
                          <CTableDataCell>
                            <div>
                              <button
                                className="btn btn-info"
                                type="button"
                                onClick={() => handleProcess(item.banner.banner._id)}
                              >
                                Edit
                              </button>{' '}
                              {/* {
                                console.log(item.banner._id)
                              } */}
                              <button className="btn btn-danger" onClick={() => toDelete(item.banner.banner._id,item.banner._id)}>
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
    </div>
  )
}

export default Listbanner
