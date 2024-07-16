import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='w-full fixed top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
            <div className="w-[80%] mx-auto flex justify-between ">
                {/* logo */}
                <img src="./logofinal.png" alt="logo" width={80} />
                {/* menu */}
                <div className='flex justify-between w-[50%] items-center '>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/residencies"}>Residencies</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign In
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;