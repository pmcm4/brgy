import React, { useRef } from 'react';
import styles from './layout.module.scss';
import { Header } from '../header/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';

function Layout() {
    const aboutRef = useRef(null);

    return (
        <div className={styles['App']}>
            <Header />
            <div className={styles['body-content']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
