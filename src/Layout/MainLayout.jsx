import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className=" container mx-auto"></Outlet>
        </div>
    )
}

export default MainLayout
