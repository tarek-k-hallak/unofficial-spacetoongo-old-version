import { HeroData } from '../fixtures/BrowserData'

export default function CallToAction({ children, ...restProps }) {
    return (
        <div className="flex justify-end items-center hero-background-image h-[600px]">
            {children}
        </div>
    )
}

CallToAction.Card = function CallToActionCard({ children, ...restProps }) {
    return (
        <div className="hidden lg:flex flex-col w-[30%] mr-4 text-right items-end text-white ">
            {children}
        </div>
    )
}


CallToAction.Title = function CallToActionTitle({ ...restProps }) {
    return (
        <h1 className="font-bold text-4xl">
            {HeroData.title}
        </h1>
    )
}

CallToAction.SubTitle = function CallToActionSubtitle({ ...restProps }) {
    return (
        <p className='mt-8 text-xl'>
            {HeroData.subtitle}
        </p>
    )
}

CallToAction.Button = function CallToActionButton({ ...restProps }) {
    return (
        <button className='w-24 h-10 bg-primary rounded-xl mt-4 hover:bg-opacity-50'>
            {HeroData.buttonText}
        </button>
    )
}