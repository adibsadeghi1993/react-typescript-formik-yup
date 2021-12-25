import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const EditCity = (props: Props) => {
  const { cityId } = useParams();
  console.log(cityId);
  return (
    <div className="mt-3 row">
      <div className="cols-12 cols-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <form>
          <div className="mt-3">
            <label className="form-label text-start w-100" htmlFor="cityName">
              CityName
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mt-3">
            <label className="form-label text-start w-100" htmlFor="cityName">
              ImageUrl
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mt-3">
            <label className="form-label text-start w-100">description</label>
            <textarea
              className="form-control text-start"
              id="exampleFormControlTextarea1"
            ></textarea>
          </div>
          <div className="mt-3">
              <button className="btn btn-warning w-100">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCity;
