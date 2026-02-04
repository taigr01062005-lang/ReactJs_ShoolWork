import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import { useReducer } from 'react'

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 }; default: throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <span>{state.count}</span>
      <Button type='primary' text='+' onClick={() => { dispatch({ type: 'increment' }) }}></Button>
      <Button type='danger' text='-' onClick={() => { dispatch({ type: 'decrement' }) }}></Button>

    </div>

  )
}
export default App
