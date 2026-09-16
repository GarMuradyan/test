export const TMDB_ENDPOINTS ={
  URL:'https://api.themoviedb.org/3',  
  POPULAR: "/movie/popular",
  TOP_RATED:"/movie/top_rated",
  UPCOMING:"/movie/upcoming",
  NOW_PLAYING:"/movie/now_playing",
  GENRES:"/genre/movie/list",
  SEARCH:"/search/movie",
  MOVIE_INFO:'https://api.themoviedb.org/3/movie',
  IMG_URL:"https://image.tmdb.org/t/p/w500"
}as const
