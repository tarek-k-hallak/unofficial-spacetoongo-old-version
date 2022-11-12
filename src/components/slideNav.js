import React, { useRef, useState } from 'react'

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
            sidenav.current.classList.remove("-translate-x-full")
        }
        else {
            hs1.current.classList.remove("opacity-80", "rotate-45", "translate-y-3")
            hs2.current.classList.remove("opacity-0")
            hs3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-4")
            sidenav.current.classList.add("-translate-x-full")
        }
    }

    return (
        <>
            {/*===hamburger button========================*/}
            <button className='w-8 h-8 flex flex-col justify-between cursor-pointer hover:opacity-50 ml-4'
                onClick={() => { toggleSlideNav() }}>
                <div className='hamburger-slice' ref={hs1}></div>
                <div className='hamburger-slice' ref={hs2}></div>
                <div className='hamburger-slice' ref={hs3}></div>
            </button>

            {/*===Mobile SlideNav========================*/}
            <nav ref={sidenav} className='h-screen w-screen fixed top-[70px] -translate-x-full
                            bg-primary bg-opacity-95 transition duration-500 ease-in-out transform overflow-y-auto'>
                <ul className='flex flex-col justify-evenly items-center h-full -mt-12'
                    onClick={() => { toggleSlideNav() }}>
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
        </>
    )
}