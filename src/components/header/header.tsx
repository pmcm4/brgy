import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { defaultApi } from '../../api';
import { paperClasses } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { ScrollEffectContext } from '../context/scrollEffectContext';
import { useAxios, useLogoutAxios } from '../utils/useAxios';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Header = ({ className }: HeaderProps) => {
    const authContext = useContext(AuthContext);
    const scrollEffectContext = useContext(ScrollEffectContext);
    const [checkExistUser, setCheckExistUser] = useState(false);
    const [userName, setUsername] = useState('');

    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();

    const handleMouseOver = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setShowDropDown(true);
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setShowDropDown(false);
    };

    let useJWTAxios = useLogoutAxios();

    useEffect(() => {
        if (authContext?.currentUser) {
            setCheckExistUser(true);
            const username = authContext.currentUser;

            setUsername(username);
        }
    }, [authContext?.currentUser]);

    const handleLogout = async () => {
        try {
            await useJWTAxios
                .post(
                    `${defaultApi}/api/auth/logout`,
                    {},
                    {
                        headers: { authorization: 'Bearer ' + authContext?.accessToken },
                        withCredentials: true,
                    }
                )
                .then(() => {
                    authContext?.setLogoutSignal(true);
                    window.location.reload();
                });
        } catch (error: any) {
            console.log(error);
        }
    };

    const handleScrollAbout = async () => {
        await navigate('/home');
        scrollEffectContext?.aboutRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.left}>
                <img
                    src="https://storage.googleapis.com/barangay-san-roque-public/logo_sln6bp.png"
                    alt="brgy-logo"
                    className={styles.logo}
                />
            </div>

            <div className={styles.right}>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <span className={styles['menu-items']}>Home</span>
                </Link>

                <span className={styles['menu-items']} onClick={handleScrollAbout}>
                    About
                </span>

                <Link to="/certificates" style={{ textDecoration: 'none' }}>
                    <span className={styles['menu-items']}>Services</span>
                </Link>
                <Link to="/faq" style={{ textDecoration: 'none' }}>
                    <span className={styles['menu-items']}>FAQ</span>
                </Link>

                {checkExistUser === false ? (
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <span className={styles['menu-items']}>Login</span>
                    </Link>
                ) : (
                    <div className={styles['profile-drop-down']}>
                        <span
                            className={styles['menu-items']}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            {userName}
                        </span>
                        <div
                            className={
                                showDropDown === true
                                    ? styles['profile-drop-down-items']
                                    : styles['hide-drop-down']
                            }
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <Link to={`/profile/${userName}`} style={{ textDecoration: 'none' }}>
                                <span className={styles['drop-down-item']}>My profile</span>
                            </Link>
                            <span className={styles['drop-down-item']} onClick={handleLogout}>
                                Logout
                            </span>
                        </div>
                    </div>
                )}

                <span className={styles['menu-items']}>Get in Touch →</span>
            </div>
        </div>
    );
};

export default Header;
