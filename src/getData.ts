export default function (path: String) {
  try {
    return fetch(`/.netlify/functions/${path}`)
      .then(res => res.json())
      .then(res => res.data)
  } catch (err) {
    console.error(err)
  }
}