import Post from "../post/Post";

export default function Posts({items, postSelect}) {
    // console.log(items)
    return (
        <div>
            {
                items.map(value => <Post item={value} postSelect={postSelect}/>)
            }
        </div>
    )
}
