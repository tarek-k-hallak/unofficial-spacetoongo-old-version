import React, { useRef, useState } from 'react'
import { ToggleHamburger } from '../utils'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routers'

export default function Header({ showContent = true }) {
    const hs1 = useRef(null)
    const hs2 = useRef(null)
    const hs3 = useRef(null)
    const sidenav = useRef(null)
    const [isToggleWindow, setIsToggleWindow] = useState(false)

    return (
        <header>
            {/* Head Bar*/}
            <section className=''>
                <div className='z-40 fixed w-full bg-white'>
                    <div className="container flex flex-row-reverse items-center justify-between 
                                    mx-auto max-h-[70px] lg:max-h-[90px] max-w-[1200px] lg:px-6 ">
                        <div className='mt-[40px] pt-[2px] lg:mt-[55px] lg:pt-[20px]'>
                            <Link to={ROUTES.HOME} >
                                <img className="w-[110px] lg:w-[165px]" src="https://spacetoongo.com/assets/img/logo.svg" alt="STGO"></img>
                            </Link>
                        </div>

                        {showContent ?
                            <div className="flex items-center lg:order-2">
                                <div className='lg:hidden mr-4 w-8 h-8 flex flex-col justify-between cursor-pointer hover:opacity-50'
                                    onClick={() => {
                                        setIsToggleWindow(!isToggleWindow)
                                        ToggleHamburger(hs1, hs2, hs3, isToggleWindow, sidenav)
                                    }}>
                                    <div className='hamburger-slice' ref={hs1}></div>
                                    <div className='hamburger-slice' ref={hs2}></div>
                                    <div className='hamburger-slice' ref={hs3}></div>
                                </div>

                                <button type="button" className='font-bold text-sm lg:text-lg w-[125px] lg:w-[170px] h-[40px] lg:h-[48px] rounded-full 
                                    text-white bg-gradient-to-t from-primary to-accent hover:opacity-80 transition duration-300'>
                                    <Link to={ROUTES.SIGN_IN}>
                                        تسجيل الدخول
                                    </Link>
                                </button>
                            </div>
                            : null
                        }

                        {/*===Desktop Navbar========================*/}
                        {showContent ?
                            <nav className='hidden justify-between items-center w-full lg:flex lg:w-auto' id="navbar-sticky" >
                                <ul className='flex flex-col-reverse md:flex-row-reverse 
                                p-4 mt-4 md:mt-0'>
                                    <li className='nav-items ml-[34px]'>
                                        <a href="#about-app"> تحميل التطبيق</a>
                                    </li>
                                    <li className='nav-items ml-[34px]'>
                                        <a href="#features"> الميزات</a>
                                    </li>
                                    <li className='nav-items ml-[34px]'>
                                        <a href="#benefits"> تحكم كامل للاهل</a>
                                    </li>
                                    <li className='nav-items ml-[34px]'>
                                        <a href="#plans"> الباقات</a>
                                    </li>
                                    <li className='nav-items'>
                                        <a href="#planets"> الكواكب</a>
                                    </li>
                                </ul>
                            </nav>
                            : null
                        }
                    </div>
                </div>

                {/*===Mobile Slidnav========================*/}
                {showContent ?
                    <div>
                        <nav className='z-30 lg:hidden fixed top-0 right-0 h-full'>
                            <ul ref={sidenav} className='w-screen h-full -translate-x-full bg-primary bg-opacity-95 pt-32 pb-8 
                        transition duration-500 ease-in-out transform 
                        overflow-y-auto flex flex-col justify-between items-center'
                                onClick={() => {
                                    setIsToggleWindow(!isToggleWindow)
                                    ToggleHamburger(hs1, hs2, hs3, isToggleWindow, sidenav)
                                }}>
                                <li className='slidenav-items'>
                                    <a href="#about-app">  تحميل التطبيق</a>
                                </li>
                                <li className='slidenav-items'>
                                    <a href="#features"> الميزات</a>
                                </li>
                                <li className='slidenav-items'>
                                    <a href="#benefits"> تحكم كامل للاهل</a>
                                </li>
                                <li className='slidenav-items'>
                                    <a href="#plans"> الباقات</a>
                                </li>
                                <li className='slidenav-items'>
                                    <a href="#planets"> الكواكب</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    : null
                }
            </section >
        </header>
    )
}
