import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Cities from './components/Cities';
import City from './components/EditCity/City';


import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
      <Route path="/" element={<Cities />}/>
         
          
      <Route path="/:cityId" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
