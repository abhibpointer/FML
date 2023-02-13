
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { format } from 'date-fns'
const { REACT_APP_ENDPOINT } = process.env
const {REACT_APP_ADMIN_ENDPOINT } = process.env
import Exportuserlist from './Exportuserlist'
import FilterUserByDate from './FilterUserByDate'
import Child2 from './Child2'

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

function Child() {
 // console.log(fromdate,"hkkkk",todate)
  const [userData, setUserData] = useState([])

  const [value, setValue] = useState('')
  console.log(value)
  const [currentPage, setCurrentPage] = useState(0)
  const [userPerPage] = useState(10)
  const [pageCount, setPageCount] = useState(1)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

// console.log(fromDate)
// console.log(toDate)
// useEffect(()=>{
//   setFromDate(props.changeDate)
//   setToDate(props.todate)
// },[props.changeDate,props.todate])

  const lastPage = currentPage * userPerPage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${REACT_APP_ENDPOINT}/getUsers?page=${currentPage}`)
        setUserData(result.data.data.User)
       // console.log(result.data.data.count)
        setPageCount(result.data.data.count)
   
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [currentPage])

  // if(fromDate  && toDate){
  // useEffect(()=>{
  //   let filter = async ()=>{
  //     try {
  //       let result = await axios.get(`${REACT_APP_ENDPOINT}/userFilters?fromdate=${fromDate}&todate=${toDate}`)
  //       console.log(result.data.data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   filter()
  // })
  // }
  const handleSearch = (e) => {
    e.preventDefault()
     let obj = [];
     if(fromDate || toDate){
      obj.push(`${REACT_APP_ENDPOINT}/getUsers?fromdate=${fromDate}&todate=${toDate}`)
     }else{
      obj.push(`${REACT_APP_ENDPOINT}/getUsers?search=${value}`)
     }
   let uri=obj[0]
     axios
      .get(uri)
      .then((res) => {
        console.log(res)
        setUserData(res.data.data.User)
        setPageCount(res.data.data.count)
       // setValue('')
      })
      .catch((err) => console.log(err.message))
  }

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
  }


  const handleToDate =(e)=>{
    let todate = e.target.value
    let formattodate = formatDate(todate)                                             
    setToDate(formattodate)
  }
  return (
    <div className="mt-3">
      <div className="row mt-2">
      {/* <div className='col-md-9 mt-2'><FilterUserByDate /></div> */}
      {/* <div className="col-md-8 mt-4"> <Exportuserlist/></div> */}
      {/* <div className='col-md-2 pt-4'>
        <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Export File</button>
     </div> */}
     <div><Child2 
     fromdate={fromDate}
      todate={toDate}
     /></div>
    
    <div className='col-md-3'>
    <label className="">From date:</label>
    <input 
    type='date'
    className='form-control'
    // format='yyyy/mm/dd'
    name="fromdate"
    onChange={handleFromDate}
    />
    </div>
    <div className='col-md-3'>
      <label className=''>To date:</label>
      <input
       type="date"
       className="form-control"
      //  format='yyyy/mm/dd'
       name="todate"
       onChange={handleToDate}
       />
       </div>
        <div className="col-md-3 mt-4 pt-4 ml-5">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-md-1 mt-4 pt-4">
          <button className="btn btn-info" onClick={handleSearch}>
            Search
          </button>
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
                    <CTableHeaderCell>Contact Number</CTableHeaderCell>
                    <CTableHeaderCell>Otp</CTableHeaderCell>
                    <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
                    <CTableHeaderCell>Created Date</CTableHeaderCell>
                    <CTableHeaderCell>Source</CTableHeaderCell>
                    {/* <CTableHeaderCell>Deleted</CTableHeaderCell> */}
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
                        <CTableDataCell>{index + 1 * lastPage+1}</CTableDataCell>
                        {/* index*PageNum index + 1 * lastPage + 1 */}
                        {/* <CTableDataCell>{user.profilePic ? 
                        <img src={user.profilePic }
                        className="rounded"
                        width='60px'
                        height='40px'
                         
                        />:'-'}</CTableDataCell> */}
                        <CTableDataCell>{user.userId ? user.userId : '-'}</CTableDataCell>
                        <CTableDataCell>{user.name ? user.name : '-'}</CTableDataCell>
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

export default Child




// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import ReactPaginate from 'react-paginate'
// import { format } from 'date-fns'
// const { REACT_APP_ENDPOINT } = process.env
// const {REACT_APP_ADMIN_ENDPOINT } = process.env
// import Exportuserlist from './Exportuserlist'
// import FilterUserByDate from './FilterUserByDate'

// import {
//   CAvatar,
//   CCard,
//   CCardBody,
//   CCol,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react'

// function Child(props) {
//  // console.log(fromdate,"hkkkk",todate)
//   const [userData, setUserData] = useState([])

//   const [value, setValue] = useState('')
//   console.log(value)
//   const [currentPage, setCurrentPage] = useState(0)
//   const [userPerPage] = useState(10)
//   const [pageCount, setPageCount] = useState(1)
//   const [fromDate, setFromDate] = useState(props.changeDate)
//   const [toDate, setToDate] = useState(props.todate)

// console.log(fromDate)
// console.log(toDate)
// useEffect(()=>{
//   setFromDate(props.changeDate)
//   setToDate(props.todate)
// },[props.changeDate,props.todate])

//   const lastPage = currentPage * userPerPage

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(`${REACT_APP_ADMIN_ENDPOINT}/getUsers?page=${currentPage}`)
//         setUserData(result.data.data.User)
//        // console.log(result.data.data.count)
//         setPageCount(result.data.data.count)
   
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     fetchData()
//   }, [currentPage])

//   // if(fromDate  && toDate){
//   // useEffect(()=>{
//   //   let filter = async ()=>{
//   //     try {
//   //       let result = await axios.get(`${REACT_APP_ENDPOINT}/userFilters?fromdate=${fromDate}&todate=${toDate}`)
//   //       console.log(result.data.data)
//   //     } catch (error) {
//   //       console.log(error.message)
//   //     }
//   //   }
//   //   filter()
//   // })
//   // }
//   const handleSearch = (e) => {
//     e.preventDefault()
 
//      axios
//       .get(`${REACT_APP_ADMIN_ENDPOINT}/getUsers?search=${value}`)
//       .then((res) => {
//         console.log(res)
//         setUserData(res.data.data.User)
//        // setValue('')
//       })
//       .catch((err) => console.log(err.message))
//   }

//   const handlePageClick = (val) => {
//     setCurrentPage(val.selected)
//   }

//   //Date formate for userlist
//   const dateFormate =(dat)=>{
//    const date = format(new Date(dat), "yyyy/MM/dd").toLocaleString()
//    return date
//   }

//   return (
//     <div className="mt-3">
//       {/* <h2 className="text-center bg-light">User List</h2> */}
//       {/* <input onChange={(e)=>props.changeDate(e.target.value)}/> */}
//       {/* <input onChange={(e)=>props.changeDate()}/> */}

//       {/* changeDate={date=>{setFromDate(date)}} */}
//       <div className="row mt-2">
//       {/* <div className='col-md-9 mt-2'><FilterUserByDate /></div> */}
//       {/* <div className="col-md-8 mt-4"> <Exportuserlist/></div> */}
//         <div className="col-md-3 mt-4 pt-4 ml-5">
//           <input
//             type="search"
//             className="form-control"
//             placeholder="Search..."
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </div>
//         <div className="col-md-1 mt-4 pt-4">
//           <button className="btn btn-info" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>
//       <CRow className="CRow">
//         <CCol xs>
//           <CCard className="mt-4">
//             <CCardBody>
//               <CTable align="middle" className="mb-0 border" hover responsive>
//                 <CTableHead color="light">
//                   <CTableRow className="text-center">
//                     <CTableHeaderCell>Sr. No.</CTableHeaderCell>
//                     {/* <CTableHeaderCell>Image</CTableHeaderCell> */}
//                     <CTableHeaderCell>userId</CTableHeaderCell>
//                     <CTableHeaderCell>Name</CTableHeaderCell>
//                     <CTableHeaderCell>Contact Number</CTableHeaderCell>
//                     <CTableHeaderCell>Otp</CTableHeaderCell>
//                     <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
//                     <CTableHeaderCell>Created Date</CTableHeaderCell>
//                     <CTableHeaderCell>Source</CTableHeaderCell>
//                     {/* <CTableHeaderCell>Deleted</CTableHeaderCell> */}
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {userData.length === 0 ? (
//                     <CTableRow>
//                       <CTableDataCell colSpan={8} className="text-center mb-0">
//                         {' '}
//                         NO Data Found
//                       </CTableDataCell>
//                     </CTableRow>
//                   ) : (
//                     userData.map((user, index) => (
//                       <CTableRow key={index} className="text-center">
//                         <CTableDataCell>{index + 1 * lastPage+1}</CTableDataCell>
//                         {/* index*PageNum index + 1 * lastPage + 1 */}
//                         {/* <CTableDataCell>{user.profilePic ? 
//                         <img src={user.profilePic }
//                         className="rounded"
//                         width='60px'
//                         height='40px'
                         
//                         />:'-'}</CTableDataCell> */}
//                         <CTableDataCell>{user.userId ? user.userId : '-'}</CTableDataCell>
//                         <CTableDataCell>{user.name ? user.name : '-'}</CTableDataCell>
//                         <CTableDataCell>{
//                         user.phoneNumber == ' ' || user.phoneNumber == '' || user.phoneNumber == null ? '-' : user.phoneNumber}
//                         </CTableDataCell>
//                         <CTableDataCell>{user.otp ? user.otp : '-'}</CTableDataCell>
//                         <CTableDataCell>{user.birthdate ? dateFormate(user.birthdate) : '-'}</CTableDataCell>
//                         <CTableDataCell>{user.created_at ? dateFormate(user.created_at): '-'}</CTableDataCell>
//                         <CTableDataCell>{user.userAgent ? user.userAgent : '-'}</CTableDataCell>
                        
//                       </CTableRow>
//                     ))
//                   )}
//                 </CTableBody>
//               </CTable>
//               <br />
//               <ReactPaginate
//                 previousLabel={'<<'}
//                 nextLabel={'>>'}
//                 breakLabel={'...'}
//                 pageCount={pageCount}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={3}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination justify-content-center'}
//                 pageClassName={'page-item'}
//                 pageLinkClassName={'page-link'}
//                 previousClassName={'page-item'}
//                 previousLinkClassName={'page-link'}
//                 nextClassName={'page-item'}
//                 nextLinkClassName={'page-link'}
//                 breakClassName={'page-item'}
//                 breakLinkClassName={'page-link'}
//                 activeClassName={'active'}
//               />           
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Child