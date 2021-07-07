import './Post.css'
export default function Post({item}) {
    return (
        <div>
            <div className={'posts-card'}>
                <h3 className={'posts-title'}>{item.title}</h3>
                <p className={'posts-text'}>{item.body}</p>
            </div>
        </div>
    )
}
