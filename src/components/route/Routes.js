import {Route} from "react-router-dom";
import Movies from "../main/movies/Movies";
import Genres from "../main/genres/Genres";
import MovieDetails from "../main/movies/movie/movieDetails/MovieDetails";
import Home from "../main/home/Home";

export default function Routes() {
    return (
        <div>
            <Route path={'/'} exact component={Home}/>
            <Route exact path={'/movies'} component={Movies}/>
            <Route path={'/genres'} component={Genres}/>
            <Route path={'/movies/:id'} component={MovieDetails}/>
        </div>
    )
}
