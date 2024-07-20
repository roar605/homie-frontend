import React from 'react';
const Hero = () => {
    return (
        <div className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800bg-gradient-to-br from-violet-200 via-violet-500 to-violet-900'>

            <div className='w-[80%] mx-auto h-screen flex text-white'>

                <main className="w-1/2 flex-grow flex flex-col justify-center items-center px-4">
                    <h2 className="text-start text-6xl font-bold mb-8 text-black">Discover Most Suitable Property</h2>
                    <p className="text-start text-2xl pr-44 text-slate-700 font mb-8">Find a variety of properties that suit you very easily. Forget all difficulties in finding a residence for you.</p>
                    <div className=" flex justify-center items-center">
                        <input type="text" className="border border-gray-300 rounded p-2 mr-2" placeholder="Search" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Contact</button>
                    </div>
                </main>

                <div className='w-1/2 flex m-auto justify-center items-center'>
                    <img src="./heroimg.png" alt="logo" width={800} />
                </div>


            </div >
        </div>

    );
};

export default Hero;
