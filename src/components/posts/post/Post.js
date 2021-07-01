import {NavLink} from "react-router-dom";
import './Post.css'

export default function Post({item}) {

    return (
        <div className={'posts-flex'}>
            <h5>{item.id} - {item.title}</h5>
            <NavLink className={'title__post-link'}  to={{
            pathname: '/posts/' + item.id,
            state: item
        }}>details</NavLink>
        </div>
    )
}
