import classNames from 'classnames';
import styles from './choose-cert.module.scss';

export interface ChooseCertProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChooseCert = ({ className }: ChooseCertProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles['header-perso']}>Address</h1>
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
            <div className={styles['solo-parent']}>

                <label className={styles['label-forms']}>Child Name:</label>
                <br />
                <input className={styles['input-names']} placeholder="child's name" />
                <br />
                
                <label className={styles['label-forms']}>Solo Parent Since:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Presented By:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of the presentor" />
                <br />
                
                <label className={styles['label-forms']}>Registry Number:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />
                

            </div>

                <div className={styles['cohabitation']}>

                <label className={styles['label-forms']}>Birth Address:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Spouse Name:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Date of Marriage:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />
                
                
            </div>

               <div className={styles['good-moral']}>

                <label className={styles['label-forms']}>Request of:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />    
                
            </div>

            <div className={styles['no-income']}>
                
                <label className={styles['label-forms']}>No Income Since:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />

                <label className={styles['label-forms']}>Request of:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />    
                
            </div>

            <div className={styles['first-time-job-seeker']}>

                <label className={styles['label-forms']}>Date of Residency:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />    
                
            </div>


            
            <div className={styles['residency']}>

                <label className={styles['label-forms']}>Birth Address:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Date of Residency:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />
                
                
            </div>

            <div className={styles['transfer-of-residency']}>

                <label className={styles['label-forms']}>New Address:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />
                
                
            </div>

            <div className={styles['living-still']}>

                <label className={styles['label-forms']}>Date of Tabloid:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />
                
                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />
                
                
            </div>

            <div className={styles['birth-fact']}>

                <label className={styles['label-forms']}>Date Born:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />

                <label className={styles['label-forms']}>Child's Name:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />

                <label className={styles['label-forms']}> Birth Address:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />

                <label className={styles['label-forms']}>Witness Name:</label>
                <br />
                <input className={styles['input-names']} placeholder="" />
                <br />

                <label className={styles['label-forms']}>Witness Type:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />

                <label className={styles['label-forms']}>Request Of:</label>
                <br />
                <input className={styles['input-names']} placeholder="name of requestor" />
                <br />

            </div>


        </div>
        <div className={styles['nav-buttons']}>
            <button className={styles['next-btn']}>Back</button>
            <button className={styles['next-btn']}>Next</button>
        </div>
        </div>
};
