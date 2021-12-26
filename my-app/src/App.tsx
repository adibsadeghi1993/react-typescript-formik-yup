import React from 'react';
import { Routes, Route,} from "react-router-dom";


import './App.css';
import Cities from './components/Cities';
import City from './components/EditCity/City';
import CreateCity from './components/EditCity/CreateCity';


import Layout from './components/Layout';

function App() {
  
  return (
    <div className="App">
      <Layout/>
      <Routes>
      <Route path="/" element={<Cities />}/>
         
          
      <Route path="/:cityId" element={<City />} />
      <Route path="/createcity" element={<CreateCity  />} />
      </Routes>
    </div>
  );
}

export default App;
