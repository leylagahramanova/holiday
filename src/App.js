import React from 'react';
import { Routes, Route, BrowserRouter,Link } from 'react-router-dom';
import './App.css';
import Teymur from './pages/Teymur';
import Mahir from './pages/Mahir';
import Naza from './pages/Naza';
import Mama from './pages/Mama';
import Papa from './pages/Papa';
import Card from './pages/Card';
import { HashRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router >
      <Routes><Route  path='/' element={<Card />} />
          <Route path='/mama' element={<Mama />} />
          <Route path="/papa" element={<Papa />} />
          <Route path="/naza" element={<Naza />} />
          <Route path="/mahir" element={<Mahir />} />
          <Route path="/teymur" element={<Teymur />} />
          </Routes>
          
    </Router>
  );
}

export default App;
