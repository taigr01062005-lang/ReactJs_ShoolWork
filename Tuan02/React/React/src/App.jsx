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

  return (
    <div className='App'>
      <LoginForm background='gainsboro'></LoginForm>
     
    </div>
  )
}

export default App
