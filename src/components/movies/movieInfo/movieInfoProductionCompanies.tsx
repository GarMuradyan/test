import { memo } from "react";
import type { MovieInfo } from "../movieInterfaces";

const RenderMovieInfoProductionCompanies = memo((props:{movie_info:MovieInfo})=> {

    const movieInfo:MovieInfo = props.movie_info

    return(
        <div className="info-production-companies">

            {movieInfo.production_companies.map((companie)=> {
                return (
                    <div key={companie.id} className="production-company">

                        <img src={`https://image.tmdb.org/t/p/w200${companie.logo_path}`}/>

                        <span>{companie.name}</span>

                    </div>
                )
            })}

        </div>
    )

})

export default RenderMovieInfoProductionCompanies