import classNames from 'classnames';
import styles from './pf-address.module.scss';
import { ChangeEvent, useContext, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';

export interface PFAddressProps {
    className?: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selfInput?: {
        residency: string;
        yearsInSanRoque: string;
        block: string;
        street: string;
        barangay: string;
        city: string;
        province: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PFAddress = ({ className, handleSubmit, onBack, selfInput }: PFAddressProps) => {
    const [inputs, setInputs] = useState({
        residency: '',
        yearsInSanRoque: '',
        block: '',
        street: '',
        barangay: 'San Roque',
        city: 'Marikina City',
        province: 'Metro Manila',
    });

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        console.log(inputs);
    };

    const reviewContext = useContext(ReviewContext);

    const handleOnClick = () => {
        reviewContext?.setAddressForm({
            residency: inputs.residency,
            yearsInSanRoque: inputs.yearsInSanRoque,
            block: inputs.block,
            street: inputs.street,
            barangay: inputs.barangay,
            city: inputs.city,
            province: inputs.province,
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['header-perso']}>Address</h1>
            <span className={styles['perso-subhead']}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </span>
            <br />
            <hr />
            <br />
            <form className={styles['input-form']} onSubmit={handleSubmit}>
                <label className={styles['label-forms']}>Residency:</label>
                <br />
                <select
                    className={styles['input-drop-down']}
                    name="residency"
                    value={selfInput?.residency}
                    onChange={handleOnChange}
                    required
                >
                    <option disabled selected value={''}>
                        Select Residency
                    </option>
                    <option>Home Owner</option>
                    <option>Tenant</option>
                </select>
                <br />
                <label className={styles['label-forms']}>Years in San Roque:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="1 year"
                    value={selfInput?.yearsInSanRoque}
                    required
                    name="yearsInSanRoque"
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>Block/Lot</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="blk 1 / lot 1"
                    value={selfInput?.block}
                    required
                    name="block"
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>Street</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Shoe Avenue"
                    value={selfInput?.street}
                    required
                    name="street"
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}></label>
                <label className={styles['label-forms']}>Barangay:</label>
                <br />
                <input
                    className={styles['input-names']}
                    disabled
                    value={'San Roque'}
                    name="barangay"
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>City:</label>
                <br />
                <input
                    className={styles['input-names']}
                    disabled
                    value={'Marikina City'}
                    name="city"
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>Province:</label>
                <br />
                <input
                    className={styles['input-names']}
                    disabled
                    value={'Metro Manila'}
                    name="province"
                    onChange={handleOnChange}
                />

                <div className={styles['nav-buttons-container']}>
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                    <button
                        className={styles['nav-btn']}
                        onClick={handleOnClick}
                        onSubmit={handleSubmit}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};
