import './PostDetails.css'
export default function PostDetails({it}) {
    return (
        <div className={'text'}>
            {
                it.map(value => <div key={value.id}>{value.body}</div>)
            }
        </div>
    )
}
            