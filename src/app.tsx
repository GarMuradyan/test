import { Route, Routes } from "react-router-dom"
import RenderMoviePage from "./components/movies/moviePage.tsx"
import RenderMovieInfoPage from "./components/movies/movieInfo/movieInfoPage.tsx"

const App = ()=> {

    return(
        <Routes>
            <Route path="/" element={<RenderMoviePage/>}/>
            <Route path="movie-info/:id" element={<RenderMovieInfoPage/>}/>
        </Routes>
    )

}

export default App