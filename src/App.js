import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Teymur from './pages/Teymur';
import Mahir from './pages/Mahir';
import Naza from './pages/Naza';
import Mama from './pages/Mama';
import Papa from './pages/Papa';
import Card from './pages/Card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/mama' element={<Mama />} />
        <Route path="/papa" element={<Papa />} />
        <Route path="/naza" element={<Naza />} />
        <Route path="/mahir" element={<Mahir />} />
        <Route path="/teymur" element={<Teymur />} />
      </Routes>
    </div>
  );
}

export default App;