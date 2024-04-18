import classNames from 'classnames';
import styles from './personal-form.module.scss';

export interface PersonalFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonalForm = ({ className }: PersonalFormProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles['header-perso']}>Personal Information</h1>
        <span className={styles['perso-subhead']}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        <button className={styles['existing-profile']}>Existing Profile</button>
        <div className={styles['input-form']}>
            <label className={styles['label-forms']}>First Name:</label>
            <br />
            <input className={styles['input-names']} placeholder="Juan" />
            <br />
            <label className={styles['label-forms']}>Middle Name:</label>
            <br />
            <input className={styles['input-names']} placeholder="Santos" />
            <br />
            <label className={styles['label-forms']}>Last Name:</label>
            <br />
            <input className={styles['input-names']} placeholder="Dela Cruz" />
            <br />
            <label className={styles['label-forms']}>Name Extension: *Leave Blank if none*</label>
            <br />
            <input className={styles['input-names']} placeholder="Jr." />
            <br />
            <label className={styles['label-forms']}>Gender:</label>
            <br />
            <select defaultValue={"Select Gender"} className={styles['gender-drop-down']}><option disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option></select>
            <br />
            <label className={styles['label-forms']}>Email Address: </label>
            <br />
            <input className={styles['input-names']} placeholder="juandelacruz@gmail.com" />
            <br />
            <label className={styles['label-forms']}>Contact Number:</label>
            <br />
            <input className={styles['input-names']} placeholder="09XXXXXXXXX" />
            <br />
            <label className={styles['label-forms']}>Birth Date:</label>
            <br />
            <input className={styles['input-names']} placeholder="Catholic" />
            <br />
            <label className={styles['label-forms']}>Religion:</label>
            <br />
            <input className={styles['input-names']} placeholder="Catholic" />
            <br />
            <label className={styles['label-forms']}>Status:</label>
            <br />
            <select defaultValue={"Select Civil Status"} className={styles['gender-drop-down']}><option disabled>Select Civil Status</option>
                <option>Married</option>
                <option>Single</option></select>
            <br />
            <label className={styles['label-forms']}>Sector:</label>
            <br />
            <select defaultValue={"Select Sector"} className={styles['gender-drop-down']}><option disabled>Select Sector</option>
                <option>PWD</option>
                <option>Senior Citizen</option></select>
            <br />
            <span className={styles['perso-subhead']}> Emergency Details</span>
            <br />
            <label className={styles['label-forms']}>Emergency Full Name:</label>
            <br />
            <input className={styles['input-names']} placeholder="Juan S. Dela Cruz" />
            <br />
            <label className={styles['label-forms']}>Emergency Relationship:</label>
            <br />
            <input className={styles['input-names']} placeholder="Mother" />
            <br />
            <label className={styles['label-forms']}>Emergency Contact Number:</label>
            <br />
            <input className={styles['input-names']} placeholder="09XXXXXXXXX" />
            <br />
            <label className={styles['label-forms']}>Emergency Address:</label>
            <br />
            <textarea className={styles['input-names']} placeholder="09XXXXXXXXX" />

        </div>
        <div className={styles['nav-buttons']}>
            <button className={styles['next-btn']}>Next</button>
        </div>
    </div>;
};
