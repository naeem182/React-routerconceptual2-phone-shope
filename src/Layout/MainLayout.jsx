import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import { useEffect } from "react";



const MainLayout = () => {

    const loc = useLocation();
    // console.log(loc);
    // console.log(loc.pathname)
    useEffect(() => {
        if (loc.pathname === '/') {
            document.title = `phone-hame`;

        } else {
            document.title = `Phone ${loc.pathname.replace("/", "-")}`;
        }
        if (loc.state) {
            document.title = ` ${loc.state}`;
        }


    }
        , [loc.pathname])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className=" container mx-auto" context={{ name: "naeem" }}></Outlet>
        </div>
    )
}

export default MainLayout
