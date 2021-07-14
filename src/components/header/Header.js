import './Header.css'

export default function Header() {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <nav className={'menu'}>
                    <img className={'header__logo'}
                         src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                         alt=""/>
                </nav>
            </div>
        </header>
    )
}

