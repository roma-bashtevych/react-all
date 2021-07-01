import {NavLink} from "react-router-dom";
import './User.css'

export default function User({item}) {
    return (
        <div>
            <h3 className={'title__user'}> {item.id} - {item.name}
                <NavLink className={'title__user-link'} to={{
                    pathname: '/users/' + item.id,
                    state: item
                }}>details</NavLink>
            </h3>
        </div>
    )
}
