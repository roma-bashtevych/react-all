import User from "../user/User";

export default function Users({items}) {
      return (
        <div>
            {
                items.map(value => <User item={value} key={value.id} />)
            }
        </div>
    )
}
            