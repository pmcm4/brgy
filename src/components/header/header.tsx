import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { defaultApi } from '../../api';
import { paperClasses } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const authContext = useContext(AuthContext);
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

    const axiosJWT = axios.create();

    const parsedObj = JSON.parse(String(localStorage.getItem('currentUser')));

    axiosJWT.interceptors.request.use(
        async (config) => {
            const parse = parsedObj.accessToken;
            let currentDate = new Date();

            const decodedToken = jwtDecode(String(parse));

            if (decodedToken.exp! * 1000 < currentDate.getTime()) {
                const data = await handleRefreshToken();
                config.headers['authorization'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    const handleLogout = async () => {
        try {
            const token = {
                token: parsedObj.accessToken,
            };

            await axiosJWT.post(`${defaultApi}/api/auth/logout`, token, {
                headers: { authorization: 'Bearer ' + parsedObj.accessToken },
            });
            localStorage.clear();
            window.location.reload();
        } catch (error: any) {
            console.log(error.meesage);
        }
    };

    const handleRefreshToken = async () => {
        try {
            const parse = JSON.parse(String(localStorage?.getItem('currentUser')));
            const token = {
                token: parse.refreshToken,
            };
            const res = await axios.post(`${defaultApi}/api/auth/refreshToken`, token);
            const refreshedToken = {
                username: parse.username,
                isAdmin: parse.isAdmin,
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
            };

            localStorage.setItem('currentUser', JSON.stringify(refreshedToken));

            return res.data;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (authContext?.currentUser) {
            setCheckExistUser(true);
            const username = JSON.parse(String(localStorage.getItem('currentUser')));

            setUsername(username?.username);
        }
    });
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.left}>
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                    alt=""
                    className={styles.logo}
                />
            </div>

            <div className={styles.right}>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <span className={styles['menu-items']}>Home</span>
                </Link>
                <span className={styles['menu-items']}>About</span>
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
