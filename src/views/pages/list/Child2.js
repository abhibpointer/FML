import React from 'react'
import axios, { toFormData } from 'axios';
import { useState } from 'react';
const {REACT_APP_ADMIN_ENDPOINT } = process.env
const { REACT_APP_ENDPOINT } = process.env
import * as FileSaver from 'file-saver'

function Child2(props) {
  //  console.log(props.fromdate,"....", props.todate)
  const [fromDate, setFromDate] = useState(props.fromdate)
  const [toDate, setToDate] = useState(props.todate)

  // console.log(fromDate)
// console.log(toDate)
// useEffect(()=>{
//   setFromDate(props.changeDate)
//   setToDate(props.todate)
// },[props.changeDate,props.todate])

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
 console.log(props.fromdate,"....", props.todate)
 
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
</div>
  )
}
export default Child2



// import React from 'react'
// import Child from './Child'
// import Customer from './Customer'
// import axios, { toFormData } from 'axios';
// import { useState } from 'react';
// const {REACT_APP_ADMIN_ENDPOINT } = process.env
// const { REACT_APP_ENDPOINT } = process.env
// import * as FileSaver from 'file-saver'

// function Child2() {
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
     
//       <div className='col-md-2 pt-4'>
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
//        <div className='com-md-2'>
//            <Child 
//             changeDate={fromDate}
//             todate={toDate}
//         />
//        </div>
      
        
// </div>
//   )
// }
// export default Child2