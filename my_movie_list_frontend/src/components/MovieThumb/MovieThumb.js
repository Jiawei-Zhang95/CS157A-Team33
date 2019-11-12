import React from "react";
import "./MovieThumb.css";

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      <img src={props.image} alt="moviethumb"></img>
    </div>
  );
};
export default MovieThumb;
