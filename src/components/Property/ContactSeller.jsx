import React from 'react'

const ContactSeller = () => {
  return (
    <div className=' sticky top-0 w-1/3 p-4 rounded-lg bg-white flex flex-col mx-4'>
                    <h1 className='font-medium text-lg'>Contact Seller</h1>
                    <div className='flex'>
                        <img alt='logo' src='./logofinal.png' width={70} />
                        <div className='flex flex-col justify-center'>
                            <h1>Priyanshu Priy</h1>
                            <span>+91 87690...</span>
                        </div>
                    </div>
                    <h2>Please share your contact</h2>
                    <form className='flex flex-col'>
                            <input value="Name" className='p-2 border-b-2'></input>
                            <input value="Phone" className='p-2 border-b-2'></input>
                            <input value="Email" className='p-2 border-b-2'></input>
                    </form>

                    <button className='bg-gray-500 p-2 py-4'>Get Contact Details</button>
                </div>
  )
}

export default ContactSeller