import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Amplify } from 'aws-amplify'
import awsmobile from "./aws-exports";
import { GlobalStyle } from './styles/Global.styles'

import Home from './components/home/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import LoginCallback from './components/auth/LoginCallback'

Amplify.configure(awsmobile);

function App() {
    return (
        <>
            <GlobalStyle />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/auth/callback" element={<LoginCallback />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
