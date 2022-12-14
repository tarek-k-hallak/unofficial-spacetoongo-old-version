import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routers'

export default function SlideNav({ children, ...restProps }) {
    return (
        <div className="lg:hidden">
            {children}
        </div>
    )
}

SlideNav.Container = function SlideNavContainer({ ...restProps }) {
    const hs1 = useRef(null)
    const hs2 = useRef(null)
    const hs3 = useRef(null)
    const sidenav = useRef(null)
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)

    // Open & Close slide nav window on Mobile screens
    function toggleSlideNav() {
        setIsSlideNavOpened(!isSlideNavOpened)
        if (!isSlideNavOpened) {
            hs1.current.classList.add("opacity-80", "rotate-45", "translate-y-3")
            hs2.current.classList.add("opacity-0")
            hs3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-4")
            sidenav.current.classList.remove("translate-x-full")
        }
        else {
            hs1.current.classList.remove("opacity-80", "rotate-45", "translate-y-3")
            hs2.current.classList.remove("opacity-0")
            hs3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-4")
            sidenav.current.classList.add("translate-x-full")
        }
    }

    return (
        <>
            {/*===hamburger button========================*/}
            <button className='w-8 h-8 flex flex-col justify-between cursor-pointer hover:opacity-50'
                onClick={() => { toggleSlideNav() }}>
                <div className='hamburger-slice' ref={hs1}></div>
                <div className='hamburger-slice' ref={hs2}></div>
                <div className='hamburger-slice' ref={hs3}></div>
            </button>

            {/*===Mobile SlideNav========================*/}
            <nav ref={sidenav} className='z-10 h-screen w-screen px-2 fixed top-[70px] right-0 translate-x-full
                            bg-primary bg-opacity-95 transition duration-500 ease-in-out transform overflow-y-auto'>
                <button className={`text-lg w-full h-[35px] mt-8 rounded-lg transition duration-300 bg-red-900 text-white`}>
                    <Link to={ROUTES.SIGN_IN}>
                        ?????????? ????????????
                    </Link>
                </button>
                <ul className='flex flex-col items-end mt-8 bg-red-900 rounded-lg'
                    onClick={() => { toggleSlideNav() }}>
                    <li className='slidenav-items'>
                        <a href="#about-app">  ?????????? ??????????????</a>
                    </li>
                    <li className='slidenav-items'>
                        <a href="#features"> ??????????????</a>
                    </li>
                    <li className='slidenav-items'>
                        <a href="#benefits"> ???????? ???????? ??????????</a>
                    </li>
                    <li className='slidenav-items'>
                        <a href="#plans"> ??????????????</a>
                    </li>
                    <li className='slidenav-items'>
                        <a href="#planets"> ??????????????</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}