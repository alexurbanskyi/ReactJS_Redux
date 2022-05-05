import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import './ModalForm.css'


function ModalForm({modalFormShow, setModalFormShow, setTableData, tableData}) {
   const [brand, setBrand] = useState('')
   const [color, setColor] = useState('')
   const [price, setPrice] = useState('')
   const [year, setYear] = useState('') 
   const [tank, setTank] = useState('') 
   const [transmission, setTransmission] = useState('')
   const [fuel, setFuel] = useState('');
   const [accident, setAccident] = useState(false);

  return (
   <div className={modalFormShow ? 'modal active' : 'modal'}>
      <div className={modalFormShow ? 'modal_content active' : 'modal_content'}>  
         <div className='form'>
            <h1 className='form-title'>Add New Car</h1>
            <div className='input-holder'>
               <h2 className='form-item'>Brand</h2>
               <input type="text" className='form-input' placeholder='car brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>Color</h2>
               <input type="text" className='form-input' placeholder='car color' value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>price</h2>
               <input type="number" className='form-input' placeholder='car price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>year</h2>
               <input type="number" className='form-input' placeholder='car year' value={year} onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>tank</h2>
               <input type="number" className='form-input' placeholder='car tank' value={tank} onChange={(e)=>setTank(e.target.value)}/>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>transmission</h2>
               <select className='form-select' onChange={(e)=>setTransmission(e.target.value)}>
                  <option disabled="disabled" selected="selected">car transmission</option>
                  <option value="manual">manual</option>
                  <option value="automatic" >automatic</option>
               </select>
            </div>
            <div className='input-holder'>
               <h2 className='form-item'>fuel</h2>
               <select className='form-select'  onChange={(e)=>setFuel(e.target.value)}>
                  <option disabled="disabled"  selected="selected">fuel type</option>
                  <option value="gas">gas</option>
                  <option value="diesel" >diesel</option>
               </select>
            </div>
            <div className='form-chekbox'>
               <label><input type="checkbox" className='input-chekbox' checked={accident} onChange={() => setAccident(!accident)}/>ROAD ACCIDENT</label>
            </div>
         </div>
         <div className='btn-add-holder'>
            <MyButton onClick={()=>{
               setModalFormShow(false)
               setBrand('')
               setColor('')
               setYear('');
               setPrice('')
               setTank('')
               setFuel('')
               setTransmission('')
               setAccident(false)

            }}>Cancel</MyButton>
            <MyButton onClick={()=>{
               setModalFormShow(false)
               setBrand('')
               setColor('')
               setYear('');
               setPrice('')
               setTank('')
               setFuel('')
               setTransmission('')
               setAccident(false)
               setTableData([...tableData,{'brand': brand, 'color': color, 'price': price, 'year': year,'tank':tank, 'transmission':transmission, 'fuel':fuel, 'road accident':`${accident}`}])
            }}>Add Car</MyButton>
         </div>
      </div>
   </div>
  )
}

export default ModalForm