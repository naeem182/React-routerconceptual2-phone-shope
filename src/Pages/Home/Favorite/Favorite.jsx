import { useEffect, useState } from "react"
import PhoneCard from "../../../Components/Phone/PhoneCard";


const Favorite = () => {

    const [favorite, setfavorite] = useState([]);
    const [notfound, setnotfound] = useState(false)
    const [IsShow, setIsShow] = useState(false);
    const [totalprice, settotalprice] = useState(0)


    useEffect(() => {
        const favoriteIteam = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteIteam) {
            setfavorite(favoriteIteam)
            const total = favoriteIteam.reduce((prevalue, currentvalue) => prevalue + currentvalue.price, 0)
            // console.log(total)
            settotalprice(total)
        } else {
            setnotfound("No data found");
        }
    }, [])
    const handleremoveAll = () => {
        localStorage.clear();
        setfavorite([]);
        setnotfound("No data found");

    }

    return (
        <div className=" container mx-auto">
            {
                notfound ? <p className="h-[80vh] flex justify-center items-center">{notfound}</p> :
                    <div>
                        {favorite.length > 0 && (<div><button onClick={handleremoveAll} className="m-5 px-5 py-3 bg-green-200 block mx-auto text-black rounded-md">
                            Deleted All favorites

                        </button>

                            <h1 className="m-5 px-5 py-3 block mx-auto  rounded-md text-center">Total price : {totalprice}</h1>

                        </div>)
                        }
                        <div className="grid grid-cols-3 gap-5">
                            {IsShow ? favorite.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                                :
                                favorite.slice(0, 3).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                            }
                        </div>
                        {favorite.length > 3 && <button onClick={() => setIsShow(!IsShow)} className="m-5 px-5 py-3 bg-green-200 block mx-auto text-black rounded-md">
                            {IsShow ? "See less" : "See more"}
                        </button>}
                    </div>
            }
        </div >
    )
}

export default Favorite
