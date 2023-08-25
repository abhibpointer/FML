import React, { useEffect } from 'react'  //This code done by Abhishek Lokhande
import { useState } from 'react'
import axios from 'axios'
const { REACT_APP_ENDPOINT } = process.env
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'
import Excel from 'exceljs';
import moment from 'moment'

import { CCard, CCardBody, CCol, CContainer, CForm, CRow, CFormSelect } from '@coreui/react'
import { width } from '@mui/system'


function Downloadfood() {
  const [outletData, setOutletData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  console.log(foodData)
  const [name, setName] = useState('');

  const handleOutlet = async (e) => {
    let outletId = e.target.value
    console.log(outletId)
    const res = await axios.get(`${REACT_APP_ENDPOINT}/downloadfood/${outletId}`)
    const arr = res.data.data.foods
    const name = res.data.data.locality
    const map = arr.map(item => ({ outletId: outletId, ...item }))
    setFoodData(map)
    setName(name)

  }
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

      worksheet.columns = [
        { header: 'Item_Code', key: 'itemCode', width: 9 },
        { header: 'internal Item id (if any)', key: 'foodId', width: 9 },
        { header: 'Item_Name', key: 'name', width: 30 },
        { header: 'Category', key: 'foodType', width: 30 },
        // { header: 'Description', key: 'description', width: 20 },
        { header: 'Outlet_ID', key: 'outletId', width: 9 },
        { header: 'Price', key: 'basePrice', width: 9 },        
        { header: 'Available', key: 'available', width: 9 },
        {header:'Is Offer', key:'isOffer', width: 9},//
        {header:'Offer Name', key:'offerName', width: 9},//
        {header:'Special Tab', key:'specialTab', width: 9},//
        {header:'Tab Name', key:'tabName', width: 9},  //
        {header:'skucode', key:'skucode', width: 9},  //
      ]

      a.forEach((item, ind) => {
        worksheet.addRow({
          itemCode: item.itemCode,
          foodId: item.foodId,
          name: item.name,
          foodType:item.foodType,
          outletId: item.outletId,
          basePrice: item.basePrice,
          available: item.available,                        //Math.round(0.9)
          // description: item.description,
          ////Math.round(0.9)


          // status:item.status,
          isOffer: "FALSE",
          offerName: "FALSE",
          specialTab: "FALSE",
          tabName: "FALSE",
          skucode: item.skucode,
        })
      });
      const fileName = b + moment().format('_MM-DD-YYYY_hh:mm:ss').toString() + EXCEL_EXTENSION;
      workbook.xlsx.writeBuffer()
        .then(buffer => FileSaver.saveAs(new Blob([buffer]), fileName))
        .catch(err => console.log('Error writing excel export', err))
    }
    Export(foodData, name)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h2 className="text-center">Download food</h2>
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
export default Downloadfood

