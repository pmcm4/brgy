import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { FAQ } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import { Certificates } from './components/certificates/certificates';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
            <Routes>
                <Route path="/certificates" Component={Certificates} />
            </Routes>
            <Routes>
                <Route
                    path="/faq"
                    Component={() => (
                        <FAQ
                            questions={questions}
                            heading="Frequently Asked Questions"
                            subheading="Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions"
                        />
                    )}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
