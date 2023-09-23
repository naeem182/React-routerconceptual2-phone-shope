import { Link } from "react-router-dom";


const PhoneCard = ({ phone }) => {
    const { id, phone_name, brand_name, rating, price, image } = phone || {};

    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <p className=" px-8 flex justify-start font-sans  font-medium  text-black ">
                    {brand_name}
                </p>
                <div className="px-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="font-sans  font-medium  text-blue-gray-900 pl-3">
                            {phone_name}
                        </p>
                        <p className="font-sans  font-medium  text-blue-gray-900 pl-3">
                            ${price}
                        </p>
                    </div>
                    <p className="font-sans  font-medium  text-red-500 pl-3 opacity-75 flex justify-start">
                        {rating}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phone/${id}`}>
                        <button
                            className=" bg-gray-300 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            see details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PhoneCard
