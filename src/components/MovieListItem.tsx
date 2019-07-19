import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from '../styled-components'
import { IMovie } from '../types/movies'

interface IMovieListProps {
  movie: IMovie
  isHighlighted: boolean
}

const ListItem = styled("li")<{ isHighlighted: boolean }>`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  grid-gap: 1rem;
  grid-template-areas:
                'image heading'
                'image meta';

  ${props => props.isHighlighted && (
    css`
      background-color: ${props.theme.colors.highlight};
    `
  )}

  img {
    grid-area: image;
    width: 3rem;
    height: 4.5rem;
    background-color: ${props => props.theme.colors.placeholder};
  }

  p {
    grid-area: meta;
    height: 100%;
  }

  a { 
    color: ${props => props.theme.colors.text};
    text-decoration: none;

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

const MovieTitle = styled(Link)`
  grid-area: heading;

  .year {
    font-weight: lighter;
  }
`

const MovieList = ({ movie, isHighlighted }: IMovieListProps) => (
  <ListItem key={movie.id} isHighlighted={isHighlighted}>
    <img src={`https://yst.am/${movie.medium_cover_image}`} alt=""/>
    <MovieTitle to={`/movie/${movie.id}`}>
      <h3>{movie.title} <span className="year">({movie.year})</span></h3>
    </MovieTitle>
    <p>{movie.rating}</p>
  </ListItem>
)

export default MovieList