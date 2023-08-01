import {NavLink} from "react-router-dom";

const Navbar = () => {

    return <ul className="nav nav-justified bg-dark py-3 fs-4">
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/Simple-Site-With-Menu">Authors</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/imageSearch">Image Search</NavLink>
      </li>
    </ul>
}

export default Navbar;