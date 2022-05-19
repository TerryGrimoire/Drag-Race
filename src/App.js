import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Queens from './Pages/Queens';
import Home from './Pages/Home';
import SashayAway from './Pages/SashayAway';
import About from './Pages/About';
import Nav from './Components/Nav';



function App() {
  return (
    <div>
      <Router>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Queens' element={<Queens />} />
      <Route path='/SashayAway' element={<SashayAway />} />
      <Route path='/About' element={<About />} />
    </Routes>
  </Router>

    </div>
  );
}

export default App;
