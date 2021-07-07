import './User.css'
export default function User({item}) {
    return (
        <div>
            <div className={'users-card'}>
                <h3 className={'users-title'}>{item.name}</h3>
                <a className={'users-text'} href={'malito'}>{item.email}</a>
            </div>
        </div>
    )
}
