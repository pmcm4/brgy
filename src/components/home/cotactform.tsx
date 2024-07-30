import React, { useContext } from 'react';
import styles from './home.module.scss';
import { LanguageContext } from '../context/languageContext';

function cotactform() {
    const languageContext = useContext(LanguageContext);
    return (
        <div className={styles['contact-form']}>
            <span className={styles['contact-us-title']}>Contact Us</span>

            <div className={styles['names-container']}>
                <div className={styles['fname-container']}>
                    <span className={styles['name-span']}>First Name*</span>
                    <input className={styles['fname-input']} />
                </div>
                <div className={styles['lname-container']}>
                    <span className={styles['name-span']}>Last Name*</span>
                    <input className={styles['lname-input']} />
                </div>
            </div>
            <div className={styles['email-container']}>
                <span className={styles['email-title-contact']}>Email * </span>
                <input className={styles['email-input']} />
            </div>
            <div className={styles['message-container']}>
                {languageContext?.selectEnglish ? (
                    <span className={styles['leave-a-msg']}>Leave us a message...</span>
                ) : (
                    <span className={styles['leave-a-msg']}>Ilagay ang inyong mensahe...</span>
                )}
                <textarea className={styles['message-input']} />
            </div>
            {languageContext?.selectEnglish ? (
                <button className={styles['contact-submit-btn']}>Submit</button>
            ) : (
                <button className={styles['contact-submit-btn']}>I-submit</button>
            )}
        </div>
    );
}

export default cotactform;
