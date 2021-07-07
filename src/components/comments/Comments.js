import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Comment from "./comment/Comment";

export default function Comments() {
    const dispath = useDispatch()
    const comments = useSelector((state) => state.comments)

    const fetchComments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        dispath({
            type: 'SET_COMMENTS',
            payload: data
        })
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div>
            {comments.map(value=> <Comment key={value.id} item={value}/>)}
        </div>
    )
}
            