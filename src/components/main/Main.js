import {BrowserRouter as Router, NavLink, Switch} from "react-router-dom";
import './Main.css'
import Routes from "../route/Routes";
import {useDispatch, useSelector} from "react-redux";

export default function Main() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.themeReduser)
    console.log(theme.theme)
    const lightTheme = () => {
        dispatch({
            type: 'LIGHT_THEME'
        })
    }
    const darkTheme = () => {
        dispatch({
            type: 'DARK_THEME'
        })
    }
    return (
        <div className={theme.theme}>
            <div>
                <button className={'theme-button theme-button-ligth'} onClick={lightTheme}>ligth theme</button>
                <button className={'theme-button theme-button-dark'} onClick={darkTheme}>dark theme</button>
            </div>
            <Router>
                <div className={'main-nav'}>
                    <NavLink className={'main-route'} to={'/'}>Головна</NavLink>
                    <NavLink className={'main-route'} to={'/movies'}>Фільми</NavLink>
                    <NavLink className={'main-route'} to={'/genres'}>Жанри</NavLink>
                </div>

                <div>
                    <Switch>
                        <Routes/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
