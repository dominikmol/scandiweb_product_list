import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import './App.css';

function App() {
  //  managing different addresses in a website
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/add-product" element={<AddProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
