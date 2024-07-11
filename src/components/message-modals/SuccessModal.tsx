import React from 'react';
import styles from './messagemodal.module.scss';
import { Link } from 'react-router-dom';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

interface SuccessModalProps {
    title: string;
    message: string;
    buttonLink?: string;
    buttonTitle: string;
    resetStates?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SuccessModal({ title, message, buttonLink, buttonTitle, resetStates }: SuccessModalProps) {
    return (
        <div className={styles['success-modal-container']}>
            <div className={styles['success-modal-box']}>
                <div className={styles['success-message-inner-box']}>
                    <DoneAllOutlinedIcon className={styles['mui-success-icon']} />{' '}
                    <span style={{ width: '200px', textAlign: 'center', marginBottom: '20px' }}>
                        {title} Success!
                    </span>
                </div>

                <div className={styles['inner-modal-message-with-btn']}>
                    <span
                        style={{
                            textAlign: 'center',
                            fontWeight: '500',
                            fontSize: '18px',
                        }}
                    >
                        {message}
                    </span>
                    <Link to={buttonLink!}>
                        <button style={{ marginTop: '20px' }} onClick={resetStates}>
                            {buttonTitle}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;
