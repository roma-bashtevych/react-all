import './Comment.css'
export default function Comment({item}) {
    return (
       <div>
           <div className={'comm-title'}>
               <span>{item.id} - {item.name}</span>
               <a href="malito">{item.email}</a>
           </div>
           <p className={'comm-text'}>{item.body}</p>
       </div>
    )
}
