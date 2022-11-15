import * as ROUTES from '../constants/routers'
import { useNavigate } from 'react-router-dom'

export default function Profile({ children, ...restProps }) {
    return (
        <section className="w-screen h-screen bg-black flex items-center">
            {children}
        </section>
    )
}

Profile.Container = function ProfileContainer({ children, ...restProps }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 max-w-[1200px] mx-auto">
            {children}
        </div>
    )
}

Profile.Card = function ProfileCard({ children, ...restProps }) {
    return (
        <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto text-white">
            {children}
        </div>
    )
}

Profile.Image = function ProfileImage({ picture, ...restProps }) {
    const navigate = useNavigate();
    return (
        <img className='w-full max-w-[150px] border-2 border-white cursor-pointer'
            src={picture.type} alt={"user"}
            onClick={() => navigate(ROUTES.BROWSE)} />
    )
}

Profile.Name = function ProfileName({ children, ...restProps }) {
    return (
        <h1 className='cursor-context-menu overflow-ellipsis text-2xl font-bold mt-4'>
            {children}
        </h1>
    )
}


Profile.Bundle = function Profilebundle({ children, ...restProps }) {
    return (
        <div className='cursor-context-menu'>
            {children}
        </div>
    )
}