import { memo, useState } from "react"
import type { Category, Movie } from "./movieInterfaces.ts"
import RenderMovieCategoryCard from "./movieCategoryCard.tsx"
import RenderMovieVods from "./movieVods.tsx"
import useKeyDown from "../remote/useKeyDown.ts"
import { useNavigate } from "react-router-dom"

type props = {
    categories:Category[],
}

const RenderMoviePageContent = (props:props)=> {

    const navigate = useNavigate()

    const categories:Category[] = props.categories
    const fixCategories:Category[] = []

    const categoryTop:number = 450

    let [isIndex, setIsIndex] = useState<number>(0)
    let [isRowIndex, setIsRowIndex] = useState<number>(0)


    const movieCardClick = (movie:Movie):void=> {

        navigate(`/movie-info/${movie.id}`, {state:{movie_id:movie.id,movies:fixCategories[isRowIndex].movies}})

    }

    for (let i = 0; i < categories.length; i++) {
        const category:Category = categories[i]
        if (category.movies.length) {
            fixCategories.push(category)
        }
    }

    useKeyDown(
    {
      isActive:true,
      keyNames:{

        ok:():void=> {
            movieCardClick(fixCategories[isRowIndex].movies[isIndex])
        },

        up:():void=> {
            if (isRowIndex > 0) {
                setIsRowIndex(isRowIndex-=1)
                setIsIndex(0)
                console.log("ISROWINDEX",isRowIndex)
            }

        },

        down:():void=> {
            if (isRowIndex < fixCategories.length-1) {
                setIsRowIndex(isRowIndex+=1)
                setIsIndex(0)
                console.log("ISROWINDEX",isRowIndex)
            }
          
        },

        left:():void=> {
            if (isIndex > 0) {
                setIsIndex(isIndex-=1)
                console.log("ISINDEX", isIndex);
            }

        },

        right:():void=> {
            if (isIndex < fixCategories[isRowIndex].movies.length -1) {
                setIsIndex(isIndex+=1)
                console.log("ISINDEX", isIndex);
                
            }

        }
      }
    }
  )


    return(
        <div className="movie_page_content" style={{transform:`translateY(-${isRowIndex * categoryTop}px)`}}>

            {fixCategories.map((category:Category,categoryIndex:number)=> {
                return (

                    <div key={category.id} style={{top:categoryIndex * categoryTop + 'px'}} className="movie-category-content">

                        <RenderMovieCategoryCard category={category}/>
                        
                        <RenderMovieVods movies={category.movies} isIndex={isIndex} isRowIndex={isRowIndex} controlActive categoryIndex={categoryIndex}/>
                        
                    </div>
                )
            })}

        </div>
    )

}

export default memo(RenderMoviePageContent)
