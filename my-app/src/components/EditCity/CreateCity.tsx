
import * as api from "../../api/index";
import { city } from "../../model/Types";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"
import { FormEvent } from "react";
import { number } from "yup";

interface Props {
  setCities:React.Dispatch<React.SetStateAction<city[] | null | undefined>>,
  cities: city[]|null|undefined ,
}

const CreateCity = ({setCities,cities}: Props) => {
 
  const navigate=useNavigate()

 

  const { handleChange, handleBlur, values, errors, touched } = useFormik<{
    cityName: string;
    description: string;
    image: string;
    id:string
  }>({
    initialValues: {
      cityName: "",
      description: "",
      image: "",
     id:""
    },
    onSubmit: (): void => {},
    validationSchema: Yup.object().shape({
      cityName: Yup.string().min(3).max(20).required("is required"),
      description: Yup.string().min(10).max(250).required("is required"),
      image: Yup.string().min(10).max(250).required("is required"),
      id: Yup.number().min(1).required("this is should be number"),
    }),
   
  });
  console.log(values);
  console.log(errors);
  const submitForm = (e:FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
   api.createCity({id:values.id,image:values.image,cityName:values.cityName,description:values.description}).then(res=>{
     console.log(res)
     console.log("adib")
     navigate("/")
   }).catch(err=>{
 
   })
   
  };


  let statueBtn:boolean = true;
  if (
    !errors.cityName &&
    !errors.description &&
    !errors.id &&
    !errors.image ){
      console.log("hhhhhhhhh")
     statueBtn=false
    }
    
  

  return (
    <div className="mt-5">
      <form>
        <div className="row">
        <div className="col-12 col-md-8 offset-md-2 mt-3 ">
            <label className="form-label w-100 text-start">city id</label>
            <input
              name="id"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.id}
              type="text"
              className="form-control"
            />
            {errors.id && touched.id && <p style={{color:"red"}}>{errors.id}</p>}
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3 ">
            <label className="form-label w-100 text-start">city name</label>
            <input
              name="cityName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.cityName}
              type="text"
              className="form-control"
            />
            {errors.cityName && touched.cityName && <p style={{color:"red"}}>{errors.cityName}</p>}
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3 ">
            <label className="form-label w-100 text-start">description</label>
            <textarea
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.description}
              className="form-control"
            />
            {errors.description && touched.description && (
              <p style={{color:"red"}}>{errors.description}</p>
            )}
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3">
            <label className="form-label  w-100 text-start">imageurl</label>
            <input
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.image}
              type="text"
              className="form-control"
            />
            {errors.image && touched.image && <p style={{color:"red"}}>{errors.image}</p>}
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3">
            <button
              disabled={
                statueBtn
                
              }
              type="submit"
              onClick={submitForm}
              className="btn btn-warning w-100"
            >
              Add city
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCity;
