import './App.css'
import { BrowserRouter, Routes, Route, Link , NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { Button } from './components/Button';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Button text="Test" type="primary"></Button>
    </div>
   
  );
}

export default App
