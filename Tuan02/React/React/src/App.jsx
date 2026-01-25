import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../components/Button'
import Alert from '../components/Alert'

function App() {
  let [alertStatus,setAlertStatus]=useState(null)
  console.log(alertStatus)

  return (
    <div className='App'>
      <Button type="success" text="Success" onClick={()=>{setAlertStatus('success')}} ></Button>
      <Button type="warning" text="Warning" onClick={()=>{setAlertStatus('warning')}}></Button>
      <Button type="danger" text="Error" onClick={()=>{setAlertStatus('error')}}> </Button>
      <Alert type={alertStatus}></Alert>

    </div>
  )
}

export default App
