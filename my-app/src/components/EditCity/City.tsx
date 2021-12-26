import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/index";
import { city } from "../../model/Types";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"

interface Props {}

const City = (props: Props) => {
  const { cityId } = useParams();
  const navigate=useNavigate()
  console.log(cityId);
  const [city, setCity] = useState<city | null>(null);

  useEffect(() => {
    if (cityId) {
      api.getcity(parseInt(cityId)).then((res) => {
        setCity(res);
      });
    }

    console.log(city);
  }, [cityId]);

  const { handleChange, handleBlur, values, errors, touched } = useFormik<{
    cityName: string;
    description: string;
    image: string;
  }>({
    initialValues: {
      cityName: city?.cityName!,
      description: city?.description!,
      image: city?.image!,
    },
    onSubmit: (): void => {},
    validationSchema: Yup.object().shape({
      cityName: Yup.string().min(3).max(20),
      description: Yup.string().min(10).max(250),
      image: Yup.string().min(10).max(250),
    }),
    enableReinitialize: true,
  });
  console.log(values);
  console.log(errors);
  const submitForm = () => {
    api.updateCity({
      id:cityId,
      cityName: values.cityName,
      image: values.image,
      description: values.description,
    }).then(res=>{
      console.log(res)
    
    })
    navigate("/")
  };

  return (
    <div className="mt-5  container">
      <form>
        <div className="row">
          <div className="col-12 col-md-6 offset-3 mt-3 ">
            <label className="form-label w-100 text-start">city name</label>
            <input
              name="cityName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.cityName}
              type="text"
              className="form-control"
            />
            {errors.cityName && touched.cityName && <p>{errors.cityName}</p>}
          </div>
          <div className="col-12 col-md-6 offset-3 mt-3 ">
            <label className="form-label w-100 text-start">description</label>
            <textarea
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.description}
              className="form-control"
            />
            {errors.description && touched.description && (
              <p>{errors.description}</p>
            )}
          </div>
          <div className="col-12 col-md-6 offset-3 mt-3">
            <label className="form-label  w-100 text-start">imageurl</label>
            <input
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.image}
              type="text"
              className="form-control"
            />
            {errors.image && touched.image && <p>{errors.image}</p>}
          </div>
          <div>
            <button
              disabled={
                !!(errors.cityName && touched.cityName) ||
                !!(errors.description && touched.description) ||
                !!(errors.image && touched.image)
              }
              onClick={submitForm}
              className="btn btn-warning w-50 mt-3"
            >
              Edit city
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default City;
