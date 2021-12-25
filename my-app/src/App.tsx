import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import EditCity from './components/EditCity/EditCity';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route path=":cityId" element={<EditCity />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
