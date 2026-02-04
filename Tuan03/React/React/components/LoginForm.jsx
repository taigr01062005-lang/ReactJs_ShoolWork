import React, { useState } from 'react'
import Input from './Input'
import './LoginForm.css'
import { Button } from './Button'


const LoginForm = ({background,border}) => {
let [email,setEmail]=useState('')
let [name,setName]=useState('')


  return (
    <div style={{backgroundColor:background}} className='login'>
      <Button type='close' text='&times;'></Button>
      <Input label='Name' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></Input>
      <Input label='Email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></Input>
      <Button text='Login' type='primary'></Button> 
      <span>Name: {name}</span><br />
      <span>Email: {email}</span>
    </div>
  )
}

export default LoginForm
