import React from "react";
import { Link } from "react-router-dom";

const CreateListButton = () => {
  return (
    <React.Fragment>
      <Link to="/createMovieList" className="btn btn-lg btn-info">
        Create a Movie List
      </Link>
    </React.Fragment>
  );
};
export default CreateListButton;
