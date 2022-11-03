import React from 'react'
import { FooterData } from '../fixtures/HomeData'
export default function Footer({ decor = true, ...restProps }) {
    return (
        <footer className=' background-image w-full min-h-[550px] flex flex-col justify-between'>
            {decor ?
                <div className='decor'>
                    <svg className='w-full h-[100px]'>
                        <ellipse cx="50%" cy="5%" rx="55%" ry="100%" fill='#f4f3ef' />
                    </svg>
                </div>
                : null
            }

            <div className='flex flex-row-reverse lg:justify-between items-end max-w-[1200px] mx-auto'>
                <div className='flex flex-col items-end text-white'>
                    <div className='flex flex-row-reverse items-center mx-auto'>
                        <div>
                            <img src={FooterData.logo} alt="" />
                        </div>
                        <div className='text-center mr-12 '>
                            <p className='text-2xl lg:text-4xl font-bold'>{FooterData.title}</p>
                            <div className='flex flex-row mt-5 justify-center'>
                                <button className='w-12 mr-4 text-sm font-semibold rounded-full border-2 border-white'>Fb</button>
                                <button className='w-12 mr-4 text-sm font-semibold rounded-full border-2 border-white'>In</button>
                                <button className='w-12 mr-4 text-sm font-semibold rounded-full border-2 border-white'>Tw</button>
                                <button className='w-12 mr-4 text-sm font-semibold rounded-full border-2 border-white'>Yt</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse py-4 lg:py-8 mt-12 text-right lg:text-xs flex-wrap justify-center'>
                        {FooterData.items.map((item, index) => {
                            return (
                                <div key={index} className='font-semibold mr-4 cursor-pointer transform duration-100 hover:text-hover-2'>{item.text}</div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className='hidden lg:block relative -ml-24'>
                    <img src={FooterData.ImageChampion.type} alt="" />
                </div>
            </div>
        </footer>
    )
}
