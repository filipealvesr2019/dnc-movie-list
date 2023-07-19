import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1f408109a9d5f7acfd14ec742a0bdeb6';

const withBaseUrl = (path) => `${BASE_URL} ${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"))
    }


   static getMoviesDetails(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

    static SearchMovies(movie){
        return axios(withBaseUrl(`search/movie`) + `&query=${movie}`)
    }
}