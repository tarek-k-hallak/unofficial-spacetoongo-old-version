import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routers'


export default function NavBar({ children, ...restProps }) {
    return (
        <div className={`flex flex-row-reverse items-center justify-center lg:justify-around   w-full px-8 max-h-[70px]`}>
            {children}
        </div>
    )
}


NavBar.Logo = function HeaderLogo({ ...restProps }) {
    return (
        <div className='z-40 mt-[40px] pt-[2px] lg:mt-[55px] lg:pt-[20px]'>
            <Link to={ROUTES.HOME} >
                <img className="w-[120px]" src="https://spacetoongo.com/assets/img/logo.svg" alt="STGO"></img>
            </Link>
        </div>
    )
}

NavBar.Content = function HeaderContent({ ...restProps }) {
    return (
        <nav className={`hidden justify-between items-center w-full lg:flex lg:w-auto`}  >
            <ul className='flex flex-col-reverse md:flex-row-reverse p-4 mt-4 md:mt-0'>
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
    )
}

NavBar.SigninButton = function HeaderSigninButton({ ...restProps }) {
    return (
        <button className={`hidden lg:block font-bold text-sm w-[135px] h-[35px] rounded-full hover:opacity-80 transition duration-300 bg-primary text-white`}>
            <Link to={ROUTES.SIGN_IN}>
                تسجيل الدخول
            </Link>
        </button>
    )
}