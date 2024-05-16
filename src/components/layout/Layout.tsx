import React, { forwardRef, useContext, useEffect, useRef } from 'react';
import styles from './layout.module.scss';
import Header from '../header/header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { AuthContext } from '../context/authContext';

function Layout() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home');
        }
    });

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
