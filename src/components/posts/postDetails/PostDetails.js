import {useEffect, useState} from "react";
import {getPost, getUser} from "../../services/API";
import './PostDetails.css'

export default function PostDetails(props) {


    let [post, setPost] = useState({})
    let {match: {params: {id}}} = props;
    useEffect(() => {
        getPost(id).then(value => setPost({...value.data}))
    }, [id])

    return (


        <div className={'card-posts'}>
            <h4>{post.id} - {post.title}</h4>
            <p>{post.body}</p>
        </div>


    )
}
            