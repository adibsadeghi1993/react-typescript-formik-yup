import React, { useState, useEffect } from "react";
import * as api from "../api/index";
import { city } from "../model/Types";
import {useQuery} from "react-query"

type result = {
  data: city[] | null;
  loading: boolean;
  error: string;
  setData:React.Dispatch<React.SetStateAction<city[] | null>>
};

export const useAllCities: () => result = () => {
 
    return useQuery("cities",()=>api.getAllCities())

  return { data, loading, error,setData };
};



type deleteResult = [
  fetch: (id?: number,data?:null | city[],setData?:React.Dispatch<React.SetStateAction<city[] | null>>) => void;
];
export const useDeleteCity: () => deleteResult = () => {

  const fetch:(id:number,data:city[],setData:React.Dispatch<React.SetStateAction<city[] | null>>)=>void = (id,data,setData) => {
    api.deleteCity(id).then(res=>{

        setData(data.filter(item=>item.id !==id))
    })
  };
  return [fetch] ;
};
