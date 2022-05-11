import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ModalBrandInfo.css'

function ModalBrandInfo({carInfo, setCarInfo, tableData, setTableData, carIndex, brandShow, setBrandShow}) {


  const [edit, setEdit] = useState(false)
  const [brand, setBrand] = useState('')
  // const [color, setColor] = useState('')
  // const [price, setPrice] = useState('')
  // const [year, setYear] = useState('') 
  // const [tank, setTank] = useState('') 
  // const [transmission, setTransmission] = useState('')
  // const [fuel, setFuel] = useState('')
  // const [accident, setAccident] = useState(false);
  // const currentYear = new Intl.DateTimeFormat('uk', {year:'numeric'}).format(new Date())  
  
  const fields = Object.keys(carInfo)

  useEffect(()=>{
    setBrand(carInfo.brand)
  },[carInfo]);
   

  function validEdit(){
      setCarInfo({})
    setEdit(false)
    setBrandShow(false)
    tableData[carIndex].brand = brand
    setTableData([...tableData])
  }

  


  return (
  <div className={brandShow ? 'brand active-brand' : 'brand'}>
     
    <div className='wrapper-button'>
      <button className='brand-close' onClick={()=>{
          setCarInfo({})
          setEdit(false)
          setBrandShow(false)
          setBrand('')
        }} >close</button>
      {
        edit ?  
          <button className='edit-btn' onClick={()=>validEdit()}>save</button>
          : 
          <button className='edit-btn' onClick={()=>setEdit(true)}>edit</button>
      }
    </div>
      {
        !edit ? 

        <div className='brand-info'>
        {
          fields.map((item)=>
            <div className='fields' key={uuidv4()}>
              <p className='fields-title'>{item}:</p>
              <p className='fields-content'>{carInfo[item]}</p>
            </div>
          )
        }
      </div>
      :
      <div className='brand-info'>
        <div className='fields'>
          <p className='fields-title'>brand</p>
          <input className='input-edit' value={brand} type="text" onChange={(e)=>setBrand(e.target.value)} />

        </div>
      </div>
             
      }
  </div>
  )
}

export default ModalBrandInfo