import { useEffect, useState } from "react"
import { Recipe } from "./recipes/Recipe"
import { getRecipe } from "./api"
import './css/recipes.css'
import { GetUser } from "./function"

export const MyRecipes = () => {
    const [listRecipe, setListRecipe] = useState()
    useEffect(() => {
        getRecipe()
            .then(x => { setListRecipe(x) })
    }, [])

    let user = GetUser()

    const isMatch = (r) => {
        if ((r.userName == user.firstName + " " + user.lastName))
            return <Recipe className='card' key={r.id} r={r}></Recipe>
    }

    return <>
        <section>
            {listRecipe && listRecipe.map(r => isMatch(r))}
        </section>
    </>
}