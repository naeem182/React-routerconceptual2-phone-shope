import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PhoneCard from './PhoneCard'
import useGetPhones from '../../Hook/useGetPhones'

const Phone = () => {
    const phones = useLoaderData()

    // console.log(phones)


    const { id } = useParams()
    const [phone, setphone] = useState({});
    useEffect(() => {

        const findPhone = phones?.find(phone => phone.id === id)
        setphone(findPhone);
    }, [id, phones])

    // console.log(phone)


    return (
        <div className='container mx-auto'>
            <div className=' h-28 bg-slate-100 p-6'>
                <h2 className='flex justify-center text-2xl font-bold'>Details of <br />
                    {phone.phone_name}</h2>

            </div>
            <div className=' flex justify-center mt-5 '>
                <PhoneCard phone={phone}></PhoneCard>
            </div>
        </div>
    )
}

export default Phone
