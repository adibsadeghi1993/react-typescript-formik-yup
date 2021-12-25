import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import * as api from "../../api/index"
import { city } from "../../model/Types";
import EditCity from "./EditCity";

interface Props {
    
}

const City = (props: Props) => {
    const{cityId}=useParams()
    console.log(cityId)
    const [city, setCity] = useState<city | null>(null)

  useEffect(() => {
  if(cityId){
    api.getcity(parseInt(cityId)).then(res=>{
        setCity(res)
    })
  }

  console.log(city)
  }, [cityId])
    return (
        <div>
          <h1>{city&& city.cityName}</h1>
          <h1>{city&& city.description}</h1>
          {city && <img src={city.image}/>}
        </div>
    )
}

export default City
