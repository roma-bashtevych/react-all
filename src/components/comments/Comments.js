import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Comments.css'

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
            {comments.map(value=> <div className={'comments-card'}>
                <h3 className={'comments-title'}>{value.name}</h3>
                <p className={'comments-text'}>{value.body}</p>
            </div>)}
        </div>
    )
}
            