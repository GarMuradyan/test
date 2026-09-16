import  { memo } from "react";
import type { Movie } from "./movieInterfaces.ts";
import RenderMovieVodsCard from "./movieVodsCard.tsx";

type props = {
  controlActive:boolean
  isIndex:number,
  isRowIndex:number,
  categoryIndex:number,
  movies:Movie[],
}

const RenderMovieVods = memo((props:props) => {

  const movieLeft: number = 210

  const movies:Movie[] = props.movies

  return (
    <div className="movie-vods-content">

      <div className="movie-vods-content-list" style={props.isRowIndex == props.categoryIndex ? {transform:`translateX(-${props.isIndex * movieLeft}px)`} : {}}>

        {movies.map((movie:Movie,movieIndex:number)=> {

          const isActive:boolean = props.isIndex == movieIndex && props.categoryIndex == props.isRowIndex && true
          return(
            <RenderMovieVodsCard key={movie.id} movie={movie} isActive={isActive} movieIndex={movieIndex} movieLeft={movieLeft}/>
          )
        })}

      </div>

    </div>
  );
});

export default RenderMovieVods;
