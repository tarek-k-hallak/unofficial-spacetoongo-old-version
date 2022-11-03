import React from 'react';
import { Header, Footer, Hero } from '../containers'

export default function Home() {

    return (
        <main className='relative font-primary bg-background'>
            <Header />
            <Hero />
            <div className='relative max-w-[1200px] m-auto bg-white -my-[200px] h-[500px] '>
                <section className='about--app ' >

                </section>
                <section className='about--app' >

                </section>
                <section className='about--app' >

                </section>
                <section className='about--app' >

                </section>
            </div>
            <Footer />
        </main>
    )
}