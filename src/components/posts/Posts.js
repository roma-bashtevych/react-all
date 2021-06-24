import Post from "../post/Post";
import './Posts.css'
export default function Posts({items, postSelect}) {
    // console.log(items)
    return (
        <div className={'container'}>
            {
                items.map(value => <Post key={value.id} item={value} postSelect={postSelect}/>)
            }
        </div>
    )
}
