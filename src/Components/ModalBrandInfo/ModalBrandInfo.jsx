import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ModalBrandInfo.css'

function ModalBrandInfo({carInfo, setCarInfo}) {
  const fields = Object.keys(carInfo)
  

  return (
   <div className={(Object.keys(carInfo).length) ? 'brand active-brand' : 'brand'}>
     <button className='brand-close' onClick={()=>setCarInfo({})} >close</button>
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
  </div>
  )
}

export default ModalBrandInfo