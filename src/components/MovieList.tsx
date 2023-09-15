import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

interface Movie {
  Title: string;
  Image: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.Title} image={movie.Image} />
      ))}
    </div>
  );
};

export default MovieList;
