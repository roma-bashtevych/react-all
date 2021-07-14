import { useEffect } from "react";
import { getGenres } from "../../services/API";
import { useDispatch, useSelector } from "react-redux";
import Genre from "./genre/Genre";
import './Genres.css'
import {showGenres} from "../../redux/actionCreator";

export default function Genres() {
    const dispath = useDispatch()
    const genres = useSelector((state => state.gengersReducer))
    useEffect(() => {
        getGenres().then(value =>
            dispath(showGenres(value.data))
        )
    }, [])

    return (
        <div  className={'genres-list'}>
            {
               genres.loading? "Loading": genres.genres.map(value => <Genre key={value.id} genres={value}/>)
            }
        </div>
    )
}
            