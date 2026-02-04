import React from 'react'
import './Input.css'

const Input = ({placeholder,label,onChange}) => {
  return (
    <div>
        <label className='label'>{label}</label>
        <input className='input' type="text" placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input
