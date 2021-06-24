import './PostDetails.css'
export default function PostDetails({item}) {
    return (
        <div className={'text'}>
            {
                item.body
            }
        </div>
    )
}
            