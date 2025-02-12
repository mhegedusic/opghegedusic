import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import './opghegedusic.css';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Footer from './footer';

function App() {
  return (
    <div className='bodyBackground'>
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Gallery/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
