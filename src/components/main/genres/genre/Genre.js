import {BrowserRouter as Router, NavLink} from "react-router-dom";
import './Genre.css'

export default function Genre({genres}) {
    return (
        <div>
           <Router>
               <NavLink className={'genres-item'} to={'/' + genres.name}> {genres.name}</NavLink>
           </Router>
        </div>
    )
}
