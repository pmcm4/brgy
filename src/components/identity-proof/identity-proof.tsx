import classNames from 'classnames';
import styles from './identity-proof.module.scss';

export interface Identity_ProofProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Identity_Proof = ({ className }: Identity_ProofProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles['header-perso']}>Address</h1>
        <span className={styles['perso-subhead']}>* Please Provide Two(2) Valid ID&apos;s and Two(2) Photo of you holding the ID&apos;s.</span>
        <div className={styles['input-form']}>
            <div className={styles['left-sign']}>
                <div className={styles['signatures-buttons']}>
                    <button>Clear</button>
                    <button>Check Signature</button>
                </div></div>
            <div className={styles['right-sign']} />

        </div>
        <div className={styles['upload-div']}>
            <div className={styles['first-id']} >
                <span>Max file size: 5mb, accepted: jpg|gif|png</span>
                <button>Upload 1st Valid ID</button> </div>

            <div className={styles['second-id']} >
                <span>Max file size: 5mb, accepted: jpg|gif|png</span>
                <button>Upload 2nd Valid ID</button> </div>
        </div>
        <div className={styles['nav-buttons']}>
            <button className={styles['next-btn']}>Back</button>
            <button className={styles['next-btn']}>Next</button>
        </div>
        </div>;
};
