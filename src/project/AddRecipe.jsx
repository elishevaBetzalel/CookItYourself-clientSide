import { useEffect, useState, useRef } from "react"
import { addIngredient, addIngredientsToRecipe, addRecipe, getCategory, getIngredient, getLevel, getUser } from "./api"
import { useSelector } from "react-redux"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router"

export const AddRecipe = () => {

    const [list1, setList1] = useState()
    const [list2, setList2] = useState()
    const [list3, setList3] = useState()

    const [resList, setResList] = useState([])

    useEffect(() => {
        getCategory()
            .then(x => { setList1(x) })
        getLevel()
            .then(x => { setList2(x) })
        getIngredient()
            .then(x => { setList3(x) })
    }, [])

    const nav = useNavigate()//כדי לשנות ניתוב


    const ref = useRef()
    let currentUser = useSelector(u => { return u.currentUser });

    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        let recipe =
        {
            "name": event.target[0].value,
            "pic": event.target[2].value,
            "preparationTime": event.target[3].value,
            "userId": currentUser.id,
            "userName": currentUser.firstName + " " + currentUser.lastName,
            // "categoryId": event.target[5].key,
            "categoryId": document.getElementById(event.target[5].value).getAttribute("data-id"),
            "categoryName": event.target[5].value,
            // "levelId": event.target[6].key,
            "levelId" : document.getElementById(event.target[6].value).getAttribute("data-id"),
            "levelName": event.target[6].value,
            "note": event.target[1].value,
            "instructions": event.target[4].value
        }

        addRecipe(recipe).then(
            r => {
                const list = document.getElementsByClassName("amount")
                setResList([])
                for (let i = 0; i < list.length; i++) {
                    if (list[i].value != '0') {
                        const ir = {
                            // "id": 0,
                            "recipeId": r,
                            "ingredientId": list[i].id,
                            "ingredientName": document.getElementById(list[i].id).getAttribute('data-n'),
                            "amount": list[i].value
                        }
                        resList.push(ir)
                    }
                }
                addIngredientsToRecipe(resList)
            }
        )
        nav('../../home')
    }

    const f_click = async () => {
        let val = ref.current.value
        if (val)
            setList3(await addIngredient({ Name: val }))
        ref.current.value = ''
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'name'}>שם</label>
            <br></br>
            <input id={'name'} placeholder="עוגת שוקולד" required></input>
            <br></br>
            <br></br>
            <label htmlFor={'note'}>נימה אישית</label>
            <br></br>
            <textarea id={'note'} placeholder="העוגה מתאימה ליום-יום ומשמשת כדלק זמין עבור כל אחד מבני הבית..."></textarea>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>הכנס שם תמונה</label>
            <br></br>
            <input id={'pw'} placeholder="תמונה 1"></input>
            <br></br>
            <br></br>
            <label htmlFor={'t'}>זמן הכנה - בדקות</label>
            <br></br>
            <input id={'t'} type="number"></input>
            <br></br>
            <br></br>
            <label htmlFor={'in'}>הוראות הכנה</label>
            <br></br>
            <textarea id={'in'} placeholder="לערבב בקערה...."></textarea>
            <br></br>
            <br></br>
            <select required>
                {list1 && list1.map((x, i) =>
                    <option id={x.name} data-id={x.id} key={x.id}>{x.name}</option>
                )}
            </select>
            <br></br>
            <br></br>
            <select required>
                {list2 && list2.map((x, i) =>
                    <option id={x.name} data-id={x.id} key={x.id}>{x.name}</option>
                )}
            </select>
            <br></br>
            <br></br>
            <label>הכנס כמות עבור הרכיבים הרלוונטים</label>
            {list3 && list3.map(x =>
                <div key={x.id}>
                    <label htmlFor={x.id}>{x.name}</label>
                    <br></br>
                    <input className="amount" data-n={x.name} id={x.id} defaultValue={"0"} type="text"></input>
                </div>
            )}
            <br></br>
            <input ref={ref} placeholder="הוסף רכיב"></input>
            <br></br>
            <Button onClick={f_click} style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>הוסף</Button>
            {/* {ref?.current?.value && <Button id="btn" onClick={f_click} variant="outline-primary">הוסף</Button>} */}
            <br></br>
            <br></br>
            <input style={{color: 'white', backgroundColor: "#030657", border: '#030657 solid 1px' }} type="submit" value={'שלח מתכון'}></input>
        </form>
    </>
}