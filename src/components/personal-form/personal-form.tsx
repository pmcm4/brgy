import classNames from 'classnames';
import styles from './personal-form.module.scss';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';
export interface PersonalFormProps {
    className?: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    selfInput?: {
        firstName: string;
        middleName: string;
        lastName: string;
        nameExt: string;
        gender: string;
        emailAddress: string;
        contactNum: string;
        birthDate: string;
        religion: string;
        status: string;
        sector: string;
        emergName: string;
        emergRel: string;
        emerContact: string;
        emerAddress: string;
    };
}

export const PersonalForm = ({ className, handleSubmit, selfInput }: PersonalFormProps) => {
    const [inputs, setInputs] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        nameExt: '',
        gender: '',
        emailAddress: '',
        contactNum: '',
        birthDate: '',
        religion: '',
        status: '',
        sector: '',
        emergName: '',
        emergRel: '',
        emerContact: '',
        emerAddress: '',
    });

    const reviewContext = useContext(ReviewContext);

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleOnClick = () => {
        reviewContext?.setPersonalFormReview({
            firstName: inputs.firstName,
            middleName: inputs.middleName,
            lastName: inputs.lastName,
            nameExt: inputs.nameExt,
            gender: inputs.gender,
            emailAddress: inputs.emailAddress,
            contactNum: inputs.contactNum,
            birthDate: inputs.birthDate,
            religion: inputs.religion,
            status: inputs.status,
            sector: inputs.sector,
            emergName: inputs.emergName,
            emergRel: inputs.emergRel,
            emerContact: inputs.emerContact,
            emerAddress: inputs.emerAddress,
        });
    };

    return (
        <form className={classNames(styles.root, className)} onSubmit={handleSubmit}>
            <h1 className={styles['header-perso']}>Personal Information</h1>
            <span className={styles['perso-subhead']}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </span>

            <button className={styles['existing-profile']}>Existing Profile</button>
            <div className={styles['input-form']}>
                <label className={styles['label-forms']}>First Name:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Juan"
                    name="firstName"
                    onChange={handleOnChange}
                    value={selfInput?.firstName}
                    required
                />

                <br />
                <label className={styles['label-forms']}>Middle Name:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Santos"
                    name="middleName"
                    value={selfInput?.middleName}
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>Last Name:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Dela Cruz"
                    name="lastName"
                    value={selfInput?.lastName}
                    onChange={handleOnChange}
                    required
                />

                <br />
                <label className={styles['label-forms']}>Name Extension: </label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Jr."
                    name="nameExt"
                    value={selfInput?.nameExt}
                    onChange={handleOnChange}
                />
                <br />
                <label className={styles['label-forms']}>Gender:</label>
                <br />
                <select
                    className={styles['input-drop-down']}
                    name="gender"
                    value={selfInput?.gender}
                    onChange={handleOnChange}
                    required
                >
                    <option disabled selected value={''}>
                        Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <br />
                <label className={styles['label-forms']}>Email Address: </label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="juandelacruz@gmail.com"
                    name="emailAddress"
                    type="email"
                    value={selfInput?.emailAddress}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Contact Number:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="09XXXXXXXXX"
                    type="number"
                    name="contactNum"
                    value={selfInput?.contactNum}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Birth Date:</label>
                <br />
                <input
                    className={styles['input-names']}
                    name="birthDate"
                    type="date"
                    value={selfInput?.birthDate}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Religion:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Catholic"
                    name="religion"
                    value={selfInput?.religion}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Status:</label>
                <br />
                <select
                    className={styles['input-drop-down']}
                    name="status"
                    value={selfInput?.status}
                    onChange={handleOnChange}
                    required
                >
                    <option disabled selected value={''}>
                        Select Civil Status
                    </option>
                    <option>Married</option>
                    <option>Single</option>
                </select>
                <br />
                <label className={styles['label-forms']}>Sector:</label>
                <br />
                <select
                    className={styles['input-drop-down']}
                    name="sector"
                    value={selfInput?.sector}
                    onChange={handleOnChange}
                >
                    <option disabled selected value={''}>
                        Select Sector
                    </option>
                    <option>PWD</option>
                    <option>Senior Citizen</option>
                </select>
                <br />
                <h1 className={styles['perso-subhead']}> Emergency Details</h1>
                <br />
                <label className={styles['label-forms']}>Emergency Full Name:</label>

                <input
                    className={styles['input-names']}
                    placeholder="Juan S. Dela Cruz"
                    name="emergName"
                    value={selfInput?.emergName}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Emergency Relationship:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="Mother"
                    name="emergRel"
                    value={selfInput?.emergRel}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Emergency Contact Number:</label>
                <br />
                <input
                    className={styles['input-names']}
                    placeholder="09XXXXXXXXX"
                    name="emerContact"
                    type="number"
                    value={selfInput?.emerContact}
                    onChange={handleOnChange}
                    required
                />
                <br />
                <label className={styles['label-forms']}>Emergency Address:</label>
                <br />
                <textarea
                    className={styles['input-names']}
                    placeholder=""
                    name="emerAddress"
                    value={selfInput?.emerAddress}
                    onChange={handleOnChange}
                />
            </div>
            <div className={styles['nav-buttons-container']}>
                <button
                    className={styles['nav-btn']}
                    onClick={handleOnClick}
                    onSubmit={handleSubmit}
                >
                    Next
                </button>
            </div>
        </form>
    );
};
