import classNames from 'classnames';
import styles from './pf-address.module.scss';

export interface PFAddressProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PFAddress = ({ className }: PFAddressProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles['header-perso']}>Address</h1>
        <span className={styles['perso-subhead']}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        <button className={styles['existing-profile']}>Existing Profile</button>
        <div className={styles['input-form']}>
            <label className={styles['label-forms']}>Residency:</label>
            <br />
            <select className={styles['gender-drop-down']}><option disabled selected>Select Residency</option>
                <option>Home Owner</option>
                <option>Tenant</option></select>
            <br />
            <label className={styles['label-forms']}>Years in San Roque:</label>
            <br />
            <input className={styles['input-names']} placeholder="1 year" />
            <br />
            <label className={styles['label-forms']}>Block/Lot</label>
            <br />
            <input className={styles['input-names']} placeholder="blk 1 / lot 1" />
            <br />
            <label className={styles['label-forms']}>Street</label>
            <br />
            <input className={styles['input-names']} placeholder="Shoe Avenue" />
            <br />
            <label className={styles['label-forms']}></label>
            <label className={styles['label-forms']}>Barangay:</label>
            <br />
            <input className={styles['input-names']} disabled value={"San Roque"} />
            <br />
            <label className={styles['label-forms']}>City:</label>
            <br />
            <input className={styles['input-names']} disabled value={"Marikina City"}/>
            <br />
            <label className={styles['label-forms']}>Province:</label>
            <br />
            <input className={styles['input-names']} disabled value={"Metro Manila"}/>

        </div>
        <div className={styles['nav-buttons']}>
            <button className={styles['next-btn']}>Back</button>
            <button className={styles['next-btn']}>Next</button>
        </div>
    </div>;
};
