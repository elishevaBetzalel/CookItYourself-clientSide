import { useEffect, useState } from "react"
import { getCategory, getLevel, getRecipe, getUsers } from "../api"
import { Recipe } from "./Recipe"

import '../css/nav.css'
import '../css/select.css'
import '../css/recipes.css'

export const Recipes = () => {

    const [listCategory, setListCategory] = useState()
    const [listLevel, setListLevel] = useState()
    const [listUser, setListUser] = useState()

    const [listRecipe, setListRecipe] = useState()

    useEffect(() => {
        getCategory()
            .then(x => { setListCategory(x) });
        getLevel()
            .then(x => { setListLevel(x) });
        getUsers()
            .then(x => { setListUser(x) });
        getRecipe()
            .then(x => { setListRecipe(x) });
    }, [])

    const [category, setCategory] = useState()
    const [level, setLevel] = useState()
    const [editor, setEditor] = useState()

    const isMatch = (r) => {
        if ((!category || category == 'כל הקטגוריות' || r.categoryName == category) &&
            (!level || level == 'כל הרמות' || r.levelName == level) &&
            (!editor || editor == 'כל העורכים' || r.userName == editor))
            return <Recipe className='card' key={r.id} r={r}></Recipe>
        return false
    }

    return <>
        <ul className="sort_option">
            <li>
                <label htmlFor="editor">בחר עורך מתכונים</label>
                <br></br>
                <select className="sort" id="editor" defaultValue={'כל העורכים'} onChange={x => setEditor(x.target.value)}>
                    <option key={0}>כל העורכים</option>
                    {listUser && listUser.map((u, i) =>
                        <option key={u.id}>{`${u.firstName} ${u.lastName}`}</option>
                    )}
                </select>
            </li>
            <li>
                {/* בחירת קטגוריות להצגה */}
                <label htmlFor="category">בחר קטגוריה להצגה</label>
                <br></br>
                <select className="sort" id="category" defaultValue={'כל הקטגוריות'} onChange={x => setCategory(x.target.value)}>
                    <option key={0}>כל הקטגוריות</option>
                    {listCategory && listCategory.map((c, i) =>
                        <option key={c.id}>{c.name}</option>
                    )}
                </select>
            </li>
            <li>
                {/* בחירת רמה להצגה */}
                <label htmlFor="level">בחר רמה להצגה</label>
                <br></br>
                <select className="sort" id="level" defaultValue={'כל הרמות'} onChange={x => setLevel(x.target.value)}>
                    <option key={0}>כל הרמות</option>
                    {listLevel && listLevel.map(c =>
                        <option key={c.id}>{c.name}</option>
                    )}
                </select>
            </li>
        </ul>
        <br></br>
        <br></br>
        <section>
            {listRecipe && listRecipe.map(r => isMatch(r))}
        </section>
    </>
}