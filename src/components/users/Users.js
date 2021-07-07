import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getUsers} from "../services/API";
import User from "./user/User";

export default function Users() {
    const dispath = useDispatch()
    const users = useSelector((state) => state.users)

    useEffect(() => {
        getUsers().then(value => dispath({
            type: 'SET_USERS',
            payload: [...value.data]
        }))
    }, [])

    return (
        <div>
            {users.map(value=> <User key={value.id} item={value}/>)}
        </div>
    )
}
            