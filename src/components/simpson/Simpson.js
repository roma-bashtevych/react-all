import './Simpson.css'
export default function Simpson({item:{name, surname, age, photo, info}}) {
    return (
        <div className={'card'}>
            <h2>{name} {surname}, age - {age}</h2>
            <img className={'img'} src={photo} alt=""/>
            <p className={'text'}>{info}</p>
        </div>
    )
}
