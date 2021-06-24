import Posts from "../posts/Posts";

export default function User({item:{id, name, email}}) {
    return (
        <div>
            <div>{name} - {email}</div>
            <Posts userId={id}/>
        </div>
    )
}
