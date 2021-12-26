import { withFormik, FormikProps } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { setTimeout } from "timers/promises";
import * as Yup from "yup";
import * as api from "../../api/index"

interface FormValues {
  cityName: string;
  description: string;
  imageURL:string
}

interface OtherProps {
 
}

interface MyFormProps {
  initialcityName?: string;
  initialdescription?: string;
  initialimageURL?:string
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
const navigate= useNavigate()
 
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
 
  } = props;

  const submitHandler=()=>{
 
  }

  return (
    <>
      <div className="row mt-5">
    
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            .
            <div>
              <label className="form-label">cityName</label>
              <input
                className="form-control"
                type="cityName"
                name="cityName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cityName}
              />
              {errors.cityName && touched.cityName ?<p className="text-danger">{errors.cityName}</p>:null}
            </div>
            <label className="form-label">comment</label>
            <input
              className="form-control"
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
             {errors.description && touched.description ?<p className="text-danger">{errors.description}</p>:null}
              <label className="form-label">imageURL</label>
            <input
              className="form-control"
              type="text"
              name="imageURL"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.imageURL}
            />
            <button
              type="submit"
              className="btn btn-warning w-100 mt-3"
              onClick={submitHandler}
              disabled={
                isSubmitting ||
                !!(errors.cityName && touched.cityName) ||
                !!(errors.description && touched.description)||!!(errors.imageURL && touched.imageURL)
              }
            >
              addcity
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const CreateCity = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    cityName: "",
    description: "",
    imageURL:""
  }),

  validationSchema: Yup.object().shape({
    cityName: Yup.string().max(50).min(2).required("cityName is required"),
    description: Yup.string().max(200).required("description is required"),
    imageURL: Yup.string().required("imageURL is requied"),

  }),

  handleSubmit(
    { cityName, description,imageURL }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(cityName,description,imageURL);
    const newCity={id:Math.random()*100,cityName,description,image:imageURL}
    api.createCity(newCity).then(res=>{
      console.log(res)
    
     
    })
  },
})(InnerForm);

export default CreateCity;
