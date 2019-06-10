export interface IMovie {
  background_image: string
  background_image_original: string
  date_uploaded: string
  date_uploaded_unix: number
  description_full: string
  genres: [string]
  id: number
  imdb_code: string
  language: string
  large_cover_image: string
  medium_cover_image: string
  mpa_rating: string
  rating: number
  runtime: number
  slug: string
  small_cover_image: string
  state: string
  summary: string
  synopsis: string
  title: string
  title_english: string
  title_long: string
  torrents: [{
    date_uploaded: string
    date_uploaded_unix: number
    hash: string
    peers: number
    quality: string
    seeds: number
    size: string
    size_bytes: number
    type: string
    url: string
  }]
  url: string
  year: number
  yt_trailer_code: string
}

export interface IMovieDetail {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  download_count: number;
  like_count: number;
  description_intro: string;
  description_full: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  torrents: Torrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
  subs: Sub[]
}

interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

interface Sub {
  ZipDownloadLink: string
  SubFileName: string
  SubHash: string
}