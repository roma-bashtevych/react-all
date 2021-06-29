import User from "./user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../services/API";

export default function Users() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}
            