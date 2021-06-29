import './Post.css'
export default function Post({item}) {
    return (
        <div>
          <h3 className={'post-title'}> {item.id} - {item.title}</h3>
            <div className={'post-text'}>{item.body}</div>
        </div>
    )
}
