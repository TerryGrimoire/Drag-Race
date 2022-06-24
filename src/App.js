import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Queens from './Pages/Queens';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Vocabulary from './Pages/Vocabulary';
import React, { useRef } from 'react';


function App() {
  let curseurRef = useRef();

 const handleMove= e => {
  curseurRef.current.setAttribute('style', `top: ${e.pageY - 5}px; left: ${e.pageX - 10}px;`);
 }

  return (
    <div  className='welcome_main' onMouseMove={handleMove}>
      <div  ref={curseurRef} className="mouse_effect"></div>
      <Router>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Queens' element={<Queens />} />
      <Route path='/Vocabulary' element={<Vocabulary />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </Router>

    </div>
  );
}

export default App;
