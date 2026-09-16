import { memo, useState } from "react";
import RenderMovieVods from "../movieVods.tsx";
import type { Movie } from "../movieInterfaces";
import useKeyDown from "../../remote/useKeyDown";
import { useNavigate } from "react-router-dom";

type props = {
    similarMovies:Movie[];
}

const RenderMovieInfoSimilar = memo((props:props)=> {

    const navigate = useNavigate()

    const similarMovies:Movie[] = props.similarMovies

    let [isIndex, setIsIndex] = useState<number>(0)

    const movieInfoBack = ():void => {
        navigate('/')
    }

    const movieCardClick = (movie:Movie):void=> {
        setIsIndex(0)
        navigate(`/movie-info/${movie.id}`, {state:{movie_id:movie.id,movies:similarMovies}})
    }

    useKeyDown(
        {
            isActive:true,
            keyNames: {
                ok:():void=> {
                    movieCardClick(similarMovies[isIndex])
                },

                back:():void=> {
                    movieInfoBack()
                },

                left:():void=> {
                    if (isIndex > 0) {
                        setIsIndex(isIndex-=1)
                        console.log("ISINDEX", isIndex);
                    }

                },

                right:():void=> {
                    if (isIndex < similarMovies.length -1) {
                        setIsIndex(isIndex+=1)
                        console.log("ISINDEX", isIndex);
                        
                    }

                }
            }
        }
    )

    return(
        <div className="movie-info-similar">

            <RenderMovieVods movies={similarMovies} isIndex={isIndex} isRowIndex={0} categoryIndex={0} controlActive/>

        </div>
    )
})

export default RenderMovieInfoSimilar