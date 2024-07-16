import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Residencies = () => {
    const navigate=useNavigate();
    return (
        <div>
            <div className='py-4 content-normal flex w-[80%] m-auto'>
                <div className=''>
                    <h1 className='py-2 text-start text-orange-600 text-4xl font-bold'>Best Choices</h1>
                    <h1 className='py-2 text-start text-5xl font-bold'>Popular Residencies</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 w-[80%] m-auto' 
            >

                {/* card 1 */}
                <div onClick={()=>navigate("../properties")}
                 className='mb-4 mx-4 group p-2 py-6 flex flex-col justify-between items-center rounded-3xl hover:bg-gradient-to-b from-violet-50 to-purple-200 hover:cursor-pointer'>
                    {/* image */}
                    <div className='w-72 h-64' style={{ backgroundImage: `url(${'./pr1.png'})`, backgroundSize: 'cover' }}>
                    </div>
                    {/* price */}
                    <p className='mt-2 font-bold text-2xl text-gray-400'><span className='text-orange-600'>$</span>47,043</p>
                    {/* property name */}
                    <h1 className='my-2 text-3xl font-bold text-violet-900'>Aliva Priva Jardin</h1>
                    {/* location */}
                    <div className='flex items-center gap-2' >
                        <FaMapMarkerAlt className='size-4 text-orange-500' />
                        <h1 className='text-orange-500'>Assi Ghat, Benaras</h1>
                    </div>
                    {/* description */}
                    <p className='my-2 text-md text-gray-500'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                    </p>
                </div>

                {/* card 2 */}
                <div className='mb-4 mx-4 p-2 py-6 group flex flex-col justify-between items-center rounded-3xl hover:bg-gradient-to-b from-violet-50 to-purple-200 hover:cursor-pointer'>
                    {/* image */}
                    <div className=' w-72 h-64' style={{ backgroundImage: `url(${'./pr2.png'})`, backgroundSize: 'cover', }}>
                    </div>
                    {/* price */}
                    <p className='mt-2 font-bold text-2xl text-gray-400'><span className='text-orange-600'>$</span>29,005</p>
                    {/* property name */}
                    <h1 className='my-2 text-3xl font-bold text-violet-900'>Assati Garden</h1>
                    {/* location */}
                    <div className='flex items-center gap-2' >
                        <FaMapMarkerAlt className='size-4 text-orange-500' />
                        <h1 className='text-orange-500'>Assi Ghat, Benaras</h1>
                    </div>
                    {/* description */}
                    <p className='my-2 text-sm text-slate-800'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                    </p>
                </div>

                {/* card 3 */}
                <div className='mb-4 mx-4 p-2 group py-6 flex flex-col justify-between items-center rounded-3xl hover:bg-gradient-to-b from-violet-50 to-purple-200 hover:cursor-pointer'>
                    {/* image */}
                    <div className=' w-72 h-64' style={{ backgroundImage: `url(${'./pr3.png'})`, backgroundSize: 'cover', }}>
                    </div>{/* price */}
                    <p className='mt-2 font-bold text-2xl text-gray-400'><span className='text-orange-600'>$</span>32,300</p>
                    {/* property name */}
                    <h1 className='my-2 text-3xl font-bold text-violet-900'>Citralan Puri</h1>
                    {/* location */}
                    <div className='flex items-center gap-2' >
                        <FaMapMarkerAlt className='size-4 text-orange-500' />
                        <h1 className='text-orange-500'>Assi Ghat, Benaras</h1>
                    </div>
                    {/* description */}
                    <p className='my-2 text-sm text-slate-800'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Residencies;