import axios from 'axios'
const safeJsonStringify = require('safe-json-stringify');

export async function handler(event) {
  const data = await axios(`https://yts.am/api/v2/movie_details.json`, {
    params: event.queryStringParameters
  }).then(res => res.data)

  const { movie } = data.data

  const imdbId = movie.imdb_code.replace('tt', '')

  const subs = await axios(`https://rest.opensubtitles.org/search/imdbid-${imdbId}/sublanguageid-eng`, {
    headers: {
      'User-Agent': 'TemporaryUserAgent'
    }
  }).then(res => res.data)


  movie.subs = subs
    .map(({ ZipDownloadLink, SubFileName, id, SubHash }) => ({ ZipDownloadLink, SubFileName, id, SubHash }))
    .slice(0, 3)

  return {  
    statusCode: 200,
    body: safeJsonStringify(movie)
  }
}
