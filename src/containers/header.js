import { NavBar, SlideNav } from '../components'

export default function HeaderContainer({ isSignedIn }) {
    return (
        <header className={'z-50 sticky top-0'}>
            <section className='flex flex-row-reverse items-center justify-center'>
                <NavBar isSignedIn={isSignedIn}>
                    <NavBar.Logo isSignedIn={isSignedIn} />
                    <NavBar.Content isSignedIn={isSignedIn} />
                    <NavBar.SigninButton isSignedIn={isSignedIn} />
                </NavBar>

                {/* Mobile Slide Nav*/}
                <SlideNav >
                    <SlideNav.Container />
                </SlideNav>
            </section>
        </header>
    )
}
