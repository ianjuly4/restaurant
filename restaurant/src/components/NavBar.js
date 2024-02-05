import { NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar(){

    return(
        <nav>
            <NavLink 
            to="/" 
            className="nav-link">
                App
            </NavLink>

            <NavLink 
            to="/filter"
            className="nav-link">
                Filter
            </NavLink>
        </nav>
    )
}
export default NavBar