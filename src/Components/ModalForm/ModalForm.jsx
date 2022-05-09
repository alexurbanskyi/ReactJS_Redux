import React, { useEffect, useState } from 'react'
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
   const currentYear = new Intl.DateTimeFormat('uk', {year:'numeric'}).format(new Date())

   const [required, setRequired] = useState(true)
   const [validTank, setValidTank] = useState(true)
   const [validYear, setValidYear] = useState(true)
   const [validPrice,setValidPrice] = useState(true)

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
      setRequired(true)
   }

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
   useEffect(()=>{
      checkValidTank()
      checkValidYear()
      checkValidPrice()
   },[tank, price, year]);

   const validate = () =>{
      if (!price || !brand || !fuel || !checkValidTank() || !checkValidYear() || !checkValidPrice()){
             setRequired(false)
             checkValidTank()
             checkValidYear();
             checkValidPrice()
             
         }else{
            clearForm();
            setTableData([...tableData,{'brand': brand, 'color': color, 'price': price, 'year': year,'tank':tank, 'transmission':transmission, 'fuel':fuel, 'road accident':`${accident}`}])
            setRequired(true)
         }
   }
 
  return (
   <div className={modalFormShow ? 'modal active' : 'modal'}>
      <div className={modalFormShow ? 'modal_content active' : 'modal_content'}>  
         <div className='form'>
            <h1 className='form-title'>Add New Car</h1>

            <div className={(required || brand) ? 'input-holder' : 'input-holder wrong'}>
               <h2 className='form-item'>Brand*</h2>
               <input type="text" className='form-input ' placeholder='car brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
            </div>

            <div className='input-holder'>
               <h2 className='form-item'>Color</h2>
               <input type="text" className='form-input' placeholder='car color' value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>

            <div  className={((required || price) && validPrice) ? 'input-holder' : 'input-holder wrong'}>
               <h2 className='form-item'>price*</h2>
               <input type="number" className='form-input' placeholder='car price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
               <p className={validPrice ? 'incorrect-price' : ' warning-message'}>incorrect price value (cannot be less than 1)</p>
            </div>

            <div className={(validYear) ? 'input-holder' : 'input-holder wrong'}>
               <h2 className='form-item'>year</h2>
               <input type="number" className='form-input' placeholder='car year' value={year} onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div>
               <p className={validYear ? 'incorrect-year' : ' warning-message'}>Incorrect year value (1900 - {currentYear})</p>
            </div>
            
            <div className={(validTank) ? 'input-holder' : 'input-holder wrong'}>
               <h2 className='form-item'>tank</h2>
               <input type="number" className='form-input' placeholder='car tank' value={tank} onChange={(e)=>setTank(e.target.value)}/>
            </div>
            <div>
               <p className={validTank ? 'incorrect-tank' : ' warning-message'}>incorrect tank value (cannot be less than 1)</p>
            </div>

            <div className='input-holder'>
               <h2 className='form-item'>transmission</h2>
               <select className='form-select'  value={transmission} defaultValue="" onChange={(e)=>setTransmission(e.target.value)}>
                  <option value="" disabled >car transmission</option>
                  <option value="manual">manual</option>
                  <option value="automatic" >automatic</option>
               </select>
            </div>

            <div  className={(required || fuel) ? 'input-holder' : 'input-holder wrong'}>
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

            <div className= {((brand && price && fuel) || required) ? 'required' : 'required warning-message'}>
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