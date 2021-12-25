import React from 'react'
import { useAllCities } from '../hooks'

interface Props {
    
}

const Home = (props: Props) => {

    const {data,loading,error}=useAllCities()

    if(loading) return <p>data is loading</p>
    return (
        <div>
         {data && data.map(city=>{
             return <div key={city.id}>
                 name:{city.cityName}
                 <img src={city.image} alt="snan" />
                 des:{city.description}
                 </div>
         })}   
         <h1>home</h1>
        </div>
    )
}

export default Home
