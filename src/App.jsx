import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {  Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
