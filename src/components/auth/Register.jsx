import React, { useState } from 'react'
import { signUp } from '@aws-amplify/auth';

export default function Register() {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleRegistration = async (event) => {
        event.preventDefault();

        try {
            const user = await signUp({
                username: formState.username,
                password: formState.password,
                options: {
                    userAttributes: {
                        email: formState.email
                    },
                }
            })
            console.log('User signed up:', user);
        } catch (error) {
            console.log('Error signing up:', error);
        }
    }

    return (
        <div className="login-container auth-container">
            <main className="auth-wrap">
                <div className="auth-title">
                    <h2>Sign up to Scripture Sharing</h2>
                </div>

                <div className="auth-form">
                    <form onSubmit={handleRegistration}>
                        <div className="form-input-wrap">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                value={formState.username}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-input-wrap">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                value={formState.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-input-wrap">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                value={formState.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-input-wrap">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className="form-control"
                                value={formState.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="sign-up button-black">Sign Up</button>

                        <p className="sign-up">
                            Already have an account? <a href="/login">Sign In</a>
                        </p>
                    </form>
                </div>

                {/* <button onClick={googleSignIn}>Google</button>
                <a href={`${apiUrl}/oauth2/authorization/cognito`}>Login with Cognito</a> */}
            </main>
        </div>
    )
}
