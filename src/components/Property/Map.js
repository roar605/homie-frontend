import React from 'react'
import { FaSchool, FaHospital, FaCampground, FaShoppingCart, FaParking, FaFilm, FaPiggyBank } from 'react-icons/fa'

const Map = () => {
  return (
    <div className='bg-white p-2 flex flex-col items-center'>
      <h1 className='font-medium text-xl'>Explore Neighbourhood - Map view</h1>
      <iframe
        title='myMap'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.457608545338!2d77.31265507520108!3d28.58604568619074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458b2abc42d%3A0x7fd8533b7b389eb9!2sb%2C%2055%2C%20B%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1713322465774!5m2!1sen!2sin"
        loading="lazy"
        width={600}
        height={400}
      >frame</iframe>
      <div className='flex p-4 px-8 justify-between gap-4 w-full'>
        <div>
          <FaSchool className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          School
        </div>
        <div>
          <FaHospital className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Hospital
        </div>
        <div>
          <FaCampground className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Ground
        </div>
        <div>
          <FaParking className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Parks
        </div>
        <div>
          <FaPiggyBank className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Banks
        </div>
        <div>
          <FaFilm className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Cinema
        </div>
        <div>
          <FaShoppingCart className=' rounded-full shadow-xl w-[45px] h-[45px]' />
          Market
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Map