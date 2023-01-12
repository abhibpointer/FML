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
//   const [currentPage, setCurrentPage] = useState(1);
//   const [userPerPage] = useState(5)

//    const indexOfLastRecord = currentPage * userPerPage;
//    const indexOfFirstRecord = indexOfLastRecord - userPerPage
   
//    //display current record
//    const currentRecords = userData.slice(indexOfFirstRecord, indexOfLastRecord)
//    console.log(currentRecords)
   
//    const lastPages = Math.ceil(userData.length/userPerPage)
//    console.log(lastPages)



//   //console.log(userData)   
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('http://localhost:7778/getUsers')    
//         setUserData(result.data.data.User)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     fetchData()
//   }, [])

//   const handleSearch = (event) => {
//     const search = event.target.value

//     // console.log(search)
//   }
//  const handleSubmit = ()=>{

//  }

//   return (
//     <div className="mt-4">
//       <h2 className="text-center">User List</h2>
//       <div className="row mt-4">
//         <div className='col-md-7'></div>
//         <div className="col-md-4">
//             <input type='search' className='form-control'
//             placeholder='Enter...'
//             onChange={handleSearch}
//             />
//         </div>
//         <div className='col-md-1'>
//            <button className='btn btn-info'onClick={handleSubmit}> Search</button>
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
//                     </CTableHead>
//                     <CTableBody>
//                     {   
//                         currentRecords ? currentRecords.map((user, index)=>(
//                             <CTableRow key={index} className='text-center'>
//                             <CTableDataCell>{index+1}</CTableDataCell>
//                             <CTableDataCell>{user.userId}</CTableDataCell>
//                             <CTableDataCell>{user.name}</CTableDataCell>
//                             <CTableDataCell>{user.phoneNumber ? user.phoneNumber:'-'}</CTableDataCell>
//                             <CTableDataCell>{user.otp ? user.otp : '-'}</CTableDataCell>   
//                             <CTableDataCell>{user.birthdate ? user.birthdate : '-'}</CTableDataCell>
//                             <CTableDataCell>{user.userAgent ? user.userAgent : '-'}</CTableDataCell>
//                             </CTableRow>
//                         )):null
//                     }      
//                   </CTableBody>
//                 </CTable>
//                 <br />
//                 <div className='d'>Pagination</div>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </div>
//     </div>
//   )
// }

// export default Userlist
