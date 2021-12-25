import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Cities from './components/Cities';
import EditCity from './components/EditCity/EditCity';

import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
      <Route path="/" element={<Cities />}/>
         
          
      <Route path="/:cityId" element={<EditCity />} />
      </Routes>
    </div>
  );
}

export default App;
