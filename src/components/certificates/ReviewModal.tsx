import React, { useContext } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';

function ReviewModal() {
    const reviewContext = useContext(ReviewContext);

    console.log(reviewContext?.personalForm);

    return <div className={styles['review-modal-container']}>ReviewModal</div>;
}

export default ReviewModal;
