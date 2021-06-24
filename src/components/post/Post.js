import './Post.css'
export default function Post({item:{id, title, body}}) {
    return (
        <div className={'card'}>
            <h2 className={'title'}>{id} - {title}</h2>
            <p className={'text'}>{body}</p>
        </div>
    )
}
