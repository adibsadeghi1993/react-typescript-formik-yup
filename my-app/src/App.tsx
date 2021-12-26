import React,{useState} from 'react';
import { Routes, Route,} from "react-router-dom";


import './App.css';
import Cities from './components/Cities';
import City from './components/EditCity/City';
import CreateCity from './components/EditCity/CreateCity';


import Layout from './components/Layout';
import { city } from './model/Types';

function App() {
  const [cities, setCities] = useState<city[]| null | undefined>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  
  return (
    <div className="App">
      <Layout/>
      <Routes>
      <Route path="/" element={<Cities isLoading={isLoading} setIsLoading={setIsLoading} cities={cities} setCities={setCities}  />}/>
         
          
      <Route path="/:cityId" element={<City  cities={cities} setCities={setCities} />} />
      <Route path="/createcity" element={<CreateCity  />} />
      </Routes>
    </div>
  );
}

export default App;
