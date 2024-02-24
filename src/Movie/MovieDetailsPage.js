import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const MovieDetailsPage = ({ movie }) => {
  return (
    <Container>
      <MoviePoster src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      {/* Add more details as needed */}
      <p>IMDb Rating: {movie.ImdbRating}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      {/* Add other relevant information */}
    </Container>
  );
};

export default MovieDetailsPage;
