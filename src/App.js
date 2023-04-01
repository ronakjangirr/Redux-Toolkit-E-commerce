import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './pages/Home';
import Cartt from './pages/Cartt';
import NavBarr from './components/NavBarr';
import Products from './components/Products';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBarr/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/gt" element={<Cartt />}/>
      <Route path="/upd" element={<Products />}/>
    </Routes>    
  </BrowserRouter> 
    </>
  );
}

export default App;
