import classNames from 'classnames';
import styles from './choose-cert.module.scss';
import { BarangayClearanceForm } from '../certificates/DropDownForms';

export interface ChooseCertProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChooseCert = ({ className }: ChooseCertProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
