import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ReviewContextProvider } from './components/context/ReviewContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ReviewContextProvider>
            <App />
        </ReviewContextProvider>
    </React.StrictMode>
);
