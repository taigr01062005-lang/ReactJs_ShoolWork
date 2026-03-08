import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate =useNavigate()

  return (
    <div>
      <p>about</p>
      <button onClick={() => navigate(1)}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default About
