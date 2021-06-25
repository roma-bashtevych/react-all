import './CommentDirectory.css'
export default function CommentDirectory({com}) {
    // console.log(com)
    return (
        <div className={'comments'}>
            <div>{com.body}</div>
        </div>
    )
}
