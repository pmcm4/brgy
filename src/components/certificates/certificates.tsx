import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Header } from '../header/header';
import { PersonalForm } from '../personal-form/personal-form';
import { PFAddress } from '../pf-address/pf-address';
import { Footer } from '../footer/footer';
import { Identity_Proof } from '../identity-proof/identity-proof';
import { ChooseCert } from '../choose-cert/choose-cert';

export interface CertificatesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Certificates = ({ className }: CertificatesProps) => {
    return <div className={classNames(styles.root, className)}>
        
        <div className={styles['header-certs']} >

            <span className={styles['heading-text']}>Certificates</span>
            <span className={styles.subheading}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>

        </div>

        <div className={styles['personal-form']}>
        <PersonalForm />
        </div>

        <div className={styles['pfaddress']}>
        <PFAddress />
        </div>

        <div className={styles['certs']}>
        <ChooseCert />
        </div>

        <div className={styles['identity-proof']}>
        <Identity_Proof />
        </div>


        <Footer />

    </div>;
};
