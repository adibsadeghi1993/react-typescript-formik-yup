import React,{useState,useEffect} from 'react';
import * as api from "../api/index"
import { city } from '../model/Types';

 type result={
     data:city[] | null,
     loading:boolean,
     error:string
 }

 export const useAllCities:() =>result  =()=>{
    const [data, setData] = useState<null | city[]>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        api.getAllCities().then(res=>{
            console.log(res)
            setData(res)
            setLoading(false)
        }).catch(error=>setError(error.response.message))
     
    }, [])

    return {data,loading,error}
}

