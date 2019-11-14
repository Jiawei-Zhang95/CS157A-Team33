import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieInfo.css";

const MovieInfo = props => {
  return (
    <div
      className="rmdb-movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`
          : "#000"
      }}
    >
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={
              props.movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{props.movie.title}</h1>
          <h3>PLOT</h3>
          <p>{props.movie.overview}</p>
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map((element, i) => {
            return (
              <p key={i} className="rmdb-director">
                {element.name}
              </p>
            );
          })}
          <h3>Release Date</h3>
          <p>{props.movie.release_date}</p>
          <button type="button" class="btn btn-default">
            Add To Movie List
          </button>
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};
export default MovieInfo;
