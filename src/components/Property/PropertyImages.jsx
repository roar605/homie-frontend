import { useState } from "react"
import React from 'react'
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const PropertyImages = () => {
    const items = [
        "./pr1.png", "pr2.png", "pr3.png"
    ]
    console.log(items);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const handleImageClick = () => {
        setIsImageFullScreen(!isImageFullScreen);
    };
    return (
        <>
            <div className='w-[70%] m-auto'>
                <img src='./pr1.png' alt='property' />
            </div>
            <div className='w-[30%] m-auto flex flex-col gap-4'>

                <motion.img
                    width={220}
                    onClick={handleImageClick}
                    src="./pr2.png"
                    alt="pic"
                    className="mx-auto transform transition-transform duration-300 hover:scale-105 focus:outline-none "
                />
                <motion.img
                    width={220}
                    onClick={handleImageClick}
                    src="./pr3.png"
                    alt="pic"
                    className="mx-auto transform transition-transform duration-300 hover:scale-105 focus:outline-none"
                />
                <motion.img
                    width={220}
                    onClick={handleImageClick}
                    src="./pr1.png"
                    alt="pic"
                    className="mx-auto transform transition-transform duration-300 hover:scale-105 focus:outline-none "
                />

            </div>
            <AnimatePresence>
                {isImageFullScreen && (
                    <motion.div
                        className="backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={handleImageClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "100vw", height: "100vh" }} // Set full-screen width and height
                    >
                        <motion.img
                            src="./pr2.png"
                            alt="pic"
                            className="w-full h-auto max-h-[50vh] md:max-w-[50vw]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default PropertyImages