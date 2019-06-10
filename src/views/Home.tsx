import React from 'react';
import SearchMovies from '../components/SearchMovies'
import styled from '../styled-components';

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 10rem;
`

const Title = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Staatliches', sans-serif;
  margin-bottom: 2rem;

  @media (min-width: 30rem) {
    font-size: 6rem;
  }
`

const Home = () => (
  <Wrapper>
    <Title>Movienator</Title>
    <SearchMovies />
  </Wrapper>
)

export default Home;
