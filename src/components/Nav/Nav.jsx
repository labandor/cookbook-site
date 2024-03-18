import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-recipe">Add Recipe</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/recipes">Browse</NavLink>
    </>
)
const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="Home" to="/">Home</NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
