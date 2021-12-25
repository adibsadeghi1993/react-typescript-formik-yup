import axios from "axios"
import { city } from "../model/Types"

const client=axios.create({
    baseURL:"http://localhost:4000/"
})

const getAllCities= async()=>{
 
    const {data}=await client.get("/cities")
    return data
  
}
const getcity= async(id:number | undefined)=>{
   
      const {data}=await client.get(`/cities/${id}`)
      return data
    
  }

  const createCity= async(city:city)=>{

      const {data}=await client.post("/cities",city)
      return data
   
  }
  const updateCity= async(city:city)=>{

      const {data}=await client.put(`/cities/${city.id}`,city)
      return data
   
  }
  const deleteCity= async(id:number)=>{
 
      const {data}=await client.delete(`/cities/${id}`)
      return data
    
  }

  export {
      getAllCities,getcity,updateCity,createCity,deleteCity
  }