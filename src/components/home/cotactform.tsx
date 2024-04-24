import React from 'react';
import styles from './home.module.scss';

function cotactform() {
    return (
        <div className={styles['contact-form']}>
            <span className={styles['contact-us-title']}>Contact Us</span>
            <span className={styles['contact-us-desc']}>text</span>
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
                <span className={styles['leave-a-msg']}>Leave us a message...</span>
                <textarea className={styles['message-input']} />
            </div>
            <button className={styles['contact-submit-btn']}>Submit</button>
        </div>
    );
}

export default cotactform;
