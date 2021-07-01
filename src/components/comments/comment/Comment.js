import {NavLink} from "react-router-dom";
import './Comment.css'

export default function Comment({item}) {
    return (
        <div className={'comment-flex'}>
            <h5 className={'comment-title'}>{item.id} - {item.name}</h5>
            <NavLink className={'title__comment-link'} to={{
                pathname: '/comments/' + item.id,
                state: item
            }}>details</NavLink>
        </div>
    )
}
            