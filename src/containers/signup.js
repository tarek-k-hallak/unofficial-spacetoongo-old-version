import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../context/firebase'

import { Form } from '../components'
import * as ROUTES from '../constants/routers'


export function SignUpContainer() {
    const history = useHistory();
    const [error, setError] = useState("")
    const [formData, setFromData] = useState({
        firstName: "",
        email: "",
        password: "",
        rememberMe: false
    })
    const isValid = formData.email === "" || formData.password === ""

    const handleChange = function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFromData(prevFrom => ({
            ...prevFrom,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const userCredntial = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            console.log(userCredntial.user)
            history.push(ROUTES.SIGN_IN)
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

    return (
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>Error</Form.Error>}

            <Form.Base onSubmit={handleSignUp} method="POST">
                <Form.Input
                    name="firstName"
                    type="name"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Form.Input
                    name="email"
                    type="email"
                    placeholder="Email or phone number"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Form.Button
                    type="submit"
                    disabled={isValid}>
                    Sign Up
                </Form.Button>
                <Form.Pane>
                    <Form.Label>
                        <Form.Input
                            name="rememberMe"
                            type="checkbox"
                            value={formData.rememberMe}
                            onChange={handleChange}
                        />
                        Remember me
                    </Form.Label>
                    <Form.Label>
                        <Form.Link to="loginHelp">Need help?</Form.Link>
                    </Form.Label>
                </Form.Pane>
            </Form.Base>

            <Form.Text>
                Already a user?
                <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <Form.Link to="/learnMore"> Learn more. </Form.Link>
            </Form.TextSmall>
        </Form>
    )
}