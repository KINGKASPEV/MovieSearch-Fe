// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   text-align: center;
// `;

// const MoviePoster = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const MovieDetailsPage = ({ movie }) => {
//   return (
//     <Container>
//       <MoviePoster src={movie.Poster} alt={movie.Title} />
//       <h2>{movie.Title}</h2>
//       <p>{movie.Plot}</p>
//       {/* Add more details as needed */}
//       <p>IMDb Rating: {movie.ImdbRating}</p>
//       <p>Genre: {movie.Genre}</p>
//       <p>Director: {movie.Director}</p>
//       {/* Add other relevant information */}
//     </Container>
//   );
// };

// export default MovieDetailsPage;

// // MovieDetailsPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   text-align: center;
// `;

// const MoviePoster = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const MovieDetailsPage = () => {
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const { imdbId } = useParams();

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/Movie/${imdbId}`);
//         setMovie(response.data);
//         setError(null);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error getting movie details:', error);
//         setError('An error occurred while getting movie details.');
//         setIsLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [imdbId]);

//   if (isLoading) return <Container>Loading...</Container>;

//   if (error) return <Container>{error}</Container>;

//   if (!movie) return <Container>No movie found.</Container>;

//   return (
//     <Container>
//       <MoviePoster src={movie.Poster} alt={movie.Title} />
//       <h2>{movie.Title}</h2>
//       <p>{movie.Plot}</p>
//       <p>IMDb Rating: {movie.ImdbRating}</p>
//       <p>Genre: {movie.Genre}</p>
//       <p>Director: {movie.Director}</p>
//       {/* Add other relevant information */}
//     </Container>
//   );
// };

// export default MovieDetailsPage;


import React, { useState, useEffect } from 'react';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve movie details from local storage
    const storedMovie = localStorage.getItem('selectedMovie');
    if (storedMovie) {
      try {
        const parsedMovie = JSON.parse(storedMovie);
        setMovie(parsedMovie);
      } catch (error) {
        setError('Error parsing movie data.');
      }
    } else {
      setError('Movie data not found.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.plot}</p>
      <p>{movie.year}</p>
      <p>{movie.rated}</p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetailPage;
