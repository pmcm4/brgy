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

    return (        
        <BrowserRouter>
        <Header/>
        <Routes>
           <Route path='/' Component={Home}/>
         </Routes>
         <Routes>
           <Route path='/certificates' Component={Certificates}/>
         </Routes>

       </BrowserRouter>   
    );
}

export default App;
