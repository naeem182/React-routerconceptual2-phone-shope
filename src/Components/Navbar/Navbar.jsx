
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div>


            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline  text-red-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorite"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline  text-red-500" : ""
                        }
                    >
                        Favorite
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline  text-red-500" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
