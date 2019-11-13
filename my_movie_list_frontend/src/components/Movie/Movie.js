import React, { Component } from "react";
import { API_URL, API_KEY } from "../../config";
import FourColGrid from "../FourColGrid/FourColGrid";
import Navigation from "../Navigation/Navigation";
import MovieInfo from "../MovieInfo/MovieInfo";
import Spinner from "../Spinner/Spinner";
import "./Movie.css";

class Movie extends Component {
  state = {
    movie: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    //Fetch the movie
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            //.. then fetch actors in the setState callback function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(result => result.json())
              .then(result => {
                const directors = result.crew.filter(
                  member => member.job === "Director"
                );

                this.setState({
                  actors: result.cast,
                  directors
                });
              });
          });
        }
      });
  };

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
          </div>
        ) : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
