import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="">
      <ul className="listContainer">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeClassName" : "inActiveClassName"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
