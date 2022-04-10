import React from 'react'
import './MyButton.css'

function MyButton({children, onClick}) {
  return (
    <button onClick={onClick}>
       <p>{children}</p>
    </button>
  )
}

export default MyButton