import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"


const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            }
        ]
    }
])
export default MyCreatedRouter
