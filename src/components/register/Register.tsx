import React from 'react';
import styles from './register.module.scss';
import RegistrationForm from '../personal-form/RegistrationForm';
import { PFAddress } from '../pf-address/pf-address';
import axios from 'axios';
import { defaultApi } from '../../api';

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
                    Please double check your information as this will serve as your residency
                    details in our Database.
                </p>

                <RegistrationForm />

                <hr className={styles['reg-divider-foot']} />
                <p className={styles['reg-p-foot']}>Already have an account? Login here!</p>
            </div>
        </div>
    );
}

export default Register;
