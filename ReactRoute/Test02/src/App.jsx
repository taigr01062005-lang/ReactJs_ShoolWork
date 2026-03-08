import { BrowserRouter , Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>1. Link (không active)</h2>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </nav>

        <h2>2. NavLink (có active)</h2> 
        <nav>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
          {' | '}
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink>
        </nav>

        <hr/>
        <h2>Pages</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
