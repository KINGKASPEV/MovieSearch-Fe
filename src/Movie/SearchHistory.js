import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  margin-top: 20px;
`;

const HistoryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const HistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const SearchHistory = ({ history }) => {
  return (
    <HistoryContainer>
      <HistoryTitle>Search History:</HistoryTitle>
      <HistoryList>
        {history.map((item, index) => (
          <HistoryItem key={index}>{item}</HistoryItem>
        ))}
      </HistoryList>
    </HistoryContainer>
  );
};

export default SearchHistory;
