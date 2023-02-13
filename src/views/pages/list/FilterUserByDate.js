// import React from 'react'
// import {useEffect, useState} from 'react'
// import axios from 'axios';
// const { REACT_APP_ENDPOINT } = process.env
// import * as FileSaver from 'file-saver'

// import {
//     CButton,
//   } from '@coreui/react'

// function FilterUserByDate() {
//     const [fromDate, setFromDate] = useState('')
//     const [toDate, setToDate] = useState('')
 
//     const formatDate = (dateStr) => {
//         const [year, month, day] = dateStr.split('-');
//         let newDate = `${month}-${day}-${year}`;
//         return newDate;
//       };

//     const handleFromDate =(e)=>{
//         let fromdate = e.target.value;
//         let formateDate = formatDate(fromdate)                                     
//          setFromDate(formateDate)
//        }
       
//        const handleToDate =(e)=>{
//         let todate = e.target.value
//         let formattodate = formatDate(todate)                                             
//         setToDate(formattodate)
//        }

// const handleSubmit =(event)=>{
//  event.preventDefault()
//  console.log('Please wait file Downloading')
//  axios.get(`${REACT_APP_ENDPOINT}/export?fromdate=${fromDate}&todate=${toDate}`,{responseType: 'arraybuffer'}).then((response )=>{
//   const dirtyFileName = response.headers['content-disposition'];
//   const regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
//       let  fileName = dirtyFileName.match(regex)[3];
//   let blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//       FileSaver.saveAs(blob, fileName);
//  })

// }
       
//   return (
//     <div className='row flex'>
//         <div className='col-md-2'>
//         <label className="form-label">From date:</label>
//         <input 
//         type='date'
//         className='form-control'
//         // format='yyyy/mm/dd'
//         name="fromdate"
//         onChange={handleFromDate}
//         />
//         </div>
//         <div className='col-md-2'>
//           <label className='form-label'>To date</label>
//           <input
//            type="date"
//            className="form-control"
//           //  format='yyyy/mm/dd'
//            name="todate"
//            onChange={handleToDate}
//            />
//            </div>
//            <div className='col-md-2 pt-4'>
//             <CButton className='btn btn-primary' onClick={handleSubmit}>Filter</CButton>
//            </div>
//     </div>
//   )
// }

// export default FilterUserByDate