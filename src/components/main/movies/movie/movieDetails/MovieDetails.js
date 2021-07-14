import {useEffect, useState} from "react";
import {getImage, getMovie} from "../../../../services/API";
import './MovieDetails.css'

export default function MovieDetails(props) {
    let [movie, setMovies] = useState([])
    let {match: {params: {id}}} = props

    useEffect(() => {
        getMovie(id).then(value => setMovies(value.data))
    }, [])

    let [image, setImage] = useState([])
    useEffect(() => {
        getImage(movie.backdrop_path).then(value => setImage(value.config.url))
    })

    return (
        <div className={'movieDetails'}>
            <div className={'movieDetails__inner'}>
                <h1 className={'movieDetails__title'}>{movie.title}</h1>
                <h6>({movie.original_title})</h6>
                <h3 className={'movieDetails__subtitle'}>{movie.tagline}</h3>
                {
                    movie.backdrop_path &&
                    <img src={image} alt={movie.title}/>
                }
                <p className={'movieDetails__status'}>{movie.status}</p>
            </div>
            <div className={'movieDetails__info'}>
                <p className={'movieDetails__description'}>{movie.overview}</p>
                <ul className={'movieDetails__genres'}>
                    {
                        movie.genres && movie.genres.map(value => <li key={value.id}>{value.name}</li>)
                    }
                </ul>
                <p className={'movieDetails__bud'}>Бюджет: <span>{movie.budget}$</span></p></div>
        </div>
    )
}
