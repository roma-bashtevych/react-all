import './Menu.css'
export default function Menu() {
    return (
        <div>
           <nav className={'menu'}>
               <a className={'link'} href="#">Сезони</a>
               <a className={'link'} href="#">Постери</a>
               <a className={'link'} href="#">Фільм</a>
               <a className={'link'} href="#">Автори</a>
               <a className={'link'} href="#">Приколи</a>
           </nav>
        </div>
    )
}
