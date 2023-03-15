import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { format } from 'date-fns'
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
import Exportuserlist from './Exportuserlist'

function Userlist() {
 // console.log(fromdate,"hkkkk",todate)
  const [userData, setUserData] = useState([])

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [userPerPage] = useState(10)
  const [pageCount, setPageCount] = useState(1)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const lastPage = currentPage * userPerPage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${REACT_APP_ENDPOINT}/getUsers?search=${value}&page=${currentPage}&fromdate=${fromDate}&todate=${toDate}`)
        setUserData(result.data.data.User)
        console.log(result.data.data.User)
       // console.log(result.data.data.count)
        setPageCount(result.data.data.count)
   
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [currentPage,value, fromDate, toDate])


  const handlePageClick = (val) => {
    setCurrentPage(val.selected)
  }

  //Date formate for userlist
  const dateFormate =(dat)=>{
   const date = format(new Date(dat), "yyyy/MM/dd").toLocaleString()
   return date
  }

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    let newDate = `${month}-${day}-${year}`;
    return newDate;
  };

  const handleFromDate=(e)=>{
    let fromdate = e.target.value;
      let formateDate = formatDate(fromdate)                                     
       setFromDate(formateDate)
       return
  }
//float-right

  const handleToDate =(e)=>{
    let todate = e.target.value
    let formattodate = formatDate(todate)                                             
    setToDate(formattodate)
    return
  }
  
  return (
    <div className="mt-3">
    <div className="row mt-2">
    <div className='row mt-2'>
        <div className='col-md-2 mt-3'>
    <Exportuserlist 
     fromdate={fromDate}
     todate={toDate}
     />
     </div>
    <div className='col-md-2 ms-1 mt-3'>
    <label className="">From date:</label>
    <input 
    type='date'
    className='form-control'
    name="fromdate"
    onChange={handleFromDate}
    />
    </div>
    <div className='col-md-2 me-4 mt-3'>
      <label className=''>To date:</label>
      <input
       type="date"
       className="form-control"
       name="todate"
       onChange={handleToDate}
       />
       </div>
       
       <div className="col-md-3 ms-4 mt-3 pt-4 ml-5">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
    </div>  
      </div>
      <CRow className="CRow">
        <CCol xs>
          <CCard className="mt-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow className="text-center">
                    <CTableHeaderCell>Sr. No.</CTableHeaderCell>
                    {/* <CTableHeaderCell>Image</CTableHeaderCell> */}
                    <CTableHeaderCell>userId</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                     <CTableHeaderCell>Gender</CTableHeaderCell>
                    <CTableHeaderCell>Contact Number</CTableHeaderCell>
                    <CTableHeaderCell>Otp</CTableHeaderCell>
                    <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
                    <CTableHeaderCell>Created Date</CTableHeaderCell>
                    <CTableHeaderCell>Source</CTableHeaderCell>
                   
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userData.length === 0 ? (
                    <CTableRow>
                      <CTableDataCell colSpan={8} className="text-center mb-0">
                        {' '}
                        NO Data Found
                      </CTableDataCell>
                    </CTableRow>
                  ) : (
                    userData.map((user, index) => (
                      <CTableRow key={index} className="text-center">
                        <CTableDataCell>{index +currentPage+1}</CTableDataCell>
                        {/* index*PageNum index + 1 * lastPage + 1 */}
                        {/* <CTableDataCell>{user.profilePic ? 
                        <img src={user.profilePic }
                        className="rounded"
                        width='60px'
                        height='40px'
                         
                        />:'-'}</CTableDataCell> */}
                        <CTableDataCell>{user.userId ? user.userId : '-'}</CTableDataCell>
                        <CTableDataCell>{user.name ? user.name : '-'}</CTableDataCell>
                        <CTableDataCell>{user.gender ? user.gender:'-'}</CTableDataCell>
                        <CTableDataCell>{
                        user.phoneNumber == ' ' || user.phoneNumber == '' || user.phoneNumber == null ? '-' : user.phoneNumber}
                        </CTableDataCell>
                        <CTableDataCell>{user.otp ? user.otp : '-'}</CTableDataCell>
                        <CTableDataCell>{user.birthdate ? dateFormate(user.birthdate) : '-'}</CTableDataCell>
                        <CTableDataCell>{user.created_at ? dateFormate(user.created_at): '-'}</CTableDataCell>
                        <CTableDataCell>{user.userAgent ? user.userAgent : '-'}</CTableDataCell>
                        
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
              <br />
              <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />           
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Userlist


