import './User.css'

export default function User({item}) {
    return (
        <div className={'user-card'}>
            <div><h3 className={'title'}>{item.id} - {item.name}</h3>
                <a href="mailto">{item.email}</a>
            </div>
            <div className={'address'}>Address:
                <div>City -- {item.address.city}</div>
                <div>Street -- {item.address.street}</div>
            </div>
        </div>
    )
}
