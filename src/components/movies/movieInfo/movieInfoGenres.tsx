import { memo } from "react";
import type { MovieInfo } from "../movieInterfaces";

const RenderMovieInfoGenres = memo((props:{movie_info:MovieInfo})=> {

    const movieInfo:MovieInfo = props.movie_info

    return(
        <div className="info-genres-content">

            <h4>Genre:</h4>

            {movieInfo?.genres.map((genre)=> {
                return(
                    <span key={genre.id}>{genre.name},</span>
                )
            })}

        </div>
    )

})

export default RenderMovieInfoGenres