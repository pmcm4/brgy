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
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export interface RegistrationFormProps {
    className?: string;
}

function RegistrationForm({ className }: RegistrationFormProps) {
    const [successMsg, setSuccessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    //username errors
    const [usernameTooShort, setusernameTooShort] = useState(false);
    const [usernameTaken, setusernameTaken] = useState(false);
    const [usernameAvail, setusernameAvail] = useState(false);
    const [serverErrorUsername, setServerErrorUsername] = useState(false);
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

    const [showPersonalDetails, setShowPersonalDetails] = useState(true);
    const [showAddressDetails, setShowAddressDetails] = useState(false);
    const [showEmergencyDetails, setShowEmergencyDetails] = useState(false);
    const [showLoginDetails, setShowLoginDetails] = useState(false);

    const formatDate = (date: dayjs.Dayjs | null) => {
        return `${date?.year()}-${date?.month()! + 1}-${date?.date()}`;
    };

    const [emptyBirthDate, setEmptyBirthDate] = useState(false);

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

    const handleOnChange = async (
        e:
            | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setInputs((prev) => {
            prev.birthDate = formatDate(birthDate);
            return { ...prev, [e.target.name]: e.target.value };
        });
        console.log(inputs);
        if (e.target.name === 'username' && e.target.value.length <= 8) {
            setusernameTooShort(true);
            setServerErrorUsername(false);
            setusernameAvail(false);
            setusernameTaken(false);
        }
        try {
            if (e.target.name === 'username' && e.target.value.length >= 8) {
                setusernameTooShort(false);
                const usernameObj = {
                    username: e.target.value,
                };

                await axios.post(
                    `${process.env.API_DOMAIN}/api/requestData/duplicateCheck`,
                    usernameObj
                );
                setServerErrorUsername(false);
                setusernameTaken(false);
                setusernameAvail(true);
            }
        } catch (error: any) {
            setusernameAvail(false);
            setusernameTaken(false);
            setusernameTooShort(false);
            setServerErrorUsername(true);
        }
    };

    const handleRegistration = async (
        e: React.FormEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
    ) => {
        if (birthDate !== null) {
            console.log('true');
            try {
                e.preventDefault();
                const request = await axios.post(
                    `${process.env.API_DOMAIN}/api/requestData/register`,
                    inputs
                );

                if (request.status === 200) {
                    setSuccessMsg(true);
                }
            } catch (error: any) {
                setFailedMsg(true);
                console.log(error.response.data);
            }
        } else {
            console.log('true');
            e.preventDefault();
            setEmptyBirthDate(true);
        }
    };

    const handleTryAgainBtn = () => {
        setFailedMsg(false);
        setEmptyBirthDate(false);
    };

    const handleNext = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        if (birthDate === null) {
            console.log(birthDate);
            setEmptyBirthDate(true);
        } else {
            if (
                showPersonalDetails === true &&
                usernameTaken === false &&
                usernameTooShort === false &&
                //serverErrorUsername === false &&
                birthDate !== null
            ) {
                console.log('true');
                setShowAddressDetails(true);
                setShowPersonalDetails(false);
            } else if (showAddressDetails === true && showEmergencyDetails === false) {
                setShowAddressDetails(false);
                setShowEmergencyDetails(true);
            } else if (showEmergencyDetails === true) {
                setShowEmergencyDetails(false);
                setShowLoginDetails(true);
            }
        }
    };

    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (showLoginDetails === true) {
            setShowEmergencyDetails(true);
            setShowLoginDetails(false);
        } else if (showEmergencyDetails === true) {
            setShowEmergencyDetails(false);
            setShowAddressDetails(true);
        } else if (showAddressDetails === true) {
            setShowAddressDetails(false);
            setShowPersonalDetails(true);
        }
    };

    return (
        <div className={classNames(styles.root)}>
            <div className={showPersonalDetails === true ? styles['unhide'] : styles['hide']}>
                <form onSubmit={handleNext}>
                    <h1 className={styles['perso-subhead']}> Personal Details</h1>
                    <hr />

                    <div className={styles['input-form']}>
                        <div className={styles['input-div']}>
                            <TextField
                                label="First Name"
                                className={styles['input-names']}
                                placeholder="Juan"
                                name="firstName"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Middle Name"
                                className={styles['input-names']}
                                placeholder="Santos"
                                name="middleName"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Last Name"
                                className={styles['input-names']}
                                placeholder="Dela Cruz"
                                name="lastName"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Name Ext."
                                className={styles['input-names']}
                                placeholder="Jr. (leave blank if none)"
                                name="nameExt"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="gender-label-id">Gender</InputLabel>
                                    <Select
                                        labelId="gender-label-id"
                                        label="Gender"
                                        name="gender"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="Contact Number"
                                className={styles['input-names']}
                                placeholder="09XXXXXXXXX"
                                name="contactNum"
                                type="number"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Birth Date"
                                    className={styles['input-names']}
                                    name="birthDate"
                                    value={birthDate}
                                    onChange={(value) => setBirthDate(value)}
                                />
                            </LocalizationProvider>

                            {/* <TextField
                        label="Birth Date"
                        className={styles['input-names']}
                        name="birthDate"
                        type="date"
                        onChange={handleOnChange}
                        placeholder=" "
                        required
                    /> */}
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Religion"
                                className={styles['input-names']}
                                placeholder="Catholic"
                                name="religion"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="status-label-id">Status</InputLabel>
                                    <Select
                                        labelId="status-label-id"
                                        label="Status"
                                        name="status"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    >
                                        <MenuItem value={'Married'}>Married</MenuItem>
                                        <MenuItem value={'Single'}>Single</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="sector-label-id">Sector</InputLabel>
                                    <Select
                                        labelId="sector-label-id"
                                        label="Sector"
                                        name="sector"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    >
                                        <MenuItem value={'PWD'}>PWD</MenuItem>
                                        <MenuItem value={'Senior Citizen'}>Senior Citizen</MenuItem>
                                        <MenuItem value={'None'}>None</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <div className={styles['nav-btn']}>
                        {/* <button >Back</button> */}
                        <button onSubmit={handleNext}>Next</button>
                    </div>
                </form>
            </div>
            <div className={showAddressDetails === true ? styles['unhide'] : styles['hide']}>
                <form onSubmit={handleNext}>
                    <h1 className={styles['perso-subhead']}> Address Details</h1>
                    <hr style={{ width: '100%', margin: '20px 0 30px 0' }} />
                    <div className={styles['input-form']}>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="residency-label-id">Residency</InputLabel>
                                    <Select
                                        labelId="residency-label-id"
                                        label="Residency"
                                        name="residency"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    >
                                        <MenuItem value={'Home Owner'}>Home Owner</MenuItem>
                                        <MenuItem value={'Tenant'}>Tenant</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Years in San Roque"
                                className={styles['input-names']}
                                placeholder="1 year"
                                required
                                name="yearsInSanRoque"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Block"
                                className={styles['input-names']}
                                placeholder="blk 1 / lot 1"
                                required
                                name="block"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Street"
                                className={styles['input-names']}
                                placeholder="Shoe Avenue"
                                required
                                name="street"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="Barangay"
                                className={styles['input-names']}
                                disabled
                                value={'San Roque'}
                                name="barangay"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="City"
                                className={styles['input-names']}
                                disabled
                                value={'Marikina City'}
                                name="city"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="Province"
                                className={styles['input-names']}
                                disabled
                                value={'Metro Manila'}
                                name="province"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className={styles['nav-btn']}>
                        <button onClick={handlePrevious}>Back</button>
                        <button onSubmit={handleNext}>Next</button>
                    </div>
                </form>
            </div>
            <div className={showEmergencyDetails === true ? styles['unhide'] : styles['hide']}>
                <form onSubmit={handleNext}>
                    <h1 className={styles['perso-subhead']}> Emergency Details</h1>
                    <hr style={{ width: '100%', margin: '20px 0 30px 0' }} />
                    <div className={styles['input-form']}>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Emergency Name"
                                className={styles['input-names']}
                                placeholder="Juan S. Dela Cruz"
                                name="emergName"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Emergency Relationship"
                                className={styles['input-names']}
                                placeholder="Mother"
                                name="emergRel"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Emergency Contact"
                                className={styles['input-names']}
                                placeholder="09XXXXXXXXX"
                                name="emerContact"
                                type="number"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Emergency Address"
                                multiline
                                className={styles['input-names']}
                                placeholder=""
                                name="emerAddress"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles['nav-btn']}>
                        <button onClick={handlePrevious}>Back</button>
                        <button onSubmit={handleNext}>Next</button>
                    </div>
                </form>
            </div>
            <div className={showLoginDetails === true ? styles['unhide'] : styles['hide']}>
                <form onSubmit={handleRegistration}>
                    <h1 className={styles['perso-subhead']}> Login Details</h1>
                    <hr style={{ width: '100%', margin: '20px 0 30px 0' }} />
                    <div className={styles['input-form']}>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Email Address"
                                className={styles['input-names']}
                                placeholder="juandelacruz@gmail.com"
                                name="emailAddress"
                                type="email"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                label="Username"
                                className={styles['input-names']}
                                placeholder="juandelacruz23"
                                name="username"
                                onChange={handleOnChange}
                                required
                                inputProps={{
                                    minLength: 8,
                                }}
                            />

                            {usernameTooShort === true && (
                                <span className={styles['username-error']}>
                                    Username should be atleast 8 characters.
                                </span>
                            )}

                            {usernameTaken && (
                                <span className={styles['username-error']}>
                                    Username is already taken.
                                </span>
                            )}

                            {usernameAvail && (
                                <span className={styles['username-success']}>
                                    Username is available.
                                </span>
                            )}
                            {serverErrorUsername && (
                                <span className={styles['username-error']}>
                                    Oops... Something went wrong
                                </span>
                            )}
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="Password"
                                className={styles['input-names']}
                                placeholder="************"
                                type="password"
                                name="password"
                                inputProps={{
                                    minLength: 8,
                                }}
                                onChange={handleOnChange}
                                required
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                label="Retype Password"
                                className={styles['input-names']}
                                placeholder="************"
                                type="password"
                                name="password"
                                inputProps={{
                                    minLength: 8,
                                }}
                                //onChange={handleOnChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles['nav-btn']}>
                        <button onClick={handlePrevious}>Back</button>
                        <button className={styles['reg-btn']} onSubmit={handleRegistration}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
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
            {emptyBirthDate === true && (
                <FailedModal
                    title="Registration"
                    message="Birth Date is required!"
                    buttonTitle="Try Again"
                    buttonLink="/register"
                    tryAgainBtn={handleTryAgainBtn}
                />
            )}
        </div>
    );
}

export default RegistrationForm;
