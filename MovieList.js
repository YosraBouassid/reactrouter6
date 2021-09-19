import React, { useState } from "react";
import { moviedata } from "../data";
import AddMovie from "../components/AddMovie";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState(moviedata);

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
  
    setRate(newRating);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <div>
        <Filter
          handleChange={handleChange}
          title={title}
          ratingChanged={ratingChanged}
          rate={rate}
        />
      </div>
      <div>
        <AddMovie handleAdd={handleAdd} />
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rate >=rate
          )
          .map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
