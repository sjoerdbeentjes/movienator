import React from 'react'
import debounce from 'lodash/debounce'
import Downshift from 'downshift'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styled, { css } from '../styled-components'
import useMovieSearch from '../hooks/useMovieSearch'
import MovieListItem from './MovieListItem'
const Search = require('react-feather/dist/icons/search').default;
const Loader = require('react-feather/dist/icons/loader').default;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  position: relative;

  > div {
    width: 100%;
  }

  input {
    display: block;
    padding: 1.25rem;
    font-size: 1.75rem;
    border: 1px solid ${props => props.theme.colors.border};
    width: 100%;
    border-radius: ${props => props.theme.borderRadius.default};
    color: ${props => props.theme.colors.text};
    font-weight: lighter;
    background-color: rgba(255, 255, 255, 0.05);
    
    &.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    
    &:focus {
      outline: none;
    }
  }
`

const SearchIconWrapper = css`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: none;

  svg {
    height: 100%;
    width: 100%;
    stroke: ${props => props.theme.colors.border};
  }
`

const SearchButton = styled.button`
  ${SearchIconWrapper}
`


const LoadingIndicator = styled.div`
  ${SearchIconWrapper}

  svg {
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const MovieList = styled.ul`
  list-style: none;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  max-height: 35vh;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.colors.border};
  border-top: none;
  border-bottom-left-radius: ${props => props.theme.borderRadius.default};
  border-bottom-right-radius: ${props => props.theme.borderRadius.default};
`

function stateReducer(state: any, changes: any) {
  switch (changes.type) {
      case Downshift.stateChangeTypes.mouseUp:
          return {};
      default:
          return changes;
  }
}

const SearchMovies = ({ history }: RouteComponentProps) => {
  const [movies, loading, search] = useMovieSearch()

  const searchMovies = debounce(search, 300)

  return (
    <SearchForm onSubmit={e => e.preventDefault()}>
      <Downshift
        onChange={movie => history.push(`/movie/${movie.id}`)}
        itemToString={item => (item ? item.value : '')}
        stateReducer={stateReducer}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
            <div>
              <label
                {...getLabelProps({
                  className: 'sr-only'
                })}
              >Enter a fruit</label>
              <input
                {...getInputProps({
                  onChange(e: React.ChangeEvent<HTMLInputElement>) {
                    e.persist()
                    searchMovies(e.target.value)
                  },
                  onBlur(e: React.ChangeEvent<HTMLInputElement>) {
                    e.preventDefault()
                  },
                  className: movies && movies.length ? 'open' : ''
                })}
              />
              {loading 
                ? <LoadingIndicator><Loader /></LoadingIndicator> 
                : <SearchButton><Search /></SearchButton>}
              {isOpen && movies && movies.length ?
                <MovieList {...getMenuProps()}>
                    {movies.map((movie, index) => (
                      <MovieListItem
                        {...getItemProps({
                          key: movie.id,
                          index,
                          item: movie
                        })}
                        isHighlighted={highlightedIndex === index}
                        movie={movie}
                      />
                    ))}
                </MovieList>
              : null}
            </div>
          )}
      </Downshift>
    </SearchForm>
  )
}

export default withRouter(SearchMovies)