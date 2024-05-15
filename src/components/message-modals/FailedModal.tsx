import React from 'react';
import { Link } from 'react-router-dom';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import styles from './messagemodal.module.scss';

interface FailedModalProps {
    title: string;
    message: string;
    buttonLink?: string;
    buttonTitle: string;
    tryAgainBtn?: () => void;
}

function FailedModal({ title, message, buttonLink, buttonTitle, tryAgainBtn }: FailedModalProps) {
    return (
        <div className={styles['failed-modal-container']}>
            <div className={styles['failed-modal-box']}>
                <div className={styles['failed-message-inner-box']}>
                    <ErrorOutlineOutlinedIcon className={styles['mui-failed-icon']} />{' '}
                    <span style={{ width: '200px', textAlign: 'center', marginBottom: '20px' }}>
                        {title} failed
                    </span>
                </div>

                <div className={styles['inner-modal-message-with-btn']}>
                    <span
                        style={{
                            width: '280px',
                            textAlign: 'center',
                            fontWeight: '500',
                            fontSize: '18px',
                        }}
                    >
                        {message}
                    </span>
                    <Link to={`${buttonLink}`}>
                        <button style={{ marginTop: '20px' }} onClick={tryAgainBtn}>
                            {buttonTitle}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FailedModal;
