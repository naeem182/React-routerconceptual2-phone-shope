import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Favorite from "../Pages/Home/Favorite/Favorite"
import Login from "../Components/Navbar/Login/Login"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Phone from "../Components/Phone/Phone"


const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('phones.json')

            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')

            },
        ]
    }
])
export default MyCreatedRouter
