import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.left}>
            <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.right}>
            <span className={styles['menu-items']}>Home</span>
            <span className={styles['menu-items']}>About</span>
            <span className={styles['menu-items']}>Services</span>
            <span className={styles['menu-items']}>FAQ</span>
            <span className={styles['menu-items']}>Get in Touch →</span>
        </div>
    </div>;
};
