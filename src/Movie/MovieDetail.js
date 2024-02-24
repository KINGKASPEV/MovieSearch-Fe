import React from 'react';
import styled from 'styled-components';

const MovieDetailContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MoviePoster = styled.img`
  max-width: 300px;
`;

const MovieDetails = styled.div`
  flex: 1;
`;

const MovieDetail = ({ movie }) => {
  return (
    <MovieDetailContainer>
      <MoviePoster src={movie.poster} alt={movie.title} />
      <MovieDetails>
        <h2>{movie.title}</h2>
        <p>{movie.plot}</p>
        <p>IMDb Rating: {movie.imdbRating}</p>
      </MovieDetails>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
