import { memo, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getMovieInfoData from "../../requests/movieInfoReq.ts";
import type { Movie, MovieInfo } from "../movieInterfaces.ts";
import { TMDB_ENDPOINTS } from "../../requests/tmdbEndPoints.ts";
import "../../scss/movieInfoPage.scss"
import "../../scss/moviePage.scss"
import RenderMovieInfoContent from "./movieInfoContent.tsx";
import RenderMovieInfoGenres from "./movieInfoGenres.tsx";
import RenderMovieInfoProductionCompanies from "./movieInfoProductionCompanies.tsx";
import RenderMovieInfoSimilar from "./movieInfoSimilar.tsx";

const RenderMovieInfoPage = memo(()=> {

    const navigate = useNavigate()
    const location = useLocation()
    const infoPosterRef = useRef<HTMLDivElement>(null)
    const [movieInfo,setMovieInfo] = useState<MovieInfo>()

    const movieId:number = location.state.movie_id
    const similarMovies:Movie[] = location.state.movies   
    const backgroundImage:string = TMDB_ENDPOINTS.IMG_URL + movieInfo?.backdrop_path

    const setOpacityInImage = ():void=> {

        setTimeout(() => {
            if (infoPosterRef.current) {
                infoPosterRef.current.style.opacity = '1'
            }
        }, 300);

    }
    

    const getMovieInfo = async():Promise<void>=> {

        const movieInfoData:MovieInfo = await getMovieInfoData({movie_id:movieId})

        setMovieInfo(movieInfoData)

        setOpacityInImage()
        
    }

    useEffect(()=> {
        getMovieInfo()
    },[movieId])


    return(

        <div className="movie-info-page">
            <div className="movie-info-gradient"></div>
            {movieInfo? <div className="movie-info-content-box">
                <h1>{movieInfo.title}</h1>
                <RenderMovieInfoContent movie_info={movieInfo}/>
                <RenderMovieInfoProductionCompanies movie_info={movieInfo}/>
                <div className="content-overview">
                    <p>{movieInfo.overview}</p>
                </div>
                <RenderMovieInfoGenres movie_info={movieInfo}/>
            </div>: <></>}
            {movieInfo? <RenderMovieInfoSimilar similarMovies={similarMovies}/>: false}
            <div ref={infoPosterRef} className="movie-info-poster" style={{backgroundImage:`url(${backgroundImage})`}}></div>
        </div>
    )

})

export default RenderMovieInfoPage