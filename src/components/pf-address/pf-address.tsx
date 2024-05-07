import classNames from 'classnames';
import styles from './pf-address.module.scss';

export interface PFAddressProps {
    className?: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PFAddress = ({ className, handleSubmit, onBack }: PFAddressProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['header-perso']}>Address</h1>
            <span className={styles['perso-subhead']}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </span>
            <button className={styles['existing-profile']}>Existing Profile</button>
            <form className={styles['input-form']} onSubmit={handleSubmit}>
                <label className={styles['label-forms']}>Residency:</label>
                <br />
                <select className={styles['input-drop-down']} required>
                    <option disabled selected value={''}>
                        Select Residency
                    </option>
                    <option>Home Owner</option>
                    <option>Tenant</option>
                </select>
                <br />
                <label className={styles['label-forms']}>Years in San Roque:</label>
                <br />
                <input className={styles['input-names']} placeholder="1 year" required />
                <br />
                <label className={styles['label-forms']}>Block/Lot</label>
                <br />
                <input className={styles['input-names']} placeholder="blk 1 / lot 1" required />
                <br />
                <label className={styles['label-forms']}>Street</label>
                <br />
                <input className={styles['input-names']} placeholder="Shoe Avenue" required />
                <br />
                <label className={styles['label-forms']}></label>
                <label className={styles['label-forms']}>Barangay:</label>
                <br />
                <input className={styles['input-names']} disabled value={'San Roque'} />
                <br />
                <label className={styles['label-forms']}>City:</label>
                <br />
                <input className={styles['input-names']} disabled value={'Marikina City'} />
                <br />
                <label className={styles['label-forms']}>Province:</label>
                <br />
                <input className={styles['input-names']} disabled value={'Metro Manila'} />

                <div className={styles['nav-buttons-container']}>
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                    <button className={styles['nav-btn']} onSubmit={handleSubmit}>
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};
