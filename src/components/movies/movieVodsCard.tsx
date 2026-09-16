import { memo } from "react";
import type { Movie } from "./movieInterfaces.ts";
import { TMDB_ENDPOINTS } from "../requests/tmdbEndPoints.ts";

type props = {
    movieLeft:number
    movieIndex:number
    movie:Movie,
    isActive:boolean,
}

const RenderMovieVodsCard = memo((props:props)=> {

    const movie:Movie = props.movie

    const movieImageUrl:string = TMDB_ENDPOINTS.IMG_URL + movie.poster_path

    return(
        <div style={{left:props.movieIndex * props.movieLeft + 'px'}} className={props.isActive ? "movie-vods-card active" : "movie-vods-card"}>

            <img src={movieImageUrl}/>

            <div className="movie-vods-card-title">

                <span>{movie.title}</span>

            </div>

        </div>
    )



})

export default RenderMovieVodsCard