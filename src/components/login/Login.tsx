import React from 'react';
import styles from './login.module.scss';

function Login() {
    return (
        <div className={styles['login-main-container']}>
            <div className={styles['login-card-container']}>
                <div className={styles['login-logo-container']}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                        alt=""
                        className={styles['login-logo']}
                    />
                    <span className={styles['login-logo-text-container']}>
                        <span className={styles['login-span']}>BARANGAY</span>
                        <span className={styles['login-span']}>SAN ROQUE</span>
                    </span>
                </div>

                <span className={styles['login-span']}>Welcome ka-Barangay!</span>
                <p className={styles['login-p']}>
                    Do not share your login credetials to anyone. Your account contains sensitive
                    personal information.
                </p>

                <input
                    className={styles['login-input']}
                    placeholder="Username"
                    name="username"
                    //onChange={handleOnChange}
                />
                <input
                    className={styles['login-input']}
                    placeholder="Password"
                    type="password"
                    name="password"
                    //onChange={handleOnChange}
                />

                <button
                    className={styles['login-btn']} //onClick={handleLogin}
                >
                    Login
                </button>
                <button
                    className={styles['reg-btn']} //onClick={handleLogin}
                >
                    Register
                </button>

                <hr className={styles['login-divider-foot']} />
                <p className={styles['login-p-foot']}>Forgot password?</p>
            </div>
        </div>
    );
}

export default Login;
