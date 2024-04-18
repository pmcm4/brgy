import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Header } from '../header/header';
import { PersonalForm } from '../personal-form/personal-form';
import { PFAddress } from '../pf-address/pf-address';
import { Footer } from '../footer/footer';
import { Identity_Proof } from '../identity-proof/identity-proof';
import { ChooseCert } from '../choose-cert/choose-cert';
import React, { ChangeEvent, forwardRef, useImperativeHandle, useState } from 'react';
import Validation from './validation';

export interface CertificatesProps {
    className?: string;
}

export const Certificates = ({ className }: CertificatesProps) => {
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

    const [personalFormActive, setPersonalFormActive] = useState(true);
    const [pfaddressActive, setPfaddressActive] = useState(false);
    const [certsActive, setCerts] = useState(false);
    const [identityProofActive, setIdentityProofActive] = useState(false);
    const [backActive, setBackActive] = useState(false);
    const [hideNext, setHideNext] = useState(true);

    const toggleDisplayClass = () => {
        if (personalFormActive === true) {
            setPersonalFormActive(!personalFormActive);
            setPfaddressActive(!pfaddressActive);
            setBackActive(!backActive);
        } else if (pfaddressActive === true) {
            setPfaddressActive(!pfaddressActive);
            setCerts(!certsActive);
        } else if (certsActive === true) {
            setCerts(!certsActive);
            setIdentityProofActive(!identityProofActive);
            setHideNext(!hideNext);
        }
    };

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const backButton = () => {
        if (pfaddressActive === true) {
            setPfaddressActive(!pfaddressActive);
            setPersonalFormActive(!personalFormActive);
            setBackActive(!backActive);
        } else if (certsActive === true) {
            setCerts(!certsActive);
            setPfaddressActive(!pfaddressActive);
        } else if (identityProofActive === true) {
            setIdentityProofActive(!identityProofActive);
            setHideNext(!hideNext);
            setCerts(!certsActive);
        }
    };

    const [errors, setErrors] = useState({});

    const handleValidation = (e: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
        e.preventDefault();
        setErrors(() => Validation({ inputs }));
        console.log(errors);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>

            <form
                className={personalFormActive ? styles['personal-form'] : styles.hide}
                onSubmit={handleValidation}
            >
                <h1 className={styles['header-perso']}>Personal Information</h1>
                <span className={styles['perso-subhead']}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
                        required
                    />

                    <br />
                    <label className={styles['label-forms']}>Middle Name:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Santos"
                        name="middleName"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Last Name:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Dela Cruz"
                        name="lastName"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Name Extension: </label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Jr."
                        name="nameExt"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Gender:</label>
                    <br />
                    <select
                        defaultValue={'Select Gender'}
                        className={styles['input-drop-down']}
                        name="gender"
                        onChange={handleOnChange}
                    >
                        <option disabled>Select Gender</option>
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
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Contact Number:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="09XXXXXXXXX"
                        type="number"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Birth Date:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        name="birthDate"
                        type="date"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Religion:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Catholic"
                        name="religion"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Status:</label>
                    <br />
                    <select
                        defaultValue={'Select Civil Status'}
                        className={styles['input-drop-down']}
                        name="status"
                        onChange={handleOnChange}
                    >
                        <option disabled>Select Civil Status</option>
                        <option>Married</option>
                        <option>Single</option>
                    </select>
                    <br />
                    <label className={styles['label-forms']}>Sector:</label>
                    <br />
                    <select
                        defaultValue={'Select Sector'}
                        className={styles['input-drop-down']}
                        name="sector"
                        onChange={handleOnChange}
                    >
                        <option disabled>Select Sector</option>
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
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Emergency Relationship:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Mother"
                        name="emergRel"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Emergency Contact Number:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="09XXXXXXXXX"
                        name="emergContact"
                        type="number"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label className={styles['label-forms']}>Emergency Address:</label>
                    <br />
                    <textarea
                        className={styles['input-names']}
                        placeholder=""
                        name="emergAddress"
                        onChange={handleOnChange}
                    />
                </div>
            </form>

            <div className={pfaddressActive ? styles['pfaddress'] : styles.hide}>
                <PFAddress />
            </div>

            <div className={certsActive ? styles['certs'] : styles.hide}>
                <ChooseCert />
            </div>

            <div className={identityProofActive ? styles['identity-proof'] : styles.hide}>
                <Identity_Proof />
            </div>

            <div className={styles['nav-buttons-container']}>
                <button
                    className={backActive ? styles['nav-btn'] : styles.hide}
                    onClick={backButton}
                >
                    Back
                </button>
                <button
                    className={hideNext ? styles['nav-btn'] : styles.hide}
                    onClick={toggleDisplayClass}
                >
                    Next
                </button>
            </div>

            <Footer />
        </div>
    );
};
