import { Link } from "react-router-dom";


const DesktopNav = () => {
    return(
        <div className="navbar-link">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link to="/error">Error</Link>
              </li>
            </ul>
          </div>
    );
}


export default DesktopNav;