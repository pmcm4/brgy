import React from 'react';
import styles from './home.module.scss';

export interface personCardProps {
    title: string;
    name: string;
    desc: string;

    img: string;
}

function personCard({ title, name, desc, img }: personCardProps) {
    return (
        <div className={styles['border-carousel-divider']}>
            <div className={styles['carousell-cards']}>
                <img src={img} alt="" className={styles.kgwd} />
                <span className={styles['kgwd-title']}>{title}</span>
                <span className={styles['kgwd-name']}>{name}</span>
                <span className={styles['kgwd-desc']}>{desc}</span>
            </div>
        </div>
    );
}

export default personCard;
