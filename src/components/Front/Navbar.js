import React from 'react';
const Navbar = () => {
    // const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='w-full fixed top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
            <div className="w-[80%] mx-auto flex justify-between ">
                {/* logo */}
                <img src="./logo.png" alt="logo" width={100} />
                {/* menu */}
                <div className='flex justify-between w-[50%] items-center '>
                    <a href="#get-started" >Get Started</a>
                    <a href="#residencies">Residencies</a>
                    <a href="#about">About Us</a>
                    <a href="#faqs">FAQs</a>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    >
                        <a href="mailto:rksingh6050@gmail.com">Contact</a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;