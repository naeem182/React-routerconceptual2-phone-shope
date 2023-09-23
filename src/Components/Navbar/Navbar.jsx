
import { NavLink } from "react-router-dom";
import './Navbar.css'
import Logo from "../Logo/Logo";
const Navbar = () => {
    return (
        <div className=" shadow-xl">

            <nav className=" container flex justify-between items-center py-5  mx-auto">
                <Logo></Logo>
                <ul className="flex gap-4">
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
            </nav>
        </div>
    )
}

export default Navbar
