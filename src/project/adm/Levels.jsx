import { useState, useRef, useEffect } from "react"
import { addLevel, getLevel } from "../api"
import Button from 'react-bootstrap/Button';

export const Levels = () => {

    const [list, setList] = useState()
    const ref = useRef()

    const f_click = async () => {
        let val = ref.current.value
        if (val)
            setList(await addLevel({ Name: val }))
        ref.current.value = ''
    }
    useEffect(() => {
        getLevel().then(x => { setList(x) })
    }, [])

    return <>
        {list && list.map((x, i) =>
            <h2 key={i}>{x.name}</h2>
        )}
        <input ref={ref} placeholder="הכנס רמה נוספת"></input>
        <br></br>
        <Button onClick={f_click} style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>הוספה</Button>
    </>

}


