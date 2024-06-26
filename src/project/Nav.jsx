import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { IsAdm } from "./adm/function";
import Avatar from '@mui/material/Avatar'
import './css/nav.css'

export const Nav = () => {
    //u.state.currentUser  לא משתנה כשמרפרשים אבל רק אז מופיע
    //u.currentUser  משתנה בריפרוש אבל כשנכנסים נוסף מיד 
    let user = useSelector(u => { return u.currentUser });

    return <>
        <nav id="nav" className="nav-container">
            <ul className="nav-items">
                <img id="logo" src={`${process.env.PUBLIC_URL}/image/project/logo.png`} height='100px'></img>
                <li>{IsAdm(user) && <NavLink className={'link'} to={'/Level'}>רמות</NavLink>}</li>
                <li>{IsAdm(user) && <NavLink className={'link'} to={'/Category'}>קטגוריות</NavLink>}</li>
                <li>{user && <NavLink className={'link'} to={'/Personal'}>אזור אישי</NavLink>}</li>
                <li><NavLink className={'link'} to={'/Recipes'}>המתכונים שלנו</NavLink></li>
                <li><NavLink className={'link'} to={"/Home"}>דף הבית</NavLink></li>
                {user && <Avatar
                    style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '8px', backgroundColor: 'rgb(1, 248, 1)' }}
                    sx={{ bgcolor: 'red' }}>
                    {user.firstName[0]}
                </Avatar>}
            </ul>
        </nav>
    </>
}

