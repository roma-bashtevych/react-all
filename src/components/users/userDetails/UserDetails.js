import {useEffect, useState} from "react";
import {getUser} from "../../services/API";
import {
    useLocation
} from "react-router-dom";
import './UsersDetails.css'


export default function UserDetails(props) {
    // let {item} = props
    // console.log(props)

    let [user, setUser] = useState({})
    let {match: {params: {id}}} = props;
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}))
    }, [id])



    return (
        <div className={'card-users'}>
            <h4 className={'title__us'}>{user.id} - {user.name}</h4>
            <h5 className={'subtitle__us'}>username --- {user.username}</h5>
            <div>email: <a href="malito">{user.email}</a></div>
            <div>Phone number <a href="#">{user.phone}</a></div>
            <div>
                <p>Address:</p>
                <div>city: {user.address && <span>{user.address.city}</span>}</div>
                <div>street: {user.address && <span>{user.address.street}</span>}</div>
            </div>
        </div>
    )
}
