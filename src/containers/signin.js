import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../context/firebase'

import { Form } from '../components'
import * as ROUTES from '../constants/routers'

export function SignInContainer() {
    const history = useHistory();
    const [error, setError] = useState(false)
    const [formData, setFromData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const isValid = formData.email === "" || formData.password === ""
    // console.log(history)

    const handleChange = function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFromData(prevFrom => ({
            ...prevFrom,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const userCredntial = await signInWithEmailAndPassword(auth, formData.email, formData.password)
            history.push(ROUTES.BROWSE)
        } catch (error) {
            console.log(error)
            setError(error.meesage)
        }
    }

    return (
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>Error</Form.Error>}

            <Form.Base onSubmit={handleSignIn} method="POST">
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
                    Sign In
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
                New To Netflix?
                <Form.Link to="/signup"> Sign up now </Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <Form.Link to="/learnMore"> Learn more. </Form.Link>
            </Form.TextSmall>
        </Form>
    )
}