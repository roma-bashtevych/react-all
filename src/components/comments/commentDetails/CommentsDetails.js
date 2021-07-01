import {useEffect, useState} from "react";
import {getComment} from "../../services/API";
import './CommentDetails.css'

export default function CommentsDetails(props) {
    let [comment, setComment] = useState({})
    let {match: {params: {id}}} = props;
    // console.log(props.location.state)
    // console.log(id)
    useEffect(() => {
        getComment(id).then(value =>
                // console.log(value.data)
            setComment({...value.data})
        )
    }, [id])
    console.log(comment)
    return (
        <div className={'card-comments'}>
            <h4>{comment.id} {comment.name}</h4>
            <p>{comment.body}</p>
        </div>
    )
}
            