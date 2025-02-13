import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import './opghegedusic.css';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Footer from './footer';
import Contact from './pages/contact';

function App() {
  return (
    <div className='bodyBackground'>
      <div className='firstScreen'>
    <img src="https://i.ibb.co/5x85f8pj/vjeverica.jpg" alt="vjeverica" border="0" className='vjeverica' />
    <h1 className='headingOnFirstScreen'>Dobrodošli na stranicu <br/>OPG Hegedušić</h1>
    </div>
    <Router>
      <Navigation/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div> 
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
