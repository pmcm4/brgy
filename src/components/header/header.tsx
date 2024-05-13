import classNames from 'classnames';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';

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

    const username = JSON.parse(String(localStorage.getItem('currentUser')));

    useEffect(() => {
        if (authContext?.currentUser) {
            setCheckExistUser(true);
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
                    <Link to={`/profile/${username.username}`} style={{ textDecoration: 'none' }}>
                        <span className={styles['menu-items']}>Profile</span>
                    </Link>
                )}

                <span className={styles['menu-items']}>Get in Touch →</span>
            </div>
        </div>
    );
};
