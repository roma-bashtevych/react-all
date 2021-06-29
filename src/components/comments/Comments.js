import Comment from "./comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../services/API";

export default function Comments() {

    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(response => {
            setComments(response.data)
        })
    }, [])
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}
            