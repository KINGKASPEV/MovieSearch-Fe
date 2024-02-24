import React from 'react';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          onClick={() => onMovieClick(movie.imdbID)}
        >
          <img src={movie.poster} alt={movie.title} style={{ width: '100%' }} />
          <h3>{movie.title}</h3>
        </MovieCard>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
