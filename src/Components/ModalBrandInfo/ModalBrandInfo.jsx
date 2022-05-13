import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './ModalBrandInfo.css'

function ModalBrandInfo({brandShow, setBrandShow, carId}) {

  const tableData = useSelector(state => state.tableData)

  const [edit, setEdit] = useState(false)
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [year, setYear] = useState('') 
  const [tank, setTank] = useState('') 
  const [transmission, setTransmission] = useState('')
  const [fuel, setFuel] = useState('')
  const [accident, setAccident] = useState(false);
  const [required, setRequired] = useState(true)
  const [validTank, setValidTank] = useState(true)
  const [validYear, setValidYear] = useState(true)
  const [validPrice,setValidPrice] = useState(true)
  const currentYear = new Intl.DateTimeFormat('uk', {year:'numeric'}).format(new Date())  

  const carInfo = tableData.find((item)=> item.id == carId)
  const carIndex = tableData.findIndex((item) => item.id == carId)
  const fields = Object.keys(carInfo).filter((item) => item != 'id')
  useEffect(()=>{
    setBrand(carInfo.brand)
    setColor(carInfo.color)
    setPrice(carInfo.price)
    setYear(carInfo.year)
    setTank(carInfo.tank)
    setTransmission(carInfo.transmission)
    setFuel(carInfo.fuel)
    setAccident(false)
  },[carInfo, edit]);

  function checkValidTank(){
    if (tank && tank <= 0){
       setValidTank(false)
       return false
    }else{
       setValidTank(true)
       return true
    }
 }

 function checkValidYear(){
    if (year && (year < 1900 || year > +currentYear)){
       setValidYear(false)
       return false
    }else{
       setValidYear(true)
       return true
    }
 }

 function checkValidPrice(){
    if (price && price <= 0){
       setValidPrice(false)
       return false
    }else{
    setValidPrice(true)
       return true
    }
 }
 
  function validEdit(){
    if (!price || !brand || !checkValidTank() || !checkValidYear() || !checkValidPrice()){
      setRequired(false)
      checkValidTank()
      checkValidYear();
      checkValidPrice()
    }else{
      setEdit(false)
      setBrandShow(false)
      tableData[carIndex].brand = brand
      tableData[carIndex].color = color
      tableData[carIndex].price = price
      tableData[carIndex].year= year
      tableData[carIndex].tank = tank
      tableData[carIndex].transmission = transmission
      tableData[carIndex].fuel = fuel
      tableData[carIndex]['road accident'] = `${accident}`
    }  
  }
  
  return (
  <div className={brandShow ? 'brand active-brand' : 'brand'}>
    <div className='wrapper-button'>
      <button className='brand-close' onClick={()=>{
          setEdit(false)
          setBrandShow(false)
          
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
            <div className='brand-info-title'>Car Info</div>
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
        <div className='brand-info-title'>Car Edit</div>

        <div className={(required || brand) ? 'fields' : 'fields wrong'}>
          <p className='fields-title'>brand*</p>
          <input className='input-edit' value={brand} type="text" onChange={(e)=>setBrand(e.target.value)} />
        </div>

        <div className='fields'>
          <p className='fields-title'>color</p>
          <input className='input-edit' value={color} type="text" onChange={(e)=>setColor(e.target.value)} />
        </div>

        <div className={(price && validPrice) ? 'fields' : 'fields wrong'}>
          <p className='fields-title'>price*</p>
          <input className='input-edit' value={price} type="number" onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div>
          <p className={validPrice ? 'incorrect-price' : ' warning-message'}>incorrect price value (cannot be less than 1)</p>
        </div>

        <div className={validYear ? 'fields' : 'fields wrong'}>
          <p className='fields-title'>year</p>
          <input className='input-edit' value={year} type="number" onChange={(e)=>setYear(e.target.value)} />
        </div>
        <div>
          <p className={validYear ? 'incorrect-year' : ' warning-message'}>Incorrect year value (1900 - {currentYear})</p>
        </div>

        <div className={validTank ? 'fields' : 'fields wrong'}>
          <p className='fields-title'>tank</p>
          <input className='input-edit' value={tank} type="number" onChange={(e)=>setTank(e.target.value)} />
        </div>
        <div>
          <p className={validTank ? 'incorrect-tank' : ' warning-message'}>incorrect tank value (cannot be less than 1)</p>
        </div>

        <div className='fields'>
          <p className='fields-title'>transmission</p>
          <select className='select-edit'  value={transmission} defaultValue="" onChange={(e)=>setTransmission(e.target.value)}>
            <option value="" disabled >car transmission</option>
            <option value="manual">manual</option>
            <option value="automatic" >automatic</option>
          </select>
        </div>
        <div className='fields'>
          <p className='fields-title'>fuel</p>
          <select className='select-edit'  value={fuel} defaultValue="" onChange={(e)=>setFuel(e.target.value)}>
            <option value="" disabled >fuel type</option>
            <option value="gas">gas</option>
            <option value="diesel" >diesel</option>
          </select>
        </div>
        <div className='fields'>
          <label><input type="checkbox" className='input-chekbox' checked={accident} onChange={() => setAccident(!accident)}/>ROAD ACCIDENT</label>
        </div>
        <div className= {((brand && price) || required) ? 'required' : 'required warning-message'}>
             * - Brand, Price, Fuel - required fields
        </div>
       
      </div>
             
      }
  </div>
  )
}
export default ModalBrandInfo