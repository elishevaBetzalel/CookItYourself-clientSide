import { Button } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"
import './css/home.css'

export const Personal = () => {
    return <>
        <div className='personalNav'>
            <NavLink to={'MyRecipes'} className='plink'>
                <Button style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>
                    המתכונים שלי
                </Button>
            </NavLink>
            <NavLink to={'AddRecipe'} className='plink'>
                <Button style={{ backgroundColor: "#030657", border: '#030657 solid 1px' }}>
                    הוספת מתכון
                </Button>
            </NavLink>
        </div>
        <Outlet></Outlet>
    </>
}