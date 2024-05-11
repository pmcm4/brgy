import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Home } from './components/home/home';
import { FAQ } from './components/faq/faq';
import { Certificates } from './components/certificates/certificates';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Layout from './components/layout/Layout';
import Register from './components/register/Register';

function App() {
    const questions: { faqid: number; faqTitle: string; answer: string }[] = [
        {
            faqid: 1,
            faqTitle: 'FAQ1',
            answer: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
        },
        { faqid: 2, faqTitle: 'FAQ2', answer: 'hello' },
        { faqid: 3, faqTitle: 'FAQ3', answer: 'hello' },
        { faqid: 4, faqTitle: 'FAQ4', answer: 'hello' },
        { faqid: 5, faqTitle: 'FAQ5', answer: 'hello' },
        { faqid: 6, faqTitle: 'FAQ6', answer: 'hello' },
        { faqid: 7, faqTitle: 'FAQ7', answer: 'hello' },
        { faqid: 8, faqTitle: 'FAQ8', answer: 'hello' },
        { faqid: 9, faqTitle: 'FAQ9', answer: 'hello' },
        { faqid: 10, faqTitle: 'FAQ10', answer: 'hello' },
    ];
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/home', element: <Home /> },
                { path: '/certificates', element: <Certificates /> },
                {
                    path: '/faq',
                    element: (
                        <FAQ
                            questions={questions}
                            heading="Frequently Asked Questions"
                            subheading="lorem ipsum"
                        />
                    ),
                },
            ],
        },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
