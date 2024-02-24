import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './Movie/SearchBar';
import MovieList from './Movie/MovieList';
import MovieDetail from './Movie/MovieDetail';

// Set the base URL for your backend
axios.defaults.baseURL = 'https://localhost:7036';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
`;

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
    <Container>
      <SearchBar onSearch={setSearchTerm} />
      {error && <ErrorText>{error}</ErrorText>}
      {movies.length > 0 && <MovieList movies={movies} onMovieClick={getMovieDetails} />}
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </Container>
  );
};

export default App;
