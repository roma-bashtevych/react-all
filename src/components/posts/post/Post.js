import './Post.css'
export default function Post({item}) {
    // console.log(item)
    return (
       <div className={'post-card'}>
           <div className={'post-main'}>
               post: {item.id} - <span className={'post-title'}>{item.title}</span>
           </div>
           <p className={'post-text'}>{item.body}</p>
       </div>
    )
}
            