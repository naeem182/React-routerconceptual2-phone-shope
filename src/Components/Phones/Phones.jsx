import React from 'react'
import PhonesCard from './PhonesCard'

const Phones = ({ phones }) => {
    // console.log(phones)
    return (
        <div className=' my-3 text-center text-2xl'>
            <h2 >All Categories Phones</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    phones?.map((phone) => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    )
}

export default Phones
