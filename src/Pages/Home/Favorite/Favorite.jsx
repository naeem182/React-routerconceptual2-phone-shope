import { useEffect, useState } from "react"
import PhoneCard from "../../../Components/Phone/PhoneCard";


const Favorite = () => {

    const [favorite, setfavorite] = useState([]);
    const [notfound, setnotfound] = useState(false)

    useEffect(() => {
        const favoriteIteam = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteIteam) {
            setfavorite(favoriteIteam)
        } else {
            setnotfound("No data found");
        }
    }, [])

    return (
        <div className=" container mx-auto">
            {
                notfound ? <p className="h-[80vh] flex justify-center items-center">{notfound}</p> :
                    <div className="grid grid-cols-2 gap-5">
                        {favorite.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)}
                    </div>
            }
        </div>
    )
}

export default Favorite
