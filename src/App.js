import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Queens from './Pages/Queens';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Vocabulary from './Pages/Vocabulary';



function App() {
  return (
    <div>
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
