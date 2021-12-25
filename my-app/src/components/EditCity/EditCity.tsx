import React from 'react'
import { useParams } from 'react-router-dom'

interface Props {
    
}

const EditCity = (props: Props) => {
   const {cityId}= useParams()
   console.log(cityId)
    return (
        <div className='mt-5'>
          <h1 className='mt-5'>hi city</h1>
        </div>
    )
}

export default EditCity
