import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Movie/SearchBar';
import MovieList from './Movie/MovieList';
import MovieDetail from './Movie/MovieDetail';

// Set the base URL for your backend
axios.defaults.baseURL = 'https://localhost:7036';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`/api/Movie/search/${title}`);
      setMovies(response.data);
      setError(null);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('An error occurred while searching for movies.');
    }
  };

  const getMovieDetails = async (imdbId) => {
    try {
      const response = await axios.get(`/api/Movie/${imdbId}`);
      setSelectedMovie(response.data);
      setError(null);
    } catch (error) {
      console.error('Error getting movie details:', error);
      setError('An error occurred while getting movie details.');
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
};

export default App;
