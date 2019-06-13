import axios from 'axios'
const safeJsonStringify = require('safe-json-stringify');

export async function handler(event) {
  try {
    const data = await axios(`https://yts.am/api/v2/movie_details.json`, {
      params: event.queryStringParameters
    }).then(res => res.data)
  
    const { movie } = data.data
  
    const imdbId = movie.imdb_code.replace('tt', '')
  
    const [subs, credits] = await Promise.all([
      axios(`https://rest.opensubtitles.org/search/imdbid-${imdbId}/sublanguageid-eng`, {
        headers: {
          'User-Agent': process.env.OPENSUBTITLES_USER_AGENT
        }
      }).then(res => res.data),
      axios(`https://api.themoviedb.org/3/movie/${movie.imdb_code}/credits?api_key=${process.env.TMDB_API_KEY}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    ])

    movie.subs = subs ? subs
      .map(({ ZipDownloadLink, SubFileName, id, SubHash }) => ({ ZipDownloadLink, SubFileName, id, SubHash }))
      .slice(0, 3) : []

    movie.cast = credits.cast.slice(0, 10)
  
    return {
      statusCode: 200,
      body: safeJsonStringify(movie)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}
