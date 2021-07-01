import {useEffect, useState} from "react";
import {getUsers} from "../services/API";
import User from "./user/User";
import {Route, Switch} from "react-router-dom";
import './Users.css'
import Posts from "../posts/Posts";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
            // console.log(response.data)
        })
    }, [])
    return (
        <div className={'flex-users'}>
            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
            </div>
            <div>
                <Switch>
                    <Route path={'/users/:id/posts'} component={Posts} />
                </Switch>
            </div>

        </div>
    )
}
