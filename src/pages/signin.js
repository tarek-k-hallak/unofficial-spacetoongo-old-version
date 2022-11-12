import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../context/firebase'


import { HeaderContainer, FooterContainer } from '../containers'
import * as ROUTES from '../constants/routers'
import { SignInData } from '../fixtures/SignInData'

export default function SignIn() {
    const navigate = useNavigate();
    const submitButton = useRef(null)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const isValid = formData.email === "" || formData.password === ""

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        submitButton.current.innerText = SignInData.SignInButtonLoading
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password)
            navigate(ROUTES.BROWSE)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='font-primary bg-primary '>
            <HeaderContainer />

            <div className='relative w-[90%] m-auto max-w-[1000px] pt-[35px] -mb-[200px]'>
                <section className='flex justify-between m-auto bg-background rounded-[50px] border-2 border-white'>
                    <div className='flex flex-col mx-auto w-[400px] justify-between h-[600px]'>
                        <form onSubmit={handleSignIn} method="POST">
                            <div className='flex flex-col items-center justify-start mt-16'>
                                <h1 className='text-center text-primary font-bold text-3xl lg:text-4xl mb-8'>{SignInData.title}</h1>
                                <input className='p-3 mb-4 w-[90%] rounded-full bg-background border-primary outline-none border-2 font-semibold text-right text-sm lg:text-lg'
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder={SignInData.emailInputHolder} />
                                <input className='p-3 mb-4 w-[90%] rounded-full bg-background border-primary outline-none border-2 font-semibold text-right text-sm lg:text-lg'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder={SignInData.passwordInputHolder} />
                                <button className='font-bold text-sm lg:text-lg w-[125px] 
                                    lg:w-[170px] h-[40px] lg:h-[48px] rounded-full mt-8
                                    text-white bg-gradient-to-t from-primary to-accent ring ring-primary ring-offset-2 hover:opacity-80 transition duration-300'
                                    type="submit"
                                    disabled={isValid}
                                    ref={submitButton}
                                    value={"test"}>
                                    {SignInData.SignInButton}
                                </button>
                            </div>
                        </form>

                        <hr className='border-primary border-t-2 -my-12' />

                        <div className='z-10 flex flex-row mx-auto w-[90%]'>
                            <button className='w-[30%] h-10 bg-background border-primary text-primary font-semibold border-2 text-center text-sm lg:text-lg rounded-full hover:bg-primary hover:text-white transform duration-200 mr-2'>
                                {SignInData.facebook}
                            </button>
                            <button className='w-[30%] h-10 bg-background border-primary text-primary font-semibold border-2 text-center text-sm lg:text-lg rounded-full hover:bg-primary hover:text-white transform duration-200 mr-2'>
                                {SignInData.google}
                            </button>
                            <button className='w-[30%] h-10 bg-background border-primary text-primary font-semibold border-2 text-center text-sm lg:text-lg rounded-full hover:bg-primary hover:text-white transform duration-200'>
                                {SignInData.apple}
                            </button>
                        </div>
                        <div className='z-10 mb-6 text-right mx-auto'>
                            <button className='text-primary font-bold lg:text-lg text-sm hover:opacity-80 transition duration-300'>{SignInData.signUpButton}</button>
                            <span className='lg:text-lg text-sm'>{SignInData.signUpText} </span>
                        </div>
                    </div>
                    <div className='hidden lg:block h-[600px]'>
                        <img className="rounded-r-[50px] w-full h-full" src={SignInData.SignInImage.type} alt="sign in" />
                    </div>
                </section>
            </div>

            <FooterContainer decor={false} />
        </div>
    )
}