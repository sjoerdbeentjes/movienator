import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';
import axios from 'axios'
import styled from '../styled-components'
import { IMovieDetail } from '../types/movies'
import MovieDetail from '../components/MovieDetail';
import Spinner from '../components/Spinner';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`

const SpinnerWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Movie = ({ match }: RouteComponentProps) => {
  const [movieDetail, setMovieDetail] = useState<IMovieDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const { id }: { id?: string } = match.params

  console.log(movieDetail)

  useEffect(() => {
    setLoading(true)
    axios('/.netlify/functions/movie', { params: { movie_id: id } })
      .then((json)  => {
        const movie: IMovieDetail = json.data
        setMovieDetail(movie)
        setLoading(false)
      })
  }, [id])

  return (
    <Wrapper>
      {loading && <SpinnerWrapper><Spinner /></SpinnerWrapper>}
      {movieDetail && (
        <MovieDetail movie={movieDetail} />
      )}
    </Wrapper>
  )
}

export default withRouter(Movie);
