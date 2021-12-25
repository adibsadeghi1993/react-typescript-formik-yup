import axios from "axios"
import { city } from "../model/Types"

const client=axios.create({
    baseURL:"http://localhost:4000/"
})

const getAllCities= async()=>{
  try {
    const {data}=await client.get("/cities")
    return data
  } catch (error:any) {
      return error?.response.message
  }
}
const getcity= async(id:number)=>{
    try {
      const {data}=await client.get(`/cities/${id}`)
      return data
    } catch (error:any) {
        return error?.response.message
    }
  }

  const createCity= async(city:city)=>{
    try {
      const {data}=await client.post("/cities",city)
      return data
    } catch (error:any) {
        return error?.response.message
    }
  }
  const updateCity= async(city:city)=>{
    try {
      const {data}=await client.put(`/cities/${city.id}`,city)
      return data
    } catch (error:any) {
        return error?.response.message
    }
  }
  const deleteCity= async(id:number)=>{
    try {
      const {data}=await client.delete(`/cities/${id}`)
      return data
    } catch (error:any) {
        return error?.response.message
    }
  }

  export {
      getAllCities,getcity,updateCity,createCity,deleteCity
  }