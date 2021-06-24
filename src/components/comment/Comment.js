import './Comment.css'
export default function Comment({item:{id, name, email, body}}) {
    return (
        <div className={'card'}>
            <h2 className={'title'}>{id} - {name}</h2>
            <a className={'link'} href="#">{email}</a>
            <p className={'text'}>{body}</p>
        </div>
    )
}
