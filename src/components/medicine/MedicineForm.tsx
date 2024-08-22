import React from 'react';
import styles from './medicine.module.scss';

function MedicineForm() {
    return (
        <div id={styles['main-card']}>
            <h1>Choose a Medicine</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam illum
                iusto? Amet rerum ad blanditiis distinctio repellendus possimus inventore
                accusantium praesentium consequuntur animi, quo suscipit quos repudiandae neque
                veniam.
            </p>
            <hr />

            <div id={styles['medicine-cards-container']}>
                <div className={styles['medicine-cards']}>
                    <input type="checkbox" />
                    <h3>AMLODIPINE</h3>
                    <input type="number" defaultValue={0} />
                </div>
                <div className={styles['medicine-cards']}>
                    <input type="checkbox" />
                    <h3>ASPIRIN</h3>
                    <input type="number" defaultValue={0} />
                </div>
                <div className={styles['medicine-cards']}>
                    <input type="checkbox" />
                    <h3>ATORVASTATIN</h3>
                    <input type="number" defaultValue={0} />
                </div>
            </div>
        </div>
    );
}

export default MedicineForm;
