import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Favorite from "../Pages/Home/Favorite/Favorite"
import Login from "../Components/Navbar/Login/Login"


const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
        ]
    }
])
export default MyCreatedRouter
