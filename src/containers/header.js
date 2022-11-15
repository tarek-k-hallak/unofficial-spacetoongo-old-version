import { NavBar, SlideNav } from '../components'

export default function HeaderContainer({ isSignedIn }) {
    return (
        <header className={'z-50 sticky top-0'}>
            <section className='flex flex-row items-center justify-center bg-white px-4'>
                <NavBar >
                    <NavBar.Logo />
                    <NavBar.Content />
                    <NavBar.SigninButton />
                </NavBar>

                {/* Mobile Slide Nav*/}
                <SlideNav >
                    <SlideNav.Container />
                </SlideNav>
            </section>
        </header>
    )
}
