import React from 'react'
import styles from './messagemodal.module.scss';
import PaidIcon from '@mui/icons-material/Paid';


interface feeModalType {

    handleModalFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void;

}

function FeeModal({handleModalFunc}: feeModalType) {
    return (
        <div className={styles['fee-modal-container']}>
            <div className={styles['fee-modal-box']}>
                <div className={styles['fee-message-inner-box']}>
                    <PaidIcon className={styles['mui-fee-icon']} />{' '}
                    <span style={{ width: '200px', textAlign: 'center', marginBottom: '20px' }}>
                         Fee Reminder
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
                        The certificate you are about to request requires a <strong>PHP 50.00</strong> processing fee. <br/> <br/>Make sure to ready your payment on the time the certificate is delivered or picked-up.
                    </span>
        
                        <button style={{ marginTop: '20px' }} onClick={handleModalFunc}>
                            I understand
                        </button>

                </div>
            </div>
        </div>
    );
}

export default FeeModal