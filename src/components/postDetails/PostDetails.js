import './PostDetails.css'


export default function PostDetails({it}) {
    return (
        <div className={'text'}>
            {
                // it.map(value => <div key={value.id}>{value.body}</div>)
                // it.map(value => <Post key={value.id} item={value}/>)
                it.map(value => <div key={value.id}>
                    <h3 className={'postDetails-title'}> {value.id} - {value.title}</h3>
                    <div className={'postDetails-text'}>{value.body}</div>
                </div>)
            }


        </div>
    )
}
            