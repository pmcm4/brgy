import classNames from 'classnames';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

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
                        src="https://storage.googleapis.com/barangay-san-roque-public/logo_sln6bp.png"
                        alt=""
                        className={styles['footer-logo']}
                    />
                    <span className={styles['footer-desc']}>
                        Isang aktibong komunidad na may epektibong pamahalaan at serbisyong
                        pang-komunidad.
                    </span>
                </div>
                <div className={styles['footer-right']}>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Contact</li>
                            <li>barangaysanroque.marikinacity@gmail.com</li>
                            <li>Tel: 646-84-79</li>
                            <li>210 Shoe Avenue, Barangay San Roque</li>
                            <li>Marikina City, Marikina City, Philippines, 1801</li>
                        </ul>
                    </div>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Navigation</li>
                            <Link to="/home">
                                <li>Home</li>
                            </Link>
                            <Link to="/home">
                                <li>About</li>
                            </Link>
                            <Link to="/certificates">
                                <li>Services</li>
                            </Link>
                            <Link to="/login">
                                <li>Login</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles['footer-functions']}>
                        <ul className={styles['contact-list']}>
                            <li className={styles['contact-title']}>Social Media</li>
                            <Link
                                to="https://www.facebook.com/BarangaySanRoqueMarikinaCity"
                                target="blank__"
                            >
                                <li>Facebook</li>
                            </Link>
                            <Link
                                to="https://www.instagram.com/barangaysanroque.marikinacity/"
                                target="blank__"
                            >
                                <li>Instagram</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['footer-bot']}></div>
        </div>
    );
};
