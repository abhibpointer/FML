import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'
import Excel from 'exceljs';
import moment from 'moment'

import { CCard, CCardBody, CCol, CContainer, CForm, CRow, CFormSelect } from '@coreui/react'


function Downloaddrinks() {
  const [outletData, setOutletData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [name, setName] = useState('');

  const handleOutlet = async (e) => {
    let outletId = e.target.value
    const res = await axios.get(`${REACT_APP_ENDPOINT}/downloaddrink/${outletId}`)
    const arr= res.data.data.drinks
    const name= res.data.data.locality
    const map = arr.map(item => ({outletId:outletId, ...item}))
    setDrinkData(map)
    setName(name)
  
  }
  // useEffect(()=>{
  //   const fetData =async()=>{
  //     const r=await axios.get(`${REACT_APP_ENDPOINT}/downloaddrink/${drinkData}`)
  //     const arr= r.data.data.drinks
  //  const mapped = arr.map(element => ({outletId:drinkData ,...element}))
  //  console.log(mapped)
    
  //   }
  //   fetData()
  // },[drinkData])
  useEffect(() => {
    const fetchOulet = async () => {
      const oulet = await axios.get(`${REACT_APP_ENDPOINT}/outletlist`)
      setOutletData(oulet.data.data)
    }
    fetchOulet()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const Export = (a, b) => {
      let EXCEL_EXTENSION = '.xlsx';
      const workbook = new Excel.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');

      worksheet.columns=[
        {header:'ItemCode', key:'itemCode', width: 9},
        {header:'Internal_Item_Id', key:'InternalId', width: 9},
        {header:'Drink_Name', key:'name', width: 30},
        {header:'Category', key:'category', width: 20},
        {header:'Outlet_ID', key:'outletId', width: 9},
        {header:'Base_Price', key:'basePrice', width: 9},
        {header:'Is_Price_Variable', key:'priceVariable', width: 9},
        {header:'Cap_Price', key:'capPrice',width: 9},
        {header:'Market_Price', key:'regularPrice', width:9},
        {header:'Price_Increment_Per_Drink', key:'priceIncrementPerUnit', width:20},
        {header:'Current_Price', key:'runningPrice', width: 9},
        {header:'Status', key:'status', width: 9},
        {header:'Is_Offer', key:'isOffer', width: 9},
        {header:'Offer_Name', key:'offerName', width: 9},
        {header:'Special_Tab', key:'specialTab', width: 9},
        {header:'Tab_Name', key:'tabName', width: 9},
        {header:'skucode', key:'skucode', width: 9},  
      ]

      a.forEach((item,ind) => {
        worksheet.addRow({
          itemCode:item.itemCode,
          InternalId:item.drinkId,
          name:item.name,
          outletId:item.outletId,
          category:item.category,
          basePrice:item.basePrice,
          priceVariable:item.priceVariable,
          capPrice:item.capPrice,
          regularPrice:item.regularPrice,
          priceIncrementPerUnit:item.priceIncrementPerUnit,
          runningPrice:item.runningPrice,
          status:item.status,
          skucode:item.skucode,
          specialTab:"FALSE",
          isOffer:"FALSE",
          tabName:"NA",
          offerName:"NA"
        })
      });
      const fileName =  b + moment().format('_MM-DD-YYYY_hh:mm:ss').toString() + EXCEL_EXTENSION;
      workbook.xlsx.writeBuffer()
     .then(buffer => FileSaver.saveAs(new Blob([buffer]), fileName ))
     .catch(err => console.log('Error writing excel export', err))
    }
    Export(drinkData, name)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h2 className="text-center">Download drink</h2>
                  <div className="col-md-12">
                    <label className="form-label">Outlet:</label>
                    <CFormSelect className="text-left" onChange={handleOutlet}>
                      <option>Select Oulet</option>
                      {outletData
                        ? outletData.map((item, index) => (
                            <option key={index} value={item.outletId}>
                              {item.locality}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </div>
                  <div className="col-md-12 text-center mt-4">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Download
                    </button>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Downloaddrinks


// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// const { REACT_APP_ENDPOINT } = process.env;
// import * as XLSX from 'xlsx';
// import * as FileSaver from 'file-saver';
// import moment from 'moment'

// import {
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CRow,
//   CFormSelect,
// } from '@coreui/react'

// function Downloaddrinks() {
//  const [outletData, setOutletData] = useState([]);
//  const [drinkData, setDrinkData] = useState([])

// const handleOutlet= async(e)=>{
// let outletId= e.target.value
//       const res= await axios.get(`${REACT_APP_ENDPOINT}/downloaddrink/${outletId}`)
//         setDrinkData(res.data.data)
// }
//     useEffect(()=>{
//     const fetchOulet = async ()=>{
//     const oulet= await axios.get(`${REACT_APP_ENDPOINT}/outletlist`)
//      setOutletData(oulet.data.data)
//     }
//     fetchOulet()
//     },[])

// const handleSubmit =(e)=>{
// e.preventDefault()
//   const Export = (a,b) => {
//         let EXCEL_EXTENSION = '.xlsx';
//         const fileType ="xlsx"
//         const ws= XLSX.utils.json_to_sheet(a);
//         const wb = {Sheets:{data:ws}, SheetNames:["data"]};
//         const excelBuffer =XLSX.write(wb, {bookType:"xlsx", type:"array"});
//         const data= new Blob([excelBuffer], {type:fileType});
//         const fileName = b + moment().format('MM-DD-YYYY_hh:mm:ss').toString();
//          FileSaver.saveAs(data, fileName + EXCEL_EXTENSION )
//   };
//   Export(drinkData.drinks, drinkData.locality)
// }
//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//     <CContainer>
//       <CRow className="justify-content-center">
//         <CCol md={9} lg={7} xl={6}>
//           <CCard className="mx-4">
//             <CCardBody className="p-4">
//               <CForm>
//                 <h2 className="text-center">Download drink</h2>
//                 <div className='col-md-12'>
//                  <label className='form-label'>Outlet:</label>
//                  <CFormSelect className='text-left' onChange={handleOutlet}>
//                   <option>Select Oulet</option>
//                    {outletData ? outletData.map((item, index)=>(
//                    <option key={index} value={item.outletId}>{item.locality}</option>
//                    )) : null}
//                  </CFormSelect>
//                 </div>
//                 <div className='col-md-12 text-center mt-4'>
//                  <button className='btn btn-primary' onClick={handleSubmit}>Download</button>
//                 </div>
//               </CForm>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </CContainer>
//   </div>
//   )
// }

// export default Downloaddrinks
