import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Register } from "./Register"
import { Recipes } from "./recipes/Recipes"
import { Personal } from "./Personal"
import { MyRecipes } from "./MyRecipes"
import { AddRecipe } from "./AddRecipe"
import { Categories } from "./adm/Categories"
import { Levels } from "./adm/Levels"
import { Login } from "./Login"


export const Routing = () => {
    return <>
        <Routes>
            <Route path="Home" element={<Home></Home>}>
                <Route path="Register" element={<Register></Register>}></Route>
                <Route path="Login" element={<Login></Login>}></Route>
            </Route>
            <Route path="Recipes" element={<Recipes></Recipes>}></Route>
            <Route path="Personal" element={<Personal></Personal>}>
                <Route path="MyRecipes" element={<MyRecipes></MyRecipes>}></Route>
                <Route path="AddRecipe" element={<AddRecipe></AddRecipe>}></Route>
            </Route>
            {/* סרגל מנהל */}
            <Route path="Category" element={<Categories></Categories>}></Route>
            <Route path="Level" element={<Levels></Levels>}></Route>
        </Routes>
    </>
}