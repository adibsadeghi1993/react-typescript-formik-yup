import React from "react";
import { useAllCities } from "../hooks";

interface Props {}

const Home = (props: Props) => {
  const { data, loading, error } = useAllCities();

  if (loading) return <p>data is loading</p>;

  const deleteCity:(id:number)=>void=(id)=>{

  } 
  return (
    <div className="container mt-5">
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    
    {data &&
        data.map((city) => {
          return (
            <div key={city.id}>
              <div className="card">
                <img src={city.image} className="card-img-top" alt="city" />
                <div className="card-body">
                  <h5 className="card-title text-start">name:{city.cityName}</h5>
                  <p className="card-text text-start">desc={city.description}</p>
                  <div className="d-flex justify-content-between mt-4">
                      <button onClick={()=>deleteCity(city.id)} className="btn btn-outline-primary"><i className="bi bi-pencil-square"></i><span className="ms-2">Edit</span></button>
                      <button className="btn btn-outline-danger"><i className="bi bi-trash"></i><span className="ms-2">Delete</span></button>
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

export default Home;
