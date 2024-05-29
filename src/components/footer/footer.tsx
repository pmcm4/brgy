import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-left']}>
                    <img
                        src="https://storage.googleapis.com/brgysrbucket/logo_sln6bp.png"
                        alt=""
                        className={styles['footer-logo']}
                    />
                    <span className={styles['footer-desc']}>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{' '}
                    </span>
                </div>
                <div className={styles['footer-right']}>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Contact</li>
                            <li>Info@mysite.com</li>
                            <li>Tel: 123-456-7890</li>
                            <li>500 Terry Francine St</li>
                            <li>San Francisco, CA 94158</li>
                        </ul>
                    </div>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Navigation</li>
                            <li>Info@mysite.com</li>
                            <li>Tel: 123-456-7890</li>
                            <li>500 Terry Francine St</li>
                            <li>San Francisco, CA 94158</li>
                        </ul>
                    </div>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Social Media</li>
                            <li>Info@mysite.com</li>
                            <li>Tel: 123-456-7890</li>
                            <li>500 Terry Francine St</li>
                            <li>San Francisco, CA 94158</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['footer-bot']}></div>
        </div>
    );
};
