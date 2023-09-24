import { useLoaderData } from "react-router-dom"
import Banner from "../../Components/Banner/Banner"
import Phones from "../../Components/Phones/Phones"
import useGetPhones from "../../Hook/useGetPhones";


const Home = () => {
    // const phones = useLoaderData()
    //hook call
    const [phones] = useGetPhones();
    // console.log(phones)
    return (
        <div className=" container mx-auto">

            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    )
}

export default Home
