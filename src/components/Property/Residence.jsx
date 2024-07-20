import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import AboutProperty from './AboutProperty'
import PropertyImages from './PropertyImages'
const Residence = () => {
    return (
        <div className='mt-20 '>
            <div className='w-[70%] mx-auto flex justify-between'>
                <div className=''>
                    {/* property name */}
                    <h1 className='my-2 text-4xl font-bold text-violet-950'>Aliva Priva Jardin</h1>

                    {/* location */}
                    <div className='flex items-center gap-2' >
                        <FaMapMarkerAlt className='size-4 text-orange-500' />
                        <h1 className='text-orange-500 text-xl'>Assi Ghat, Benaras</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    {/* price */}
                    <p className='mt-2 font-bold text-lg text-gray-700'><span className='text-orange-600'>$</span>29,005</p>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    >
                        <a href="mailto:rksingh6050@gmail.com">Contact</a>
                    </button>
                </div>
            </div>
            <div className='w-[70%] mx-auto mt-2 gap-2 flex overflow-hidden '>
                <PropertyImages/>
            </div>
            <div className='border-t-2 my-8 mx-auto bg-slate-100'>
                <AboutProperty />
            </div>
        </div>

    )
}

export default Residence