
   
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div>
            <NavLink to="/" exact>About</NavLink>
            <NavLink to="/login">User</NavLink>
        </div>
    )
}

export default NavBar;