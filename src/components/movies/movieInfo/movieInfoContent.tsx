import { memo } from "react";
import type { MovieInfo } from "../movieInterfaces";

const RenderMovieInfoContent = memo((props:{movie_info:MovieInfo})=> {
    
    const movieInfo:MovieInfo = props.movie_info  
    
    const year = movieInfo.release_date.substring(0, 4);

    const time = formatRuntime(movieInfo.runtime)

    function formatRuntime(runtime: number): string {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        return `${hours}h ${minutes}m`;
    }


    return(
        <div className="info-content">

            <span className="info-content-date">{year}</span>

            <span className="info-content-runtime">{time}</span>

        </div>
    )

})

export default RenderMovieInfoContent