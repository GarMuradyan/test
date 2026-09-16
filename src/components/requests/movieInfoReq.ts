import type { MovieInfo } from "../movies/movieInterfaces"
import reqTs from "./req"
import { TMDB_ENDPOINTS } from "./tmdbEndPoints"

async function getMovieInfoData(props:{movie_id:number}): Promise<MovieInfo> {

    const movieInfoUrl = `${TMDB_ENDPOINTS.MOVIE_INFO}/${props.movie_id}`

    const movieInfoData = await reqTs(movieInfoUrl,"GET")

    const movieInfo:MovieInfo = movieInfoData

    
    return movieInfo

}

export default getMovieInfoData