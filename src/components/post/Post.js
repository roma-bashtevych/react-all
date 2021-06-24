import './Post.css'
export default function Post({item, postSelect}) {
    return (
        <div className={'row'}>
            {item.id} - {item.title}
            <button onClick={() => {
               postSelect(item.id) }
            }>click me</button>
        </div>
    )
}
