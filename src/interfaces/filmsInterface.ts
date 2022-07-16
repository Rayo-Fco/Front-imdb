export interface IFilms {
    items:[
        {
            id:string;
            rank:number;
            title:string;
            fullTitle:string;
            year:number;
            image:string;
            crew:string;
            imDbRating:number;
            imDbRatingCount:number;
        }
    ] | [];
    errorMessage:string;
}
