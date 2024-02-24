import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Poster = styled.img`
  max-width: 200px;
  margin-right: 20px;
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Ratings = styled.div`
  margin-bottom: 10px;
`;

const RatingItem = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const MovieDetail = ({ movie }) => {
  const { Title, Poster, Plot, Ratings } = movie;

  return (
    <DetailContainer>
      <Poster src={Poster} alt={`${Title} Poster`} />
      <Details>
        <Title>{Title}</Title>
        <Description>{Plot}</Description>
        <Ratings>
          <h3>Ratings:</h3>
          {Ratings &&
            Ratings.map((rating, index) => (
              <RatingItem key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </RatingItem>
            ))}
        </Ratings>
      </Details>
    </DetailContainer>
  );
};

export default MovieDetail;
