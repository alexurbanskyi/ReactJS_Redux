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
   const [fuel, setFuel] = useState('')
   const [accident, setAccident] = useState(false);
   
   const required = document.querySelector('.required');
   const brandClass = document.querySelector('.brand-input');
   const priceClass = document.querySelector('.price-input');
   const fuelClass = document.querySelector('.fuel-select');
   const tankClass = document.querySelector('.tank-input');
   
   const currentYear = new Intl.DateTimeFormat('uk', {year:'numeric'}).format(new Date())
   const yearClass = document.querySelector('.year-input');
   const incorrectYear = document.querySelector('.incorrect-year')
   const incorrectPrice = document.querySelector('.incorrect-price')
   const incorrectTank = document.querySelector('.incorrect-tank')
  
   const clearForm = () => {
      setModalFormShow(false)
      setBrand('')
      setColor('')
      setYear('')
      setPrice('')
      setTank('')
      setFuel('')
      setTransmission('')
      setAccident(false)
      required.classList.remove('warning-message')
      brandClass.classList.remove('wrong')
      priceClass.classList.remove('wrong')
      fuelClass.classList.remove('wrong');
      yearClass.classList.remove('wrong')
      priceClass.classList.remove('wrong')
      tankClass.classList.remove('wrong')
      incorrectPrice.classList.remove('warning-message')
      incorrectYear.classList.remove('warning-message')
      incorrectTank.classList.remove('warning-message')
      console.log('trans',transmission)
   }

   function checkRequiredValue(element, elementStyle){
      if (!element) {
         required.classList.add('warning-message')
         elementStyle.classList.add('wrong')
         return false
         }else{
            elementStyle.classList.remove('wrong')
            return true
         }
   }
   
   function checkValidYear(){
      if (!year){
         yearClass.classList.remove('wrong')
         incorrectYear.classList.remove('warning-message')
         return true

      }else{
         if (year < 1900 || year > +currentYear){
            yearClass.classList.add('wrong')
            incorrectYear.classList.add('warning-message')
            return false
         }else{
            yearClass.classList.remove('wrong')
            incorrectYear.classList.remove('warning-message')
            return true
         }
      }
   }

   function checkValidPrice(){
      if (price && price <= 0){
         required.classList.add('warning-message')
         priceClass.classList.add('wrong')
         incorrectPrice.classList.add('warning-message')
         return false
         
      }else{
         incorrectPrice.classList.remove('warning-message')
         return true
      }
   }

   function checkValidTank(){
      if (tank && tank <= 0){
         required.classList.add('warning-message')
         tankClass.classList.add('wrong')
         incorrectTank.classList.add('warning-message')
         console.log('tank wrong')
         return false
         
      }else{
         tankClass.classList.remove('wrong')
         incorrectTank.classList.remove('warning-message')
         console.log('tank good')
         return true
      }
   }
    
   const validate = () =>{

      if (!checkRequiredValue(brand,brandClass) || !checkRequiredValue(price, priceClass) || !checkRequiredValue(fuel, fuelClass) || !checkValidYear() || !checkValidPrice() || !checkValidTank()) {
         checkRequiredValue(brand,brandClass) 
         checkRequiredValue(price, priceClass) 
         checkRequiredValue(fuel, fuelClass)
         checkValidYear();
         checkValidPrice();
         checkValidTank();
      } else{
         brandClass.classList.remove('wrong')
         priceClass.classList.remove('wrong')
         fuelClass.classList.remove('wrong');
         required.classList.remove('warning-message')
         clearForm();
         setTableData([...tableData,{'brand': brand, 'color': color, 'price': price, 'year': year,'tank':tank, 'transmission':transmission, 'fuel':fuel, 'road accident':`${accident}`}])
      }
   }
 



  return (
   <div className={modalFormShow ? 'modal active' : 'modal'}>
      <div className={modalFormShow ? 'modal_content active' : 'modal_content'}>  
         <div className='form'>
            <h1 className='form-title'>Add New Car</h1>

            <div className='input-holder brand-input'>
               <h2 className='form-item'>Brand*</h2>
               <input type="text" className='form-input ' placeholder='car brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
            </div>

            <div className='input-holder'>
               <h2 className='form-item'>Color</h2>
               <input type="text" className='form-input' placeholder='car color' value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>

            <div className='input-holder price-input'>
               <h2 className='form-item'>price*</h2>
               <input type="number" className='form-input' placeholder='car price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
               <p className='incorrect-price'>incorrect price value (cannot be less than 1)</p>
            </div>
            <div className='input-holder year-input'>
               <h2 className='form-item'>year</h2>
               <input type="number" className='form-input' placeholder='car year' value={year} onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div>
               <p className='incorrect-year'>Incorrect year value (1900 - {currentYear})</p>
            </div>
            <div className='input-holder tank-input'>
               <h2 className='form-item'>tank</h2>
               <input type="number" className='form-input' placeholder='car tank' value={tank} onChange={(e)=>setTank(e.target.value)}/>
            </div>
            <div>
               <p className='incorrect-tank'>incorrect tank value (cannot be less than 1)</p>
            </div>            
            <div className='input-holder'>
               <h2 className='form-item'>transmission</h2>
               <select className='form-select'  value={transmission} defaultValue="" onChange={(e)=>setTransmission(e.target.value)}>
                  <option value="" disabled >car transmission</option>
                  <option value="manual">manual</option>
                  <option value="automatic" >automatic</option>
               </select>
            </div>
            <div className='input-holder  fuel-select'>
               <h2 className='form-item'>fuel*</h2>
               <select className='form-select' value={fuel} defaultValue=''  onChange={(e)=>setFuel(e.target.value)}>
                  <option value=''  disabled>fuel type</option>
                  <option value="gas">gas</option>
                  <option value="diesel" >diesel</option>
               </select>
            </div>
            <div className='form-chekbox'>
               <label><input type="checkbox" className='input-chekbox' checked={accident} onChange={() => setAccident(!accident)}/>ROAD ACCIDENT</label>
            </div>
            <div className='required'>
             * - Brand, Price, Fuel - required fields
            </div>
         </div>
         <div className='btn-add-holder'>
            <MyButton onClick={()=> clearForm()}>Cancel</MyButton>
            <MyButton onClick={ () => validate()}>Add Car</MyButton>
         </div>
      </div>
   </div>
  )
}

export default ModalForm