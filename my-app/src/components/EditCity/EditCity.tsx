import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

interface FormValues {
  cityName: string;
  description: string;
}

interface OtherProps {
    cityName?: any;
}

interface MyFormProps {
  initialcityName?: string;
  initialdescription?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
 
  } = props;

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
            </div>
            <label className="form-label">description</label>
            <input
              className="form-control"
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <button
              type="submit"
              className="btn btn-warning w-100 mt-3"
              disabled={
                isSubmitting ||
                !!(errors.cityName && touched.cityName) ||
                !!(errors.description && touched.description)
              }
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const CreateCity = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    cityName: props.initialcityName || "adib",
    description: props.initialdescription || "jjj",
  }),

  validationSchema: Yup.object().shape({
    cityName: Yup.string().required("cityName is required"),
    description: Yup.string().required("description is required"),
  }),

  handleSubmit(
    { cityName, description }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(cityName, description);
  },
})(InnerForm);

export default CreateCity;
