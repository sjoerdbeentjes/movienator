const axios = require('axios')

exports.handler = async function (event) {
  const movies = await axios(`https://yst.am/api/v2/list_movies.json`, {
    params: event.queryStringParameters
  }).then(res => res.data)


  return {
    statusCode: 200,
    body: JSON.stringify(movies)
  }
}
