import React, { useState } from 'react'
import { signUp, signIn } from '@aws-amplify/auth';

export default function Login() {
    const apiUrl = import.meta.env.VITE_SERVER_API_URL;

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const signIn = async () => {
        try {
            const user = await signIn(login.email, login.password);
            console.log('User signed in:', user);
        } catch (error) {
            console.log('Error signing in:', error);
        }
    };

    const googleSignIn = () => {
        // federatedSignIn({ provider: 'Google' });
    };

    return (
        <div className="login-container auth-container">
            <main className="auth-wrap">
                <div className="auth-title">
                    <h2>Sign in to Scripture Sharing</h2>
                </div>

                <div className="auth-form">
                    <form>
                        <div className="form-input-wrap">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                value={login.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-input-wrap">
                            <label htmlFor="password" className="form-label">
                                Password
                                <a href="/reset-password" className="reset-password">Forget?</a>
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                value={login.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="sign-in button-black" onClick={signIn}>Sign In</button>

                        <p className="sign-up">
                            Don't have an account? <a href="/register">Sign Up</a>
                        </p>
                    </form>
                </div>

                <button onClick={googleSignIn}>Google</button>
                <a href={`${apiUrl}/oauth2/authorization/cognito`}>Login with Cognito</a>
            </main>
        </div>
    )
}
