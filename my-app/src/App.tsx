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

  
  return (
    <div className="App">
      <Layout/>
      <div className='container'>
      <Routes>
      <Route path="/" element={<Cities isLoading={isLoading} setIsLoading={setIsLoading} cities={cities} setCities={setCities}  />}/>
         
          
      <Route path="/:cityId" element={<City  cities={cities} setCities={setCities} />} />
      <Route path="/createcity" element={<CreateCity cities={cities} setCities={setCities} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
