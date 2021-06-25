import './Users.css'
import User from "../user/User";

export default function Users({items}) {
      return (
        <div className={'users'}>
            {
                items.map(value => <User item={value} key={value.id} />)
            }
        </div>
    )
}
            