import React from 'react';
import styles from './medicine.module.scss';
import MedItem from './MedItem';

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
                <MedItem medName="Medicine 1" />
                <MedItem medName="Medicine 2" />
                <MedItem medName="Medicine 3" />
                <MedItem medName="Medicine 4" />
                <MedItem medName="Medicine 4" />
                <MedItem medName="Medicine 4" />
            </div>
        </div>
    );
}

export default MedicineForm;
