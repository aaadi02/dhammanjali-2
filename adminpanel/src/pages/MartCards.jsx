import React from 'react'
import Sidebar from '../components/Sidebar'

function MartCards() {
    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className=" text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8">
                    MMart Cards
                </h2>
            </div>
        </>
    )
}

export default MartCards
