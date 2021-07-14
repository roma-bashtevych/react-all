import axios from 'axios';


const APIKEY = '1d768d677e42c8959bc677a5d06c619a'
const LANGUAGE = '&language=uk-UA'
let axiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
});

let getMovies = (pageNumber) =>	axiosInstance.get('discover/movie?api_key=' + APIKEY + LANGUAGE + '&page=' + pageNumber);
let getGenres = () => axiosInstance.get('genre/movie/list?api_key=' + APIKEY + LANGUAGE)
let getMovie = (movieId) => axiosInstance.get('movie/' + movieId + '?api_key=' + APIKEY + LANGUAGE)

let getImage = (nameImage) => axiosInstance.get('https://image.tmdb.org/t/p/w500/' + nameImage)


export {getMovies, getGenres, getMovie, getImage}

