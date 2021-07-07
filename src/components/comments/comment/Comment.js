import './Comment.css'
export default function Comment({item}) {
    return (
        <div>
            <div className={'comments-card'}>
                <h3 className={'comments-title'}>{item.name}</h3>
                <p className={'comments-text'}>{item.body}</p>
            </div>
        </div>
    )
}
            