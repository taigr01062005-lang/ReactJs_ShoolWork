import React from 'react'
import './Button.css'


export const Button = ({text,type}) => {
  let className=`btn btn-${type}`;
  if(type=='close'){
    className=`btn-${type}`;
  }

  
  return (
      <button className={className} >{text}</button>
  )
}
