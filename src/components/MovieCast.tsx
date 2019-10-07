import React from 'react'
import { ICastMember } from '../types/movies'
import styled from '../styled-components';

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 1rem;
`

const CastList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 22rem) {
    grid-template-columns: 1fr 1fr;    
  }
  
  @media (min-width: 30rem) {
    grid-template-columns: 1fr 1fr 1fr;    
  }
  
  @media (min-width: 50rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;    
  }
`

const CastMember = styled.li`
  position: relative;
  flex: 0 0 12.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 1rem;
  border: 1px solid #efefef;
`

const Pic = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: ${props => props.theme.borderRadius.small};
  overflow: hidden;
  margin-bottom: 0.75rem;
  padding-bottom: 150%;
  
  img {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
`

const Name = styled.h4`
  font-size: 1.2rem;
  
  a {
    text-decoration: none;
    color: inherit;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
`

const CharacterName = styled.h4`
  font-size: 1rem;
  font-weight: 200;
`

const MovieCast = ({ members }: { members: ICastMember[] }) => (
  <Wrapper>
    <Title>Cast</Title>
    <CastList>
      {members.map(member => (
        <CastMember key={member.id}>
          <Pic>
            <img
              src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
              alt=""
            />
          </Pic>
          <Name>
            <a href={`https://www.imdb.com/name/${member.imdb_id}`} target="blank" rel="noreferrer">
              {member.name}
            </a>
          </Name>
          <CharacterName>{member.character}</CharacterName>
        </CastMember>
      ))}
    </CastList>
  </Wrapper>
);

export default MovieCast