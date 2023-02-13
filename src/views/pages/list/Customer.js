
import React from 'react'
import { useState } from 'react'

 const Customer= ({fromdate, todate}) =>{
//  const [data, setData] = useState('This is data from Parent Component to the Child Component.');
    // const parentToChild = () => {
    //   setData("This is data from Parent Component to the Child Component.");
    // }
    console.log(fromdate,"aaa",todate)

  return (
    <div className='App'>
         {/* <Child parentToChild={data}/>
        <div>
        <Button primary onClick={() => parentToChild()}>Click Parent</Button>
      </div> */}
    </div>     
  )
}
export default Customer