import { HeroData } from '../fixtures/HomeData'

export default function Feature({ children, ...restProps }) {
    return (
        <div className='bg-primary min-h-[600px]'>
            {children}
        </div>
    )
}

Feature.Container = function FeatureContainer({ children, ...restProps }) {
    return (
        <div className="flex justify-center lg:justify-start m-auto max-w-[1200px]">
            {children}
        </div>
    )
}

Feature.Lable = function FeatureLable({ children, style, ...restProps }) {
    return (
        <div className={style}>
            {children}
        </div>
    )
}

Feature.Title = function FeatureTitle({ ...restProps }) {
    return (
        <h1 className='text-[40px] lg:text-[80px] leading-tight text-white font-bold lg:mt-[40px]'>
            {HeroData.title}
        </h1>
    )
}

Feature.SubTitle = function FeatureSubTitle({ ...restProps }) {
    return (
        <p className='text-lg text-white font-bold pt-8'>
            {HeroData.subtitle}
        </p>
    )
}


Feature.Button = function FeatureButton({ ...restProps }) {
    return (
        <button className='w-40 h-12 mx-auto bg-white text-primary font-bold text-lg lg:self-center self-end rounded-full mt-8'>
            {HeroData.buttonText}
        </button>
    )
}


Feature.ImagesSlider = function FeatureImagesSlider({ ...restProps }) {
    return (
        <>
            <img className='w-[225px] h-[1500px] slider1' src={HeroData.slide1.type} alt="slide1" />
            <img className='w-[225px] h-[1100px] slider2' src={HeroData.slide2.type} alt="slide2" />
            <img className='w-[225px] h-[950px] slider3' src={HeroData.slide3.type} alt="slide3" />
        </>
    )
}