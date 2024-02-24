import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        setError('Please enter a search term.');
        return;
      }

      await onSearch(searchTerm);
      setError(''); 
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('An error occurred while searching for movies.');
    }
  };

  return (
    <div>
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
    {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default SearchBar;
