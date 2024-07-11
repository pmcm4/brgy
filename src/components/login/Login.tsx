import React, { useContext, useEffect, useState } from 'react';
import styles from './login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import FailedModal from '../message-modals/FailedModal';

function Login() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [failModal, setFailModal] = useState(false);
    const [failedMsg, setFailedMsg] = useState('');

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
    ) => {
        try {
            e.preventDefault();
            const sendDetails = await authContext?.login(inputs);
        } catch (error: any) {
            setFailModal(true);
            if (error.request.status === 404) {
                setFailedMsg('User not found');
            } else if (error.request.status === 400) {
                setFailedMsg("Username or password doesn't match");
            } else {
                setFailedMsg('Server error');
            }
        }
    };

    useEffect(() => {
        if (authContext?.accessToken) {
            navigate('/home');
        }
    }, [authContext?.accessToken]);

    const handleFailedModal = () => {
        setFailModal(false);
    };

    return (
        <div className={styles['login-main-container']}>
            <form className={styles['login-card-container']} onSubmit={handleLogin}>
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
                <span className={styles['login-p']}>
                    Do not share your login credetials to anyone.
                    <br />
                    Your account contains sensitive personal information.
                </span>

                <input
                    className={styles['login-input']}
                    placeholder="Username"
                    name="username"
                    required
                    onChange={handleOnChange}
                />
                <input
                    className={styles['login-input']}
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                    onChange={handleOnChange}
                />

                <button className={styles['login-btn']} onSubmit={handleLogin}>
                    Login
                </button>
                <Link to={'/register'}>
                    <button
                        className={styles['reg-btn']} //onClick={handleLogin}
                    >
                        Register
                    </button>
                </Link>

                <hr className={styles['login-divider-foot']} />
                <div className={styles['login-p-foot']}>
                    <Link to={'/home'} style={{ width: 'unset', color: 'gray' }}>
                        <p id={styles['back-home']}>Back to home</p>
                    </Link>
                    <p>Forgot password?</p>
                </div>
            </form>
            {failModal === true && (
                <FailedModal
                    title="Login"
                    message={failedMsg}
                    buttonTitle="Try Again"
                    buttonLink="/login"
                    tryAgainBtn={handleFailedModal}
                />
            )}
        </div>
    );
}

export default Login;
