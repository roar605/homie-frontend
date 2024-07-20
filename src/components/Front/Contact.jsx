import React from 'react'
import {
    FaPhone
} from "react-icons/fa";

const Contact = () => {
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
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaPhone size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaPhone size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaPhone size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaPhone size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message now</div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='w-1/2  my-16 rounded-xl border-8 rounded-t-full overflow-hidden border-violet-300'>
                <img src='./pr3.png' alt='value' className='h-[600px] scale-110' />
            </div></div>
    )
}

export default Contact