import classNames from 'classnames';
import styles from './identity.module.scss';

export interface IdentityProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Identity = ({ className }: IdentityProps) => {
    return <div className={classNames(styles.root, className)}>
                        <h1 className={styles['header-perso']}>Proof of Identity</h1>
        <span className={styles['perso-subhead']}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        <button className={styles['existing-profile']}>Existing Profile</button>
        <div className={styles['input-form']}>
            <label className={styles['label-forms']}>Residency:</label>
            <br />
            <select className={styles['gender-drop-down']}><option disabled selected>Select Certificate</option>
                <option>Barangay Clearance</option>
                <option>Barangay ID</option>
                <option>Solo Parent</option>
                <option>Cohabitation</option>
                <option>Good Moral</option>
                <option>No Income</option>
                <option>First Time Job Seeker</option>
                <option>Residency</option>
                <option>Transfer of Residency</option>
                <option>Living Still</option>
                <option>Birth Fact</option>
                </select>
                
            <br />
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <input className={styles['input-names']} placeholder="state your purpose here in English or Tagalog." />
            <br />
        </div>
        <div className={styles['nav-buttons']}>
            <button className={styles['next-btn']}>Back</button>
            <button className={styles['next-btn']}>Next</button>
        </div>
    </div>;
};
