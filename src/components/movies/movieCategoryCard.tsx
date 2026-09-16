import  { memo } from "react"
import type { Category } from "./movieInterfaces.ts"

type props = {
    category:Category,

}

const RenderMovieCategoryCard = (props:props)=> {

    const category:Category = props.category

    return (
        <div className="category-card">
            <h1>{category.name}</h1>
            <span>{category.movies.length} Movies</span>
        </div>
    )
}

export default memo(RenderMovieCategoryCard)