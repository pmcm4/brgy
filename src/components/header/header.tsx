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
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.logo} />
        </div>
        <div className={styles.right}>
            <span className={styles['menu-items']}>Home</span>
            <span className={styles['menu-items']}>About</span>
            <span className={styles['menu-items']}>Services</span>
            <span className={styles['menu-items']}>FAQ</span>
        </div>
    </div>;
};
