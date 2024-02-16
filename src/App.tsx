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

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <FAQ />

           </div>

    );
}

export default App;
