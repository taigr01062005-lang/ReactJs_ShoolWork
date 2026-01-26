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

function App() {
  let [count,setCount]=useState(0)

  let cong=()=>{
    setCount(count+=1)
  }
  let tru=()=>{
    if(count==0){
      return;
    }else{
      setCount(count-=1)
    }
    
  }

  return (
    <div className='App'>
    <Button text='+' type='primary' onClick={cong}></Button>
    <Button text='-' type='primary' onClick={tru}></Button>
    <Button text='reset' type='primary' onClick={()=>{setCount(0)}}></Button>
    <span>{count}</span>
     
    </div>
  )
}

export default App
