import React,{useState,useEffect} from "react";

import { city } from "../model/Types";
import * as api from "../api/index"
import { useNavigate } from "react-router-dom";


interface Props {}

const Cities = (props: Props) => {

 const navigat= useNavigate()

    const [cities, setCities] = useState<city[]| null | undefined>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
 
useEffect(() => {
    api.getAllCities().then(res=>{
        setIsLoading(true)
        setCities(res)
        setIsLoading(false)
    }).catch(error=>setError(error.response.message))
   
}, [])

const deleteCity:(id:number)=>void=(id)=>{

    setCities(cities?.filter(item=>item.id!==id))
    api.deleteCity(id).then(res=>{
        setCities(cities?.filter(item=>item.id!==id))  
    }).catch(error=>{
        setError(error.response.message)
        setCities(cities)
    })
}

const EditCity:(id:number)=>void=(id)=>{
   navigat(`/${id}`)
}

if(isLoading) return <p>data is loading</p>


  
  return (
    <div className="container mt-5">
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    
    {cities &&
        cities?.map((city) => {
          return (
            <div key={city.id}>
              <div className="card">
                <img src={city.image} className="card-img-top" alt="city" />
                <div className="card-body">
                  <h5 className="card-title text-start">name:{city.cityName}</h5>
                  <p className="card-text text-start">desc={city.description}</p>
                  <div className="d-flex justify-content-between mt-4">
                      <button onClick={()=>EditCity(city.id)}  className="btn btn-outline-primary"><i className="bi bi-pencil-square"></i><span className="ms-2">Edit</span></button>
                      <button onClick={()=>deleteCity(city.id)}  className="btn btn-outline-danger"><i className="bi bi-trash"></i><span className="ms-2">Delete</span></button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
     </div>
  
  );
};

export default Cities;
