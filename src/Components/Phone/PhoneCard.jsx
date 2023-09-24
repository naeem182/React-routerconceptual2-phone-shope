import { Link, useNavigate } from "react-router-dom";

import swal from 'sweetalert';

const PhoneCard = ({ phone }) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const { id, phone_name, brand_name, rating, price, image } = phone || {};

    const handleAddToFavorite = () => {
        const AddedFavoriteArray = [];
        const favoriteiteam = JSON.parse(localStorage.getItem('favorite'));
        //1st e to kisu thakbe na tai 1 ta add hbe ekhane
        if (!favoriteiteam) {
            AddedFavoriteArray.push(phone);
            localStorage.setItem('favorite', JSON.stringify(AddedFavoriteArray))
            swal("Good job!", "Succesfully Added!", "success");
        }
        //kisu thakle
        else {
            //check
            const isExist = favoriteiteam.find(fav => fav.id === id)
            //jodi age na thake
            if (!isExist) {
                AddedFavoriteArray.push(...favoriteiteam, phone)
                localStorage.setItem('favorite', JSON.stringify(AddedFavoriteArray));
                swal("Good job!", "Succesfully Added!", "success");
            }
            else {
                swal("Error", "Already Added!", "error");
            }
        }
    }


    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 mt-4">

                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {brand_name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {phone_name}
                    </p>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        ${price}
                    </p>
                    <a className="inline-block" href="#">
                        <button onClick={handleAddToFavorite}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            add to favorite
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

            <button onClick={handleGoBack} className="btn btn-primary">Go Back</button>
        </div>
    )
}

export default PhoneCard
