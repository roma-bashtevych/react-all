import './Movie.css'
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating'
import {getImage} from "../../../services/API";

export default function Movie({movie}) {
    const onChange = (value) => {
        console.log(movie.vote_average)
    };

    let [image, setImage] = useState([])
    useEffect(() => {
        getImage(movie.poster_path).then(value =>
            setImage(value.config.url)
        )
    }, [])

    return (
        <NavLink className={'movie-link'} to={'/movies/' + movie.id}>
            <div className="movies-item">
                <img className={'movies-img'} src={image} alt={movie.title}/>
                <div className={'movies-content'}>
                    <h1 className={'movies-title'}>{movie.title}</h1>
                </div>
                <div className={'movies-info'}>
                    <p className={'movies-date'}>Дата релізу: {movie.release_date}</p>
                    <ReactStarsRating className={'stars-rating'}
                                      onChange={onChange}
                                      isHalf={true}
                                      value={movie.vote_average / 2}/>
                </div>
            </div>
        </NavLink>
    )
}

