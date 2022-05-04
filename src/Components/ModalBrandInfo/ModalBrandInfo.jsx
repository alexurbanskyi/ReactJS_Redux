import React from 'react'
import './ModalBrandInfo.css'

function ModalBrandInfo({carInfo, setCarInfo}) {
  const fields = Object.keys(carInfo)
  console.log('fields', fields);

  return (
   <div className={(Object.keys(carInfo).length) ? 'brand active-brand' : 'brand'}>
     <button className='brand-close' onClick={()=>setCarInfo({})} >close</button>
      <div className='brand-info'>
        {
          fields.map((item)=>
            <div className='fields'>
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