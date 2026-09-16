import { memo, useEffect, useState } from "react"
import type  { Category } from "./movieInterfaces.ts"
import getCategoriesAndMovies from "../requests/moviesReq.ts"
import RenderMoviePageContent from "./moviePageContent.tsx"
import "../scss/moviePage.scss"

const RenderMoviePage = ()=> {

    const [movies,set_movies] = useState<Category[]>([])

    const getMovies = async ():Promise<void> => {
        
        const movies:Category[] = await getCategoriesAndMovies()

        set_movies(movies)

    }

    useEffect(()=> {
        getMovies()
    },[])

    return (
        <div className="movie_page">
            
            <RenderMoviePageContent categories={movies}/>

        </div>
    )
    
}


export default memo(RenderMoviePage)