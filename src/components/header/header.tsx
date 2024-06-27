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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useQuery } from 'react-query';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

interface DecodedIDType {
    username: string;
}

const Header = ({ className }: HeaderProps) => {
    const authContext = useContext(AuthContext);
    const scrollEffectContext = useContext(ScrollEffectContext);
    const [checkExistUser, setCheckExistUser] = useState(false);
    const [userName, setUsername] = useState('');

    const [showDropDown, setShowDropDown] = useState(false);
    const [showHamburger, setHamburger] = useState(false);
    const [showHamburgerDropDown, setShowHamburgerDropDown] = useState(false);

    const navigate = useNavigate();

    const handleMouseOver = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setShowDropDown(true);
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setShowDropDown(false);
    };

    //const decodedJWT = jwtDecode<DecodedIDType>(String(authContext?.accessToken));

    let useJWTAxios = useLogoutAxios();

    const handleLogout = async () => {
        try {
            await useJWTAxios
                .post(
                    `${process.env.API_DOMAIN}/api/auth/logout`,
                    {},
                    {
                        headers: { authorization: 'Bearer ' + authContext?.accessToken },
                        withCredentials: true,
                    }
                )
                .then(() => {
                    console.log('called');
                    authContext?.setLogoutSignal(true);
                    window.location.reload();
                });
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (authContext?.accessToken) {
            setCheckExistUser(true);
            const userNameDecoded = jwtDecode<DecodedIDType>(
                String(authContext?.accessToken)
            ).username;
            const getFirstName = async () => {
                await axios
                    .get(
                        `${process.env.API_DOMAIN}/api/requestData/getFirstName/${userNameDecoded}`
                    )
                    .then((data) => {
                        setUsername(data.data);
                    });
            };
            getFirstName();
        }
    });

    const handleScrollAbout = async () => {
        navigate('/home');
        scrollEffectContext?.aboutRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    const handleHamburger = () => {
        setHamburger(true);
    };

    const handleCloseHamburger = () => {
        setHamburger(false);
    };

    const handleHamburgerDropDown = () => {
        if (showHamburgerDropDown === true) {
            setShowHamburgerDropDown(false);
        } else {
            setShowHamburgerDropDown(true);
        }
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
                            <Link
                                to={`/profile/${authContext?.currentUser}`}
                                style={{ textDecoration: 'none' }}
                            >
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

            <span className={styles['hamburger']} onClick={handleHamburger}>
                <MenuIcon className={styles['hamburger-icon']} />
            </span>
            {showHamburger === false ? (
                <div className={styles['hamburger-menu-hidden']}></div>
            ) : (
                <div className={styles['hamburger-menu']}>
                    <span className={styles['hamburger-close-btn']} onClick={handleCloseHamburger}>
                        <CloseIcon className={styles['hamburger-close-icon']} />
                    </span>
                    <Link to="/home" style={{ textDecoration: 'none', width: '100%' }}>
                        <span className={styles['menu-items']} onClick={handleCloseHamburger}>
                            Home
                        </span>
                    </Link>
                    <span
                        className={styles['menu-items']}
                        onClick={() => {
                            handleCloseHamburger();
                            handleScrollAbout();
                        }}
                    >
                        About
                    </span>
                    <Link to="/certificates" style={{ textDecoration: 'none', width: '100%' }}>
                        <span className={styles['menu-items']} onClick={handleCloseHamburger}>
                            Services
                        </span>
                    </Link>
                    <Link to="/faq" style={{ textDecoration: 'none', width: '100%' }}>
                        <span className={styles['menu-items']} onClick={handleCloseHamburger}>
                            FAQ
                        </span>
                    </Link>
                    {checkExistUser === false ? (
                        <Link to="/login" style={{ textDecoration: 'none', width: '100%' }}>
                            <span className={styles['menu-items']} onClick={handleCloseHamburger}>
                                Login
                            </span>
                        </Link>
                    ) : (
                        <div className={styles['profile-drop-down']}>
                            <span
                                className={styles['menu-items']}
                                onClick={handleHamburgerDropDown}
                            >
                                <span className={styles['hamburger-username-span']}>
                                    {userName}
                                </span>
                                {showHamburgerDropDown === false ? (
                                    <KeyboardArrowDownIcon />
                                ) : (
                                    <KeyboardArrowUpIcon />
                                )}
                            </span>
                            {showHamburgerDropDown === false ? (
                                <div className={styles['hamburger-drop-down-profile-hidden']}></div>
                            ) : (
                                <div className={styles['hamburger-drop-down-profile']}>
                                    {' '}
                                    <Link
                                        to={`/profile/${authContext?.currentUser}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <span className={styles['drop-down-item']}>My profile</span>
                                    </Link>
                                    <span
                                        className={styles['drop-down-item']}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                    <span className={styles['menu-items']}>Get in Touch →</span>
                </div>
            )}
            {showHamburger === true ? (
                <div className={styles['hamburger-background']} onClick={handleCloseHamburger} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Header;
