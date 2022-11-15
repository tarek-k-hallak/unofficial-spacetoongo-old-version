import { Feature, CallToAction } from '../components'

export default function HeroContainer({ isSignedIn = false }) {
    return (
        <section className='relative overflow-hidden'>

            {isSignedIn ?
                <>
                    <CallToAction>
                        <CallToAction.Card>
                            <CallToAction.Title />
                            <CallToAction.SubTitle />
                            <CallToAction.Button />
                        </CallToAction.Card>
                    </CallToAction>
                    <div className='decor -mt-[200px]'>
                        <svg className='w-full h-[200px]'>
                            <ellipse cx="50%" cy="100%" rx="55%" ry="50%" fill='#f4f3ef' />
                        </svg>
                    </div>
                </>
                :
                <>
                    <Feature>
                        <Feature.Container>
                            <Feature.Lable style={`z-10 flex flex-col lg:w-[50%] w-[90%] text-center lg:text-right pt-32 lg:pt-16`}>
                                <Feature.Title />
                                <Feature.SubTitle />
                                <Feature.Button />
                            </Feature.Lable>

                            <Feature.Lable style={`z-0 flex flex-row w-[50%] gap-4 rotate-[25deg] absolute -top-40 lg:top-0 right-[750px] lg:right-0 opacity-30 lg:opacity-100`}>
                                <Feature.ImagesSlider />
                            </Feature.Lable>
                        </Feature.Container>
                    </Feature>
                    <div className='decor bg-primary'>
                        <svg className='w-full h-[200px] relative'>
                            <ellipse cx="50%" cy="100%" rx="55%" ry="100%" fill='#f4f3ef' />
                        </svg>
                    </div>
                </>
            }
        </section>
    )
}
