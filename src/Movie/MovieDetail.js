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

const Loading = styled.p`
  font-size: 16px;
  color: #3498db;
`;

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <Loading>Loading movie details...</Loading>;
  }

  return (
    <MovieDetailContainer>
      <MoviePoster src={movie.Poster} alt={movie.Title} />
      <MovieDetails>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
      </MovieDetails>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
