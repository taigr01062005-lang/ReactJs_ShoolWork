import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../components/Button'
import Alert from '../components/Alert'
import Input from '../components/Input'
import LoginForm from '../components/LoginForm'
import ProductList from '../components/ProductList'
import { Header } from '../components/Header'
import { StudentInfo } from '../components/StudentInfo'
import { Footer } from '../components/Footer'
import StatusBadge from '../components/StatusBadge'

function App() {
  let [color,setColor]=useState('')

  return (
    <div className='App'>
      <div> <StatusBadge status={color}></StatusBadge></div>
      <div>
        <Button type='success' text='online' onClick={()=>{setColor('online')}}></Button>
       <Button  text='offline' onClick={()=>{setColor('offline')}}></Button>
        <Button type='danger' text='busy' onClick={()=>{setColor('busy')}}></Button>
      </div>
      
     
    </div>
  )
}

export default App
