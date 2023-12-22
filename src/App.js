import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from "react";
import './App.css';
import Teymur from './pages/Teymur';
import Mahir from './pages/Mahir';
import Naza from './pages/Naza';
import Mama from './pages/Mama';
import Papa from './pages/Papa';
import Card from './pages/Card';

function App() { 
 
  return (
    <BrowserRouter basename="/card">
    <Routes>
    <Route exact path="//card" element={<Card />} />
      <Route path='/mama' element={<Mama/>}/>
      <Route path="/papa" element={<Papa />} />
      <Route path="/naza" element={<Naza />} />
      <Route path="/mahir" element={<Mahir />} />
      <Route path="/teymur" element={<Teymur />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
