import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ReviewContextProvider } from './components/context/ReviewContext';
import { AuthContextProvider } from './components/context/authContext';
import { ScrollEffectContextProvidder } from './components/context/scrollEffectContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ReviewContextProvider>
                <ScrollEffectContextProvidder>
                    <App />
                </ScrollEffectContextProvidder>
            </ReviewContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
