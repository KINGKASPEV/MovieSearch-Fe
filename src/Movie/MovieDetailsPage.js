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
