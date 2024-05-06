import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavigationCertificateContextProvider } from './components/context/certificate-nav-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <NavigationCertificateContextProvider>
            <App />
        </NavigationCertificateContextProvider>
    </React.StrictMode>
);
