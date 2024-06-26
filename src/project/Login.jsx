import { useState } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router"
import { getUser } from "./api"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "./redux/action"
import './css/style.css'
import Button from "react-bootstrap/esm/Button";

export function Login() {
    const nav = useNavigate()//כדי לשנות ניתוב

    const [show, setShow] = useState(true);

    const handleClose = () => { setShow(false); nav('/Home') }

    let user = useSelector(u => { return u.currentUser });
    const dis = useDispatch()

    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const u = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        let user1 = await getUser(u.email, u.password)
        if (!user1) {
            nav('/Home/Register')
        }
        else {
            dis(setCurrentUser(user1))
            nav('/Home')
        }
        setShow(false)
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>כניסה</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="from">
                        <form onSubmit={(e) => send(e)}>
                            <label htmlFor={'mail'}>:מייל</label>
                            <br></br>
                            <input type="email" id={'mail'} placeholder="הכנס מייל" required></input>
                            <br></br>
                            <br></br>
                            <label htmlFor={'pw'}>:סיסמה</label>
                            <br></br>
                            <input id={'pw'} placeholder="הכנס סיסמה" required type="password"></input>
                            <br></br>
                            <br></br>
                            <input type="submit" value={'שלח'}></input>
                        </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}