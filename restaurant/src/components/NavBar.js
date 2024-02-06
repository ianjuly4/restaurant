import { NavLink} from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <NavLink 
            to="/" 
            className="nav-link">
                Home
            </NavLink>

            <NavLink
            to="/restaurantForm"
            className="nav-link">
                New 
            </NavLink>
        </nav>
    )
}
export default NavBar