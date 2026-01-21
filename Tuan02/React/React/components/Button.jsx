import React from 'react'
import './Button.css'

export const Button = ({type}) => {
  let className=`btn btn-${type}`;
  return (
    <button className={className}>Add to Card</button>
  )
}
