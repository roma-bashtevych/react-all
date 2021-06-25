import './PostDetails.css'
import Post from "../post/Post";
export default function PostDetails({it}) {
    return (
        <div className={'text'}>
            {
                // it.map(value => <div key={value.id}>{value.body}</div>)
                it.map(value => <Post item={value}/>)
            }

        </div>
    )
}
            