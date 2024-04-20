// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import SearchBar from './Movie/SearchBar';
// import MovieList from './Movie/MovieList';
// import MovieDetail from './Movie/MovieDetail';

// axios.defaults.baseURL = 'https://localhost:7036';

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   text-align: center;
// `;

// const IntroText = styled.h1`
//   font-size: 28px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 16px;
//   margin-bottom: 10px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #3498db;
//   color: #fff;
//   cursor: pointer;
// `;

// const HistorySection = styled.div`
//   margin-top: 20px;

//   h2 {
//     font-size: 18px;
//     margin-bottom: 10px;
//   }

//   ul {
//     list-style-type: none;
//     padding: 0;
//   }

//   li {
//     font-size: 14px;
//     margin-bottom: 5px;
//   }
// `;
// const Loading = () => <p>Loading...</p>;

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const searchMovies = async (title) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`/api/Movie/search/${title}`);
//       setMovies(response.data);
//       setError(null);
//       setIsLoading(false);
//       // Add the search term to history
//       setSearchHistory((prevHistory) => [...prevHistory, title]);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setError('No Movie found.');
//       setIsLoading(false);
//     }
//   };

//   const getMovieDetails = async (imdbId) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`/api/Movie/${imdbId}`);
//       setSelectedMovie(response.data);
//       setError(null);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error getting movie details:', error);
//       setError('An error occurred while getting movie details.');
//       setIsLoading(false);
//     }
//   };

//   const getSearchHistory = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('/api/Movie/history');
//       setSearchHistory(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error getting search history:', error);
//       setError('An error occurred while getting search history.');
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (searchTerm) {
//       searchMovies(searchTerm);
//     }
//   }, [searchTerm]);

//   return (
//     <Container>
//       <IntroText>Explore Your Favorite Movies</IntroText>
//       <SearchBar onSearch={setSearchTerm} />
//       {error && <ErrorText>{error}</ErrorText>}
//       {isLoading && <Loading>Loading...</Loading>}
//       {movies.length > 0 && (
//         <MovieList movies={movies} onMovieClick={(imdbId) => getMovieDetails(imdbId)} />
//       )}
//       {selectedMovie && <MovieDetail movie={selectedMovie} />}
//       <HistorySection>
//         <Button onClick={getSearchHistory}>Fetch Search History</Button>
//         <h2>Search History</h2>
//         <ul>
//           {searchHistory.slice(-5).map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </HistorySection>
//     </Container>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './Movie/SearchBar';
import MovieList from './Movie/MovieList';
import MovieDetail from './Movie/MovieDetail';
import MovieDetailsPage from './Movie/MovieDetailsPage';

axios.defaults.baseURL = 'https://localhost:7036';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const IntroText = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
`;

const HistorySection = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const Loading = () => <p>Loading...</p>;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (title) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/Movie/search/${title}`);
      setMovies(response.data);
      setError(null);
      setIsLoading(false);
      setSearchHistory((prevHistory) => [...prevHistory, title]);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('No Movie found.');
      setIsLoading(false);
    }
  };

  const getMovieDetails = async (imdbId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/Movie/${imdbId}`);
      setSelectedMovie(response.data);
      setError(null);
      setIsLoading(false);
      localStorage.setItem('selectedMovie', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error getting movie details:', error);
      setError('An error occurred while getting movie details.');
      setIsLoading(false);
    }
  };

  const getSearchHistory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/Movie/history');
      setSearchHistory(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error getting search history:', error);
      setError('An error occurred while getting search history.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  return (
    <Router>
      <Container>
        <IntroText>Explore Your Favorite Movies</IntroText>
        <SearchBar onSearch={setSearchTerm} />
        {error && <ErrorText>{error}</ErrorText>}
        {isLoading && <Loading>Loading...</Loading>}
        {movies.length > 0 && (
          <MovieList movies={movies} onMovieClick={(imdbId) => getMovieDetails(imdbId)} />
        )}
        {selectedMovie && <MovieDetail movie={selectedMovie} />}
        <HistorySection>
          <Button onClick={getSearchHistory}>Fetch Search History</Button>
          <h2>Search History</h2>
          <ul>
            {searchHistory.slice(-5).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </HistorySection>
      </Container>
      <Routes>
        <Route path="/movie/:imdbID" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
