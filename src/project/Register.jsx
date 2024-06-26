import { useNavigate } from "react-router"
import { addUser, getUser } from "./api"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "./redux/action"
import { useState } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css/style.css'

export const Register = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => { setShow(false); nav('/Home') };

    const nav = useNavigate()//כדי לשנות ניתוב
    const dis = useDispatch()

    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        if (event.target[4].value != event.target[3].value)
            alert('worng password')
        else {
            const user = {
                firstName: event.target[0].value,
                lastName: event.target[1].value,
                email: event.target[2].value,
                password: event.target[3].value
            }
            let user1 = await getUser(user.email, user.password)
            if (user1) {
                alert('כבר קיים משתמש עם אימייל וסיסמא זהים')
            }
            else {
                user1 = await addUser(user)
                dis(setCurrentUser(user1))
                nav('/Home')
            }
        }
    }
    return <>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>הרשמה</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="from">
                    <form onSubmit={(e) => send(e)}>
                        <label htmlFor={'fn'}>:שם פרטי</label>
                        <br></br>
                        <input id={'fn'} placeholder="הכנס שם פרטי"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor={'ln'}>:שם משפחה</label>
                        <br></br>
                        <input id={'ln'} placeholder="הכנס שם משפחה"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor={'mail'}>:אימייל</label>
                        <br></br>
                        <input type="email" id={'mail'} placeholder="הכנס מייל" required></input>
                        <br></br>
                        <br></br>
                        <label htmlFor={'pw'}>:סיסמה</label>
                        <br></br>
                        <input id={'pw'} placeholder="הכנס סיסמה" required type="password"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor={'pwa'}>:אימות סיסמה</label>
                        <br></br>
                        <input id={'pwa'} placeholder="הכנס סיסמה שוב" required type="password"></input>
                        <br></br>
                        <br></br>
                        <input type="submit" value={'שלח'}></input>
                    </form>
                </div>
            </Offcanvas.Body>
        </Offcanvas >
    </>
}