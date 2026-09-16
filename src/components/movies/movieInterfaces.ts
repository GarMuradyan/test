export interface Category {
    id:number
    name:String,
    movies:Movie[]
}

export interface Movie {

    adult:boolean,
    genre_ids:number[],
    id:number,
    original_language:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    softcore:boolean,
    title:string    

}

export interface MovieInfo {

    adult:boolean,
    genres:[{id:number,name:string}]
    production_companies:[{id:number,name:string,logo_path:string,origin_country:string}]
    backdrop_path:string,
    budget:number,
    runtime:number,
    id:number,
    imdb_id:string,
    original_language:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    softcore:boolean,
    status:string,
    title:string  

}
