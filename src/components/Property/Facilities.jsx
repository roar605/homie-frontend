import React from 'react'

const Facilities = () => {
    const items = ["tap.png",
        "cctv.png",
        "elevator.png",
        "gym.png",
        "hall.png",
        "indoor.png",
        "parking.png",
        "restaurant.png",
        "salon.png",
        "security.png",
        "swim.png"
    ]

    return (
        <div className='text-xl bg-white font-medium mb-2 my-4 pb-4'>
            <h1 className='text-xl mx-4 py-4 font-medium mb-2 border-b-2 pb-4'>Aliva Priva Jardin | Facilities</h1>
            <div className='grid grid-cols-4 gap-4 py-4 px-4 '>
                {items.map((item) => {
                    return (
                        <div className=''>
                            <img alt='facility' src={`./${item}`} width={60} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Facilities