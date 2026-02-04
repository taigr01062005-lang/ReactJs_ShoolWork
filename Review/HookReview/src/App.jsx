import { useState, useEffect, useReducer, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../components/Button'



function App() {
  const [count, setCount] = useState(0);

  // useCallback trả về chính cái HÀM đó
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Hàm này sẽ được giữ nguyên địa chỉ vùng nhớ suốt đời


  return (
    <div>
      <span>{count}</span>
      <Button type='primary' text='+' onClick={increment}></Button>

    </div>

  )
}
export default App
