import React, { useState } from 'react'

const titleStyle="flex justify-between px-4 text-[#2e1065]"
const show="flex h-auto max-h-80";
const hide="max-h-0 overflow-hidden"

const cardStyleOpened="w-full my-6 p-4 mx-auto border w-[80%] rounded-lg shadow-lg shadow-violet-100 hover:cursor-pointer";

const Value = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    console.log(data)
    return (
        <div className='w-[80%] m-auto  flex'>
            <div className='w-1/2 my-16 rounded-xl border-8 rounded-t-full overflow-hidden border-violet-300'>
                <img src='./pr3.png' alt='value' className='h-[600px] scale-110' />
            </div>
            <div className='m-16 my-auto w-1/2'>
                <div>
                    <p className='my-2  text-3xl font-semibold text-orange-500'>Our Value</p>
                    <h1 className='my-2  text-4xl font-bold'>Value We Give To You</h1>
                    <div className='text-gray-500 text-lg'>
                        <p>We always ready to help by providing the best services for you.</p>
                        <p>We believe a good place to live can make your life better</p>
                    </div>
                </div>
                <div className='w-full'>
                    {data.map((item, i) => (
                        <div className={cardStyleOpened}>
                            <div className={titleStyle} onClick={() => toggle(i)}>
                                <h1 className='mx-auto font-bold text-xl'>{item.title}</h1>
                                <span className='text-orange-600'>{selected === i ? 'X' : '+'}</span>
                            </div>
                            <div className={selected===i?show:hide}>
                                {item.desc.map(item => {
                                    return (
                                        <p className='text-md p-1 mt-4'>{item.description}</p>
                                    )
                                })}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

const data = [
    {
        title: "Best interest rates on the market",
        desc: [
            {
                description: "the best interest rate for you depends on your individual circumstances. Consider your financial goals, risk tolerance, and liquidity needs before making a decision."
            }
        ]
    },
    {
        title: "Prevent unstable prices",
        desc: [
            {
                description: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
            }
        ]
    },
    {

        title: "Best price on the market",
        desc: [
            {
                description: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
            }
        ]    
    }
]
export default Value