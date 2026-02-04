import React from 'react'
import './Button.css'
import { useState } from 'react';

export const Button = ({text,type,onClick}) => {
  let className=`btn btn-${type}`;
  if(type=='close'){
    className=`btn-${type}`;
  }

  
  return (
      <button className={className} onClick={onClick}>{text}</button>
  )
}
