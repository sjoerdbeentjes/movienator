import { useState } from 'react'
import { IMovie } from '../types/movies'
import getData from '../getData'

export default function (): [IMovie[], boolean, any] {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [loading, setLoading] = useState(false)

  async function search(query: String) {
    setLoading(true)
    if (query.length > 2) {
      const res = await getData(`movies?query_term=${query}&limit=10`)
      setMovies(res.movies)
    } else {
      setMovies([])
    }
    setLoading(false)
  }

  return [movies, loading, search] 
}