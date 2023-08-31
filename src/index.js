import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ThemeProvider from './contexts/Theme/ThemeProvider';
import StoreProvider from './contexts/StoreProvider/StoreProvider';

import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css'
import './config/i18n'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
                <ToastContainer />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);

