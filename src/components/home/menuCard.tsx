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
                <div className={styles['card-text-div']}>
                    <span className={styles['card-text']}>{cardTitle}</span>
                    <p className={styles['card-subtext']}>{cardSubText}</p>
                </div>
            </div>
        </div>
    );
}

export default menuCard;
