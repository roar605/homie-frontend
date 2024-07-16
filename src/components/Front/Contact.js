import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    const items = [
        { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
        { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
        { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" }
    ];

    return (
        <div className='w-[80%] m-auto  flex'>
            <div className='m-16 my-auto w-1/2'>
                <div>
                    <p className='my-2  text-3xl font-semibold text-orange-500'>Our Contact Us</p>
                    <h1 className='my-2  text-4xl font-bold'>Easy To Contact Us</h1>
                    <div className='text-gray-500 text-lg'>
                        <p>We always ready to help by providing the best services for you. </p>
                        <p>We believe a good place to live can make your life better</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    {/* contact 1 */}
                    <div className="group my-16 relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 opacity-0 group-hover:opacity-100 w-20 rounded-full bg-violet-300 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-violet-500 transition-all duration-300 group-hover:bg-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </span>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Follow and Connect with us on our Social Media platforms.</p>

                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <div className="flex gap-6 mx-auto items-center p-4 text-violet-500 text-3xl">
                                        {items.map((x, index) => {
                                            return (<a href={x.link}>
                                                <x.icon key={index} className="group-hover:text-orange-500 " />
                                            </a>)
                                        })}
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='w-1/2  my-16 rounded-xl border-8 rounded-t-full overflow-hidden border-violet-300'>
                <img src='./pr3.png' alt='value' className='h-[600px] scale-110' />
            </div>
        </div>
    )
}

export default Contact