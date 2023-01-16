import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
// const {REACT_APP_LOCAL_HOST } = process.env
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

function Userlist() {
  const [userData, setUserData] = useState([])

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [userPerPage] = useState(10)
  const [pageCount, setPageCount] = useState(1)


  const lastPage = currentPage * userPerPage
  console.log(lastPage)

  const firstPage = lastPage - userPerPage
  console.log(firstPage)

  // const pageCount =  Math.ceil(userData.length/userPerPage)
  // console.log(pageCount)

  //uri = 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:7778/getUsers?page=${currentPage}`)
        setUserData(result.data.data.User)
        setPageCount(result.data.data.count)
   
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [currentPage])

  const handleSearch = async (e) => {
    e.preventDefault()
    return await axios
      .get(`http://localhost:7778/getUsers?search=${value}`)
      .then((res) => {
        setUserData(res.data.data.User)
        setValue('')
      })
      .catch((err) => console.log(err.message))
  }

  const handlePageClick = (val) => {
    setCurrentPage(val.selected)
  }
  return (
    <div className="mt-4">
      <h2 className="text-center">User List</h2>
      <div className="row mt-4">
        <div className="col-md-7"></div>
        <div className="col-md-4">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-md-1">
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
                    <CTableHeaderCell>userId</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Contact Number</CTableHeaderCell>
                    <CTableHeaderCell>Otp</CTableHeaderCell>
                    <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
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
                        <CTableDataCell>{user.userId ? user.userId : '-'}</CTableDataCell>
                        <CTableDataCell>{user.name ? user.name : '-'}</CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {user.phoneNumber == ' ' ||
                          user.phoneNumber == '' ||
                          user.phoneNumber == null
                            ? '-'
                            : user.phoneNumber}{' '}
                        </CTableDataCell>
                        <CTableDataCell>{user.otp ? user.otp : '-'}</CTableDataCell>
                        <CTableDataCell>{user.birthdate ? user.birthdate : '-'}</CTableDataCell>
                        <CTableDataCell>{user.userAgent ? user.userAgent : '-'}</CTableDataCell>
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
              <br />
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
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

//   const [value, setValue] = useState('')
//   const [currentPage, setCurrentPage] = useState(0)
//   const [userPerPage] = useState(10)

//     const lastPage = currentPage * userPerPage
//    //console.log(lastPage)
//   //  const  firstPage = lastPage - userPerPage

//   const OnNextPage = () => {
//     setCurrentPage(currentPage + 1)
//   }

//   const OnPreviousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1)
//     }
//   }
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(`http://localhost:7778/getUsers?page=${currentPage}`)
//         setUserData(result.data.data.User)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     fetchData()
//   }, [currentPage])

//   const handleSearch = async (e) => {
//     e.preventDefault()
//     return await axios
//       .get(`http://localhost:7778/getUsers?search=${value}`)
//       .then((res) => {
//         setUserData(res.data.data.User)
//         setValue('')
//       })
//       .catch((err) => console.log(err.message))
//   }

//   const changePage = (e) => {
//     setCurrentPage(e.target.value)
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
//             placeholder="Search..."
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
//                       <CTableRow>
//                         <CTableDataCell colSpan={8} className="text-center mb-0">
//                           {' '}
//                           NO Data Found
//                         </CTableDataCell>
//                       </CTableRow>
//                     ) : (
//                       userData.map((user, index) => (
//                         <CTableRow key={index} className="text-center">
//                           <CTableDataCell>{index + 1 * lastPage + 1}</CTableDataCell>
//                            {/* index*PageNum */}
//                           <CTableDataCell>{user.userId ? ( user.userId): ('-')}</CTableDataCell>
//                           <CTableDataCell>{user.name ? ( user.name ): ('-')}</CTableDataCell>
//                          <CTableDataCell> {user.phoneNumber == " " || user.phoneNumber == "" || user.phoneNumber == null ? ('-'):(user.phoneNumber) } </CTableDataCell>
//                           <CTableDataCell>{user.otp ? (user.otp) :('-')}</CTableDataCell>
//                           <CTableDataCell>{user.birthdate ? (user.birthdate) : ('-')}</CTableDataCell>
//                           <CTableDataCell>{user.userAgent ? (user.userAgent) :('-')}</CTableDataCell>
//                         </CTableRow>
//                       ))
//                     )}
//                   </CTableBody>
//                 </CTable>
//                 <br />
//                 <div>
//                     <div className="row flex mb-2 justify-content-center input-group bg-light">
//                       <div className='col-md-4'></div>
//                       <div className="col-md-1 input-group-prepend">
//                         <button
//                           className="btn btn-outline-primary w-100"
//                           type="button"
//                           onClick={OnPreviousPage}
//                         >
//                           Prev
//                         </button>
//                       </div>
//                       <input
//                         type="text"
//                         className="form-control text-center"
//                        value={currentPage}
//                         onChange={changePage}
//                       />
//                       <div className="col-md-2 input-group-prepend">
//                         <button
//                           className="btn btn-outline-primary w-95"
//                           type="button"
//                           onClick={OnNextPage}
//                         >
//                           Next
//                         </button>
//                       </div>
//                       <div className='col-md-4'></div>
//                     </div>
//                   </div>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </div>
//     </div>
//   )
// }

// export default Userlist
