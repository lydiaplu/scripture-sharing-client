import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal'

import { Provider } from 'react-redux'
import store from './store/index.js'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.js'
import './index.css'

Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
)
