import React from 'react'
import Map from './Map'
import MoreAboutProperty from './MoreAboutProperty'
import ContactSeller from './ContactSeller'

const AboutProperty = () => {
    return (
        <div className='w-[70%]  m-auto'>
            {/* navigation navbar */}
            <div className='my-4 border-b-2 bg-white '>
                <ul className='flex justify-between p-2 m-4 text-xl font-semibold text-gray-600'>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>Location</li>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>More About Property</li>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>Facilities</li>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>About Owner</li>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>Ratings Reviews</li>
                    <li className=' hover:cursor-pointer border-violet-500 hover:border-b-2'>FAQs</li>
                </ul>
            </div>
            <div className='flex w-full h-[500px] overflow-auto no-scrollbar'>
                {/* location of the property */}
                <div className='w-2/3 m-auto '>
                    <Map />
                    <MoreAboutProperty/>
                </div>
                {/* seller contact */}
                <ContactSeller/>
            </div>
        </div>
    )
}

export default AboutProperty