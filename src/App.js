import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



import { useState, useEffect } from 'react'


import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Register from './Pages/Register/Register';



function App() {
 

  
  
  return (
    <div className="App">
    
        <BrowserRouter>
          <Navbar />
          <div className='container'>
          <Routes>
              <Route path="/" element={<Register /> } />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
