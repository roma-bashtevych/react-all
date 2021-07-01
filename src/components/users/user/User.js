import {NavLink} from "react-router-dom";
import './User.css'

export default function User({item}) {
    return (
        <div>
            <h3 className={'title__user'}> <span>{item.id} - {item.name} </span>
        <span>
                    <NavLink className={'title__user-link'} to={{
                        pathname: '/users/' + item.id + '/posts',
                        state: item
                    }}>posts</NavLink>
        </span>
            </h3>
        </div>
    )
}
