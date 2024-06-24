import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './register.module.scss';
import RegistrationForm from '../personal-form/RegistrationForm';
import { PFAddress } from '../pf-address/pf-address';
import axios from 'axios';
import { defaultApi } from '../../api';
import { Link } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Register() {
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
        <div
            className={
                showEmergencyDetails === true || showLoginDetails === true
                    ? `${styles['reg-main-container']}` + ' ' + `${styles['vh-js-controlled']}`
                    : styles['reg-main-container']
            }
        >
            <div className={styles['reg-card-container']}>
                <div className={styles['reg-logo-container']}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                        alt=""
                        className={styles['reg-logo']}
                    />
                    <span className={styles['reg-logo-text-container']}>
                        <span className={styles['reg-span']}>BARANGAY</span>
                        <span className={styles['reg-span']}>SAN ROQUE</span>
                    </span>
                </div>

                <h1 className={styles['reg-span']}>Register here!</h1>
                <p className={styles['reg-p']}>
                    Join now to have access in certification and ID requests!
                </p>

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
                                    size="small"
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
                                    size="small"
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Last Name"
                                    className={styles['input-names']}
                                    placeholder="Dela Cruz"
                                    name="lastName"
                                    onChange={handleOnChange}
                                    size="small"
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
                                    size="small"
                                />
                            </div>

                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="gender-label-id">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label-id"
                                            label="Gender"
                                            name="gender"
                                            defaultValue=""
                                            onChange={handleOnChange}
                                            size="small"
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
                                    size="small"
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
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Religion"
                                    className={styles['input-names']}
                                    placeholder="Catholic"
                                    name="religion"
                                    onChange={handleOnChange}
                                    size="small"
                                    required
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl fullWidth size="small">
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
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="sector-label-id">Sector</InputLabel>
                                        <Select
                                            labelId="sector-label-id"
                                            label="Sector"
                                            name="sector"
                                            defaultValue=""
                                            onChange={handleOnChange}
                                            size="small"
                                        >
                                            <MenuItem value={'PWD'}>PWD</MenuItem>
                                            <MenuItem value={'Senior Citizen'}>
                                                Senior Citizen
                                            </MenuItem>
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
                        <hr />
                        <div className={styles['input-form']}>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="residency-label-id">Residency</InputLabel>
                                        <Select
                                            labelId="residency-label-id"
                                            label="Residency"
                                            name="residency"
                                            defaultValue=""
                                            onChange={handleOnChange}
                                            size="small"
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
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                        <hr />
                        <div className={styles['input-form']}>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Emergency Name"
                                    className={styles['input-names']}
                                    placeholder="Juan S. Dela Cruz"
                                    name="emergName"
                                    onChange={handleOnChange}
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                                    size="small"
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
                        <hr />
                        <div className={styles['input-form']}>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Email Address"
                                    className={styles['input-names']}
                                    placeholder="juandelacruz@gmail.com"
                                    name="emailAddress"
                                    type="email"
                                    onChange={handleOnChange}
                                    size="small"
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
                                    size="small"
                                    required
                                    inputProps={{
                                        minLength: 8,
                                    }}
                                />

                                {usernameTooShort === true && (
                                    <span className={styles['username-error']}>
                                        Username must be at least 8 characters.
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
                                    size="small"
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
                                    size="small"
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

                <hr className={styles['reg-divider-foot']} />
                <div className={styles['reg-foot']}>
                    <Link to={'/login'} className={styles['reg-p-foot']}>
                        <span style={{ float: 'right' }}>Already have an account? Login here!</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
