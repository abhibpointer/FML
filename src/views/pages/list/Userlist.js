// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// // const {REACT_APP_LOCAL_HOST } = process.env
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

// function Userlist() {
//   const [userData, setUserData] = useState([])
//      console.log(userData)
//   const [value, setValue] = useState('')
  
//   const [currentPage, setCurrentPage] = useState(1)
//   const [userPerPage] = useState(10)

//   const pageVisited = currentPage * userPerPage
 

//   //display current record
//   const currentRecords = userData.slice(pageVisited, pageVisited + userPerPage).map((user)=>{

//   })

//   const lastPages = Math.ceil(userData.length / userPerPage)
//   console.log(lastPages)

//   //console.log(userData)
//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async (page) => {
//     try {
//       const result = await axios.get(`http://localhost:7778/getUsers?page=${page}`)
//       setUserData(result.data.data.User)
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
 

//   const handleSearch = async (e) => {
//     e.preventDefault()
//     return await axios
//       .get(`http://localhost:7778/getUsers?search=${value}`)
//       .then((res) => {setUserData(res.data.data.User)
//         setValue('')
//     }).catch((err)=> console.log(err.message))
//   }

//   const renderPagination=()=>{
//     if(currentPage === 1){
//         return(
//             <nav aria-label="Page navigation example">
//             <ul className="pagination justify-content-center">
//               <li className="page-item disabled">
//                 <a className="page-link" href="#" tabindex="-1">Previous</a>
//               </li>
//               <li className="page-item"><a className="page-link" href="#">1</a></li>
//               <li className="page-item"><a className="page-link" href="#">2</a></li>
//               <li className="page-item"><a className="page-link" href="#">3</a></li>
//               <li className="page-item">
//                 <a className="page-link" onClick={()=> fetchData(10)}>Next</a>
//               </li>
//             </ul>
//           </nav>
//         )
//     }
//   }


//   return (
//     <div className="mt-4">
//       <h2 className="text-center">User List</h2>
//       <div className="row mt-4">
//         <div className="col-md-7"></div>
//         <div className="col-md-4">
//           <input
//             type="search"
//             className="form-control"
//             placeholder="Enter..."
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </div>
//         <div className="col-md-1">
//           <button className="btn btn-info" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>
//       <div>
//         <CRow className="CRow">
//           <CCol xs>
//             <CCard className="mt-4">
//               <CCardBody>
//                 <CTable align="middle" className="mb-0 border" hover responsive>
//                   <CTableHead color="light">
//                     <CTableRow className="text-center">
//                       <CTableHeaderCell>Sr. No.</CTableHeaderCell>
//                       <CTableHeaderCell>userId</CTableHeaderCell>
//                       <CTableHeaderCell>Name</CTableHeaderCell>
//                       <CTableHeaderCell>Contact Number</CTableHeaderCell>
//                       <CTableHeaderCell>Otp</CTableHeaderCell>
//                       <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
//                       <CTableHeaderCell>Source</CTableHeaderCell>
//                       {/* <CTableHeaderCell>Deleted</CTableHeaderCell> */}
//                     </CTableRow>
//                   </CTableHead>
//                   <CTableBody>
//                     {userData.length === 0 ? (
//                       <CTableBody className="align-center mb-0">
//                         <CTableRow>
//                           <CTableDataCell colSpan={8} className="text-center mb-0"> NO Data Found</CTableDataCell>
//                         </CTableRow>
//                       </CTableBody>
//                     ) : (
//                       userData.map((user, index) => (
//                         <CTableRow key={index} className="text-center">
//                           <CTableDataCell>{index + 1}</CTableDataCell>
//                           <CTableDataCell>{user.userId}</CTableDataCell>
//                           <CTableDataCell>{user.name}</CTableDataCell>
//                           <CTableDataCell>
//                             {user.phoneNumber ? user.phoneNumber : '-'}
//                           </CTableDataCell>
//                           <CTableDataCell>{user.otp ? user.otp : '-'}</CTableDataCell>
//                           <CTableDataCell>{user.birthdate ? user.birthdate : '-'}</CTableDataCell>
//                           <CTableDataCell>{user.userAgent ? user.userAgent : '-'}</CTableDataCell>
//                         </CTableRow>
//                       ))
//                     )}
//                   </CTableBody>
//                 </CTable>
//                 <br />
//                 <div style={{margin:'auto', padding:'15px', maxWidth:'200px', alignContent:'center'}}>{renderPagination()}</div>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </div>
//     </div>
//   )
// }

// export default Userlist
