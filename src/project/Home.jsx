import { NavLink } from "react-router-dom"
import { Outlet } from "react-router"
import Button from 'react-bootstrap/Button';
import './css/home.css'
import '../App.css'

export const Home = () => {
    return <>
        <div className='homeNav'>
            <NavLink to={'Register'} className='hlink'>
                <Button style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>הרשמה</Button>
            </NavLink>
            <NavLink to={'Login'} className='hlink'><Button style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>
                כניסה</Button>
            </NavLink>
            <br></br>
            <img height={'600px'} src={`${process.env.PUBLIC_URL}/image/project/home.gif`} />
        </div>
        <Outlet></Outlet>
    </>
}