import React from 'react'
import { FaLandmark, FaHeart, FaShare
 } from 'react-icons/fa'

const MoreAboutProperty = () => {
  return (
    <div className='my-4 bg-white p-4'>
      <h1 className='text-xl font-medium mb-2 border-b-2 pb-4'>Aliva Priva Jardin | Overview</h1>
      <div className='grid grid-cols-3 my-4'>
        <div className=' flex items-center py-4'>
          <FaLandmark />
          <div>
            <h1 className='text-lg text-gray-600'>Project Area</h1>
            <h1>1.23 Acres</h1>
          </div>
        </div>
        <div className='flex items-center py-4'>
          <FaLandmark />
          <div>
            <h1 className='text-lg text-gray-600'>Sizes</h1>
            <h1>896sq. ft - 1636sq. ft</h1>
          </div>
        </div>
        <div className='flex items-center py-4'>
          <FaLandmark />
          <div>
            <h1 className='text-lg text-gray-600'>Average Price</h1>
            <h1>$947 - $1004</h1>
          </div>
        </div>
        <div className='flex items-center py-4'>
          <FaLandmark />
          <div>
            <h1 className='text-lg text-gray-600'>Configurations</h1>
            <h1>2,3,4BHK Apartments</h1>
          </div>
        </div>
        <div className='flex items-center py-4'>
          <FaLandmark />
          <div>
            <h1 className='text-lg text-gray-600'>Project Area</h1>
            <h1>1.23 Acres</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-16 gap-4'>
        <button className="bg-orange-500 w-1/3 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-3"><FaShare />Share</button>
        <button className="bg-orange-500 w-1/3 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-3"><FaHeart />Save</button>
        <button className="bg-orange-500 w-1/3 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">Ask For Details</button>
      </div>
    </div>

  )
}

export default MoreAboutProperty