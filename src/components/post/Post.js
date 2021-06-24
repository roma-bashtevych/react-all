import './Post.css'
export default function Post({item, postSelect}) {
    return (
        <div className={'row'}>
            {item.id} - {item.title}
            <button className={'btn'} onClick={() => {
               postSelect(item.id) }
            }>deploy</button>
        </div>
    )
}
