import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"


const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])
export default MyCreatedRouter
