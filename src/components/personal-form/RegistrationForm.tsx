import classNames from 'classnames';
import styles from './registrationform.module.scss';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import axios from 'axios';
import { defaultApi } from '../../api';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Link } from 'react-router-dom';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';

export interface RegistrationFormProps {
    className?: string;
}

function RegistrationForm({ className }: RegistrationFormProps) {
    const [inputs, setInputs] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        nameExt: '',
        username: '',
        password: '',
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
        residency: '',
        yearsInSanRoque: '',
        block: '',
        street: '',
        barangay: 'San Roque',
        city: 'Marikina City',
        province: 'Metro Manila',
        registered: true,
    });

    const [successMsg, setSuccessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    //username errors
    const [usernameTooShort, setusernameTooShort] = useState(false);
    const [usernameTaken, setusernameTaken] = useState(false);
    const [usernameAvail, setusernameAvail] = useState(false);

    const handleOnChange = async (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });

        if (e.target.name === 'username' && e.target.value.length <= 8) {
            setusernameTooShort(true);
            setusernameAvail(false);
            setusernameTaken(false);
        }

        try {
            if (e.target.name === 'username' && e.target.value.length >= 8) {
                setusernameTooShort(false);
                const usernameObj = {
                    username: e.target.value,
                };

                await axios.post(`${defaultApi}/api/requestData/duplicateCheck`, usernameObj);
                setusernameTaken(false);
                setusernameAvail(true);
            }
        } catch (error: any) {
            setusernameAvail(false);
            setusernameTaken(true);
        }
    };

    const handleRegistration = async (
        e: React.FormEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
    ) => {
        try {
            e.preventDefault();
            const request = await axios.post(`${defaultApi}/api/requestData/register`, inputs);

            if (request.status === 200) {
                setSuccessMsg(true);
            }
        } catch (error: any) {
            setFailedMsg(true);
            console.log(error.response.data);
        }
    };

    const handleTryAgainBtn = () => {
        setFailedMsg(false);
    };

    return (
        <form className={classNames(styles.root, className)} onSubmit={handleRegistration}>
            <h1 className={styles['perso-subhead']}> Personal Details</h1>
            <hr style={{ width: '100%', margin: '20px 0 30px 0' }} />

            <div className={styles['input-form']}>
                <div className={styles['input-div']}>
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
                </div>
                <div className={styles['input-div']}>
                    {' '}
                    <label className={styles['label-forms']}>Middle Name:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Santos"
                        name="middleName"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Last Name:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Dela Cruz"
                        name="lastName"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Name Extension: </label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Jr. (leave blank if none)"
                        name="nameExt"
                        onChange={handleOnChange}
                    />
                </div>

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Username: </label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="juandelacruz23"
                        name="username"
                        onChange={handleOnChange}
                        required
                        minLength={8}
                    />
                    {usernameTooShort === true && (
                        <span className={styles['username-error']}>
                            Username should be atleast 8 characters.
                        </span>
                    )}

                    {usernameTaken && (
                        <span className={styles['username-error']}>Username is already taken.</span>
                    )}

                    {usernameAvail && (
                        <span className={styles['username-success']}>Username is available.</span>
                    )}
                </div>

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Password: </label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="************"
                        type="password"
                        name="password"
                        minLength={8}
                        onChange={handleOnChange}
                        required
                    />
                </div>

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Gender:</label>
                    <br />
                    <select
                        className={styles['input-drop-down']}
                        name="gender"
                        onChange={handleOnChange}
                        required
                    >
                        <option disabled selected value={''}>
                            Select Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Email Address: </label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="juandelacruz@gmail.com"
                        name="emailAddress"
                        type="email"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Contact Number:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="09XXXXXXXXX"
                        name="contactNum"
                        type="number"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Birth Date:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        name="birthDate"
                        type="date"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Religion:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Catholic"
                        name="religion"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Status:</label>
                    <br />
                    <select
                        className={styles['input-drop-down']}
                        name="status"
                        onChange={handleOnChange}
                        required
                    >
                        <option disabled selected value={''}>
                            Select Civil Status
                        </option>
                        <option>Married</option>
                        <option>Single</option>
                    </select>
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Sector:</label>
                    <br />
                    <select
                        className={styles['input-drop-down']}
                        name="sector"
                        onChange={handleOnChange}
                    >
                        <option disabled selected value={''}>
                            Select Sector
                        </option>
                        <option>PWD</option>
                        <option>Senior Citizen</option>
                    </select>
                </div>

                <h1 className={styles['perso-subhead']}> Address Details</h1>
                <hr style={{ width: '100%', margin: '20px 0 0 0' }} />

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Residency:</label>
                    <br />
                    <select
                        className={styles['input-drop-down']}
                        required
                        name="residency"
                        onChange={handleOnChange}
                    >
                        <option disabled selected value={''}>
                            Select Residency
                        </option>
                        <option>Home Owner</option>
                        <option>Tenant</option>
                    </select>
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Years in San Roque:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="1 year"
                        required
                        name="yearsInSanRoque"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Block/Lot</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="blk 1 / lot 1"
                        required
                        name="block"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Street</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Shoe Avenue"
                        required
                        name="street"
                        onChange={handleOnChange}
                    />
                </div>

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Barangay:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        disabled
                        value={'San Roque'}
                        name="barangay"
                        onChange={handleOnChange}
                    />
                </div>

                <div className={styles['input-div']}>
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
                </div>

                <div className={styles['input-div']}>
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
                </div>

                <h1 className={styles['perso-subhead']}> Emergency Details</h1>
                <hr style={{ width: '100%', margin: '20px 0 0 0' }} />

                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Emergency Full Name:</label>

                    <input
                        className={styles['input-names']}
                        placeholder="Juan S. Dela Cruz"
                        name="emergName"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Emergency Relationship:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="Mother"
                        name="emergRel"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Emergency Contact Number:</label>
                    <br />
                    <input
                        className={styles['input-names']}
                        placeholder="09XXXXXXXXX"
                        name="emerContact"
                        type="number"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className={styles['input-div']}>
                    <br />
                    <label className={styles['label-forms']}>Emergency Address:</label>
                    <br />
                    <textarea
                        className={styles['input-names']}
                        placeholder=""
                        name="emerAddress"
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <button className={styles['reg-btn']} onSubmit={handleRegistration}>
                Register
            </button>
            {successMsg === true && (
                <SuccessModal
                    title="Registration"
                    message="Your account has been successfully created!"
                    buttonTitle="Login now!"
                    buttonLink="/login"
                />
            )}
            {failedMsg === true && (
                <FailedModal
                    title="Registration"
                    message="Oops! Something went wrong..."
                    buttonTitle="Try Again"
                    buttonLink="/register"
                    tryAgainBtn={handleTryAgainBtn}
                />
            )}
        </form>
    );
}

export default RegistrationForm;
