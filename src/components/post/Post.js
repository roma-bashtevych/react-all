import './Post.css'
export default function Post({item:{id, title, body}}) {
    return (
        <div>
            <h2 className={'title'}>{id} - {title}</h2>
            <p>{body}</p>
        </div>
    )
}
