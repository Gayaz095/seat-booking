import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AmountContextProvider from './context/Context';
import Booking from './components/Booking';
import { Navbar } from './components/nav-bar/navbar';
import Movies from "./Movies";

function App() {
  return (
    <div className='app-container'>
      <AmountContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/booking" element={<Booking />} /> 
          </Routes>
          </Router>
		  </AmountContextProvider>
    </div>
  );
};

export default App;
