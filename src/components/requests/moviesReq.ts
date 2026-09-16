import type { Category, Movie } from "../movies/movieInterfaces"
import reqTs from "./req"
import { TMDB_ENDPOINTS } from "./tmdbEndPoints"

async function getCategories(): Promise<Category[]> {

    const categoriesData = await reqTs(TMDB_ENDPOINTS.URL + TMDB_ENDPOINTS.GENRES, "GET")
    
    const categories:Category[] = []

    for (let i = 0; i < categoriesData.genres.length; i++) {
        
        const category:Category = categoriesData.genres[i];

        categories.push(category)
        
    }

    return categories

}

async function getMovies(): Promise<Movie[]> {

    const moviesData = await reqTs(TMDB_ENDPOINTS.URL + TMDB_ENDPOINTS.POPULAR, "GET")
    const movies:Movie[] = []

    for (let i = 0; i < moviesData.results.length; i++) {

        const movie:Movie = moviesData.results[i];
        movies.push(movie)
        
    }

    return movies
}



async function getCategoriesAndMovies():Promise<Category[]> {

    const vods:Record<number,Category> = {};

    const categories:Category[] = await getCategories()

    const movies:Movie[] = await getMovies()


    for (let i = 0; i < categories.length; i++) {

        const category:Category = categories[i]

        vods[category.id] = {id:category.id, name:category.name,movies:[]}

    }

    for (let i = 0; i < movies.length; i++) {

        const movie:Movie = movies[i];

        movie.genre_ids.forEach((id:number)=> {
            if (vods[id]) {
                vods[id].movies.push(movie)
            }
        })
        
    }

    const categoriesAndMovies:Category[] = Object.values(vods)

    return categoriesAndMovies


}

export default getCategoriesAndMovies