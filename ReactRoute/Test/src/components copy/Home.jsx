import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p>home</p>
      <button onClick={() => navigate(1)}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Home
