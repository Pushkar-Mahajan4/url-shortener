import { NavLink } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className="navbar-link">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/error">Error</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
