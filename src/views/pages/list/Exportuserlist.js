import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const {REACT_APP_ADMIN_ENDPOINT } = process.env
const { REACT_APP_ENDPOINT } = process.env
import * as FileSaver from 'file-saver'
import Userlist from './Userlist';
import Customer from './Customer';
import {
  CButton,
} from '@coreui/react'


function Exportuserlist() {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const formatDate = (dateStr) => {
      const [year, month, day] = dateStr.split('-');
      let newDate = `${month}-${day}-${year}`;
      return newDate;
    };

  const handleFromDate =(e)=>{
      let fromdate = e.target.value;
      let formateDate = formatDate(fromdate)                                     
       setFromDate(formateDate)
     }
     
     const handleToDate =(e)=>{
      let todate = e.target.value
      let formattodate = formatDate(todate)                                             
      setToDate(formattodate)
     }



const handleSubmit =(e)=>{
  e.preventDefault();
 console.log('Please wait file Downloading')

let obj=[];
if(fromDate && toDate){
   obj.push(`${REACT_APP_ENDPOINT}/export?fromdate=${fromDate}&todate=${toDate}`)
}else{
  obj.push(`${REACT_APP_ENDPOINT}/export`)
}
let uri= obj[0]

 axios.get(uri,{responseType: 'arraybuffer'}).then((response )=>{
  const dirtyFileName = response.headers['content-disposition'];
  const regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
      let  fileName = dirtyFileName.match(regex)[3];
  let blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, fileName);
 })
 
}
  return (
    <div className='row flex'>
    <div className='col-md-2 pt-4'>
        <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Export File</button>
     </div>
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
       {/* <Customer formatDate={fromDate}/>
       <Customer toDate={toDate}/> */}
          <Userlist
            changeDate={fromDate}
            todate={toDate}
        />
</div>
  )
}
export default Exportuserlist



// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// const {REACT_APP_ADMIN_ENDPOINT } = process.env
// const { REACT_APP_ENDPOINT } = process.env
// import * as FileSaver from 'file-saver'
// import Userlist from './Userlist';
// import {
//   CButton,
// } from '@coreui/react'


// function Exportuserlist() {
//   const [fromDate, setFromDate] = useState('')
//   const [toDate, setToDate] = useState('')

//   const formatDate = (dateStr) => {
//       const [year, month, day] = dateStr.split('-');
//       let newDate = `${month}-${day}-${year}`;
//       return newDate;
//     };

//   const handleFromDate =(e)=>{
//       let fromdate = e.target.value;
//       let formateDate = formatDate(fromdate)                                     
//        setFromDate(formateDate)
//      }
     
//      const handleToDate =(e)=>{
//       let todate = e.target.value
//       let formattodate = formatDate(todate)                                             
//       setToDate(formattodate)
//      }



// const handleSubmit =(e)=>{
//   e.preventDefault();
//  console.log('Please wait file Downloading')

// let obj=[];
// if(fromDate && toDate){
//    obj.push(`${REACT_APP_ENDPOINT}/export?fromdate=${fromDate}&todate=${toDate}`)
// }else{
//   obj.push(`${REACT_APP_ENDPOINT}/export`)
// }
// let uri= obj[0]

//  axios.get(uri,{responseType: 'arraybuffer'}).then((response )=>{
//   const dirtyFileName = response.headers['content-disposition'];
//   const regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
//       let  fileName = dirtyFileName.match(regex)[3];
//   let blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//       FileSaver.saveAs(blob, fileName);
//  })
 
// }
//   return (
//     <div className='row flex'>
//     <div className='col-md-2 pt-4'>
//         <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Export File</button>
//      </div>
//     <div className='col-md-3'>
//     <label className="">From date:</label>
//     <input 
//     type='date'
//     className='form-control'
//     // format='yyyy/mm/dd'
//     name="fromdate"
//     onChange={handleFromDate}
//     />
//     </div>
//     <div className='col-md-3'>
//       <label className=''>To date:</label>
//       <input
//        type="date"
//        className="form-control"
//       //  format='yyyy/mm/dd'
//        name="todate"
//        onChange={handleToDate}
//        />
//        </div>
//        {/* <div className='col-md-2 pt-4'>
//         <CButton className='btn btn-success' onClick={handleSubmit}>Export File</CButton>
//        </div> */}
// </div>
//   )
// }
// export default Exportuserlist
