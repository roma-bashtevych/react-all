import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../services/API";
import Movie from "./movie/Movie";
import './Movies.css'
import ReactPaginate from 'react-paginate'

export default function Movies() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.moviesReduser)
    function handlePageClick(data) {
       let pageNumber = (1 + data.selected)
        getMovies(pageNumber).then(value =>
            dispatch({
                type: 'SHOW_MOVIES',
                payload: value.data
            }))
         }

    return (
        <div className={'container'}>
            <div className={'movies-items'}>
                {movies.loading ? "Loading" : movies.movies.map(movie =>
                    <Movie key={movie.id} movie={movie}/>
                )}
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={500}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    onPageChange={handlePageClick}
                    initialPage={0}
                />
            </div>
        </div>
    )
}
