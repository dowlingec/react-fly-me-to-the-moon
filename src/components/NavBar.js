
   
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div>
            <NavLink to="/about" exact>About</NavLink>
            <NavLink to="/">User</NavLink>
        </div>
    )
}

export default NavBar;