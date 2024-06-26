import axios from "axios"

const url = 'https://localhost:7130/api'

//הוספת משתמש חדש והחזרתו
export const addUser = async (u) => {
    let newUser = null
    try {
        await axios.post(`${url}/User`, u).then(result => newUser = result.data)
    }
    catch { return null }
    return newUser
}

//החזרת פרטי משתמש לפי אימייל וסיסמה
export const getUser = async (email, pass) => {
    let newUser = null
    try {
        await axios.get(`${url}/User/${email}/${pass}`)
            .then(result => { newUser = result.data })
    }
    catch { return null }
    return newUser
}

export const getUsers = async () => {
    let users = null
    try {
        await axios.get(`${url}/User`).then(result => users = result.data)
    }
    catch { return null }
    return users
}


//הוספת קטגוריה והחזרת רשימת הקטגוריות המעודכנת
export const addCategory = async (c) => {
    let category = null
    try {
        await axios.post(`${url}/Category`, c)
            .then(result => category = result.data)
    }
    catch { return null }
    return category
}
//החזרת רשימת הקטגוריות
export const getCategory = async () => {
    let category = null
    try {
        await axios.get(`${url}/Category`).then(result => category = result.data)
    }
    catch { return null }
    return category
}

//הוספת רמה והחזרת רשימת הרמות המעודכנת
export const addLevel = async (l) => {
    let level = null
    try {
        await axios.post(`${url}/Level`, l).then(result => level = result.data)
    }
    catch { return null }
    return level
}
//החזרת רשימת הרמות
export const getLevel = async () => {
    let level = null
    try {
        await axios.get(`${url}/Level`).then(result => level = result.data)
    }
    catch { return null }
    return level
}

//הוספת רכיבים והחזרת רשימת הרכיבים המעודכנת
export const addIngredient = async (i) => {
    console.log('add ingredient')
    let ingredient = null
    try {
        await axios.post(`${url}/Ingredient`, i).then(result => ingredient = result.data)
    }
    catch { return null }
    return ingredient;
}
//החזרת רשימת הרכיבים
export const getIngredient = async () => {
    let ingredient = null
    try {
        await axios.get(`${url}/Ingredient`).then(result => ingredient = result.data)
    }
    catch { return null }
    return ingredient;
}

//הוספת מתכון והחזרת הקוד שלו
export const addRecipe = async (r) => {
    let recipe = null
    try {
        await axios.post(`${url}/Recipe`, r).then(result => recipe = result.data)
    }
    catch { return null }
    return recipe;
}
//החזרת רשימת המתכונים
export const getRecipe = async () => {
    let recipe = null
    try {
        await axios.get(`${url}/Recipe`).then(result => recipe = result.data)
    }
    catch { return null }
    return recipe;
}

//הוספת רכיבים למתכון והחזרה האם הצליח
export const addIngredientsToRecipe = (i) => {
    try {
        axios.post(`${url}/IngredientsToRecipe`, i).then(x => { return x })
    }
    catch { return false }
}
//החזרת רכיבי מתכון לפי הקוד
export const getIngredientsToRecipe = async (recipeId) => {
    let ingredientsToRecipe = null
    try {
        await axios.get(`${url}/IngredientsToRecipe/${recipeId}`).then(result => ingredientsToRecipe = result.data)
    }
    catch { return null }
    return ingredientsToRecipe
}

//הוספת תגובה למתכון והחזרה האם הצליח
export const addCommentsToRecipe = async (c) => {
    let commentsToRecipe = null
    try {
        await axios.post(`${url}/CommentsToRecipe`, c)
            .then(result => commentsToRecipe = result.data)
        if (commentsToRecipe)
            return true
    }
    catch { return false }
    return false
}
//החזרת רשימת תגובות למתכון לפי הקוד שלו
export const getCommentsToRecipe = async (recipeId) => {
    let commentsToRecipe = null
    try {
        await axios.get(`${url}/CommentsToRecipe/${recipeId}`).then(result => commentsToRecipe = result.data)
    }
    catch { return null }
    return commentsToRecipe
}
