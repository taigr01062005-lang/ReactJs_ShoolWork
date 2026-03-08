import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductList = () => {

    let navigate=useNavigate()
  return (
    <div>
      <p>product list</p>
      <button onClick={() => navigate(1)}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default ProductList
