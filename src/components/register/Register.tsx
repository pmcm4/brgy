import React from 'react';
import styles from './register.module.scss';
import RegistrationForm from '../personal-form/RegistrationForm';
import { PFAddress } from '../pf-address/pf-address';
import axios from 'axios';
import { defaultApi } from '../../api';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className={styles['reg-main-container']}>
            <div className={styles['reg-card-container']}>
                <div className={styles['reg-logo-container']}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                        alt=""
                        className={styles['reg-logo']}
                    />
                    <span className={styles['reg-logo-text-container']}>
                        <span className={styles['reg-span']}>BARANGAY</span>
                        <span className={styles['reg-span']}>SAN ROQUE</span>
                    </span>
                </div>

                <span className={styles['reg-span']}>Register here!</span>
                <p className={styles['reg-p']}>
                    Join now to have access in certification and ID requests!
                </p>

                <RegistrationForm />

                <hr className={styles['reg-divider-foot']} />
                <Link to={'/login'} className={styles['reg-p-foot']}>
                    <p>Already have an account? Login here!</p>
                </Link>
            </div>
        </div>
    );
}

export default Register;
