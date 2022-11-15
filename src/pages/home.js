import {
    HeaderContainer,
    FooterContainer,
    HeroContainer
} from '../containers'


export default function Home() {

    return (
        <div className='font-primary bg-background'>
            <HeaderContainer />
            <HeroContainer />
            <main className='relative max-w-[1200px] m-auto bg-white -my-[200px] h-[500px] '>
                <section className='about--app ' >

                </section>
                <section className='about--app' >

                </section>
                <section className='about--app' >

                </section>
                <section className='about--app' >

                </section>
            </main>
            <FooterContainer />
        </div>
    )
}