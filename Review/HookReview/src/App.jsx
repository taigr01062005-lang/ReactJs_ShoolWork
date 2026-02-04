import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Button type='primary' text='+' onClick={()=>{setCount(count+1)}}></Button>
        <span>{count}</span>
    </div>
  
  )
}

export default App
