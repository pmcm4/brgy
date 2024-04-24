import React from 'react';
import styles from './home.module.scss';

interface menuCardProps {
    cardTitle: string;
    cardSubText: string;
    cardImg: string;
}

function menuCard({ cardTitle, cardSubText, cardImg }: menuCardProps) {
    return (
        <div className={styles.card}>
            <img src={cardImg} alt="" className={styles['card-image']} />
            <div className={styles['gradient-card']}>
                <span className={styles['card-text']}>{cardTitle}</span>
                <span className={styles['card-subtext']}>{cardSubText}</span>
            </div>
        </div>
    );
}

export default menuCard;
