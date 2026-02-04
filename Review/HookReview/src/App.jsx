import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useMemo } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([10, 20, 30, 40, 50]);

  const total = useMemo(() => {
    console.log("Đang tính tổng");
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }, [numbers]); // Chỉ tính lại nếu 'numbers' thay đổi


  return (
    <div>
      <span>{total}</span>
      <Button type='primary' text='+' onClick={() => { setCount(count + 1) }}></Button>

    </div>

  )
}
export default App
