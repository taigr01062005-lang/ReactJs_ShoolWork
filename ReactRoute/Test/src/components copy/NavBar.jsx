import React from 'react'
import { BrowserRouter, Routes, Route, Link , NavLink} from 'react-router-dom';
import './NavBar.css'
import Home from './Home';
import About from './About';
import ProductList from './ProductList';

const NavBar = () => {
  return (
    <div>
       <nav style={{display:'flex', gap:'20px'}}>
        <NavLink to="/" style={({isActive})=>({
          backgroundColor: isActive? '#61dafb' : 'white',
          textDecoration:'none',
          color: isActive ? 'white': 'black', 
          borderRadius:'10px',
          padding:'10px'
          })}>Home</NavLink>

        <NavLink to="/about" style={({isActive})=>({
          backgroundColor: isActive? '#61dafb' : 'white',
          textDecoration:'none',
          color: isActive ? 'white': 'black', 
          borderRadius:'10px',
          padding:'10px'
          })}>About</NavLink>

          <NavLink to="/product" style={({isActive})=>({
          backgroundColor: isActive? '#61dafb' : 'white',
          textDecoration:'none',
          color: isActive ? 'white': 'black', 
          borderRadius:'10px',
          padding:'10px'
          })}>Product List</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path='/product' element={<ProductList/>}></Route>

      </Routes>
    </div>
  )
}

export default NavBar
