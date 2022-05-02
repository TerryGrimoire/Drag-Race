import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Queens from './Pages/Queens';
import Home from './Pages/Home';
import Game from './Pages/Game';
import About from './Pages/About';
import Nav from './Components/Nav';

ReactDOM.render(
    <Router>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Queens' element={<Queens />} />
      <Route path='/Game' element={<Game />} />
      <Route path='/About' element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);