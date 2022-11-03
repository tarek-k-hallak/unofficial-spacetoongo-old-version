import React from 'react'
import { HeroData } from '../fixtures/HomeData'

export default function Hero({ content = true }) {
    return (
        <section className='overflow-hidden'>
            <div className='relative bg-primary min-h-[760px]'>
                {content ?
                    <div className="container flex max-w-[1200px] m-auto justify-end lg:justify-start">
                        <div className='z-10 flex flex-col lg:w-[50%] w-[70%] lg:pr-24 text-right pt-32 lg:pt-16'>
                            <h1 className='text-[55px] lg:text-[80px] leading-tight text-white font-bold mt-24'>
                                {HeroData.title}
                            </h1>
                            <p className='text-lg text-white font-bold pt-12 pl-8'>
                                {HeroData.subtitle}
                            </p>
                            <button className='bg-gray-100 text-primary font-bold text-xl w-60 lg:self-center self-end h-16 rounded-full mt-12'>
                                {HeroData.buttonText}
                            </button>
                        </div>
                        {/* Auto Images Slide */}
                        <div className='z-0 flex flex-row w-[50%] gap-4 rotate-[25deg] absolute -top-40 lg:top-0 right-[750px] lg:right-0 opacity-30 lg:opacity-100 '>
                            <img className='w-[225px] h-[1500px] slider1' src={HeroData.slide1.type} alt="slide image" />
                            <img className='w-[225px] h-[1100px] slider2' src={HeroData.slide2.type} alt="slide image" />
                            <img className='w-[225px] h-[950px] slider3' src={HeroData.slide3.type} alt="slide image" />
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className='decor bg-primary'>
                <svg className='w-full h-[200px] relative'>
                    <ellipse cx="50%" cy="100%" rx="55%" ry="80%" fill='#f4f3ef' />
                </svg>
            </div>
        </section>
    )
}
