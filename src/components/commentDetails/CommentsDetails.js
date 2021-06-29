import Comment from "../comments/comment/Comment";
import './CommentsDetails.css'
export default function CommentsDetails({com}) {
    console.log(com)
    return (
        <div className={'comm-bg'}>
            {
                com.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}
            