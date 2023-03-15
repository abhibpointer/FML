import React from 'react'
import axios, { toFormData } from 'axios';
import { useState } from 'react';
const {REACT_APP_ADMIN_ENDPOINT } = process.env
const { REACT_APP_ENDPOINT } = process.env
import * as FileSaver from 'file-saver'

function Exportuserlist({fromdate, todate}) {

const handleSubmit =(e)=>{
  e.preventDefault();
 console.log('Please wait file Downloading')
// let obj=[];
// if(fromdate && todate){
//    obj.push(`${REACT_APP_ENDPOINT}/exportusers?fromdate=${fromdate}&todate=${todate}`)
// }else{
//   obj.push(`${REACT_APP_ENDPOINT}/exportusers`)
// }
// let uri= obj[0]
let uri = `${REACT_APP_ENDPOINT}/exportusers?fromdate=${fromdate}&todate=${todate}`

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
     
       <div className='mt-3'>
        <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Export File</button>
     </div>
</div>
  )
}
export default Exportuserlist

