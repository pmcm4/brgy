import classNames from 'classnames';
import styles from './certificate-request-forms.module.scss';
import { ChangeEvent, useContext, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import dayjs, { Dayjs } from 'dayjs';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LanguageContext } from '../context/languageContext';

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
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const formatDate = (date: dayjs.Dayjs | null) => {
        return `${date?.year()}-${date?.month()! + 1}-${date?.date()}`;
    };

    const languageContext = useContext(LanguageContext);

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
        e:
            | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setInputs((prev) => {
            prev.birthDate = formatDate(birthDate);
            return { ...prev, [e.target.name]: e.target.value };
        });
        console.log(inputs);
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
            {languageContext?.selectEnglish ? (
                <h1 className={styles['header-perso']}>Personal Information</h1>
            ) : (
                <h1 className={styles['header-perso']}>Personal na Impormasyon</h1>
            )}
            {languageContext?.selectEnglish ? (
                <span className={styles['perso-subhead']}>
                    Please complete this form with your accurate and up-to-date personal
                    information. This information will be used solely for requests purposes only and
                    will be kept confidential in accordance with our privacy policy.
                </span>
            ) : (
                <span className={styles['perso-subhead']}>
                    Pakipunan ang form na ito ng tama at napapanahong impormasyon tungkol sa iyong
                    sarili. Ang impormasyong ito ay gagamitin lamang para sa layunin ng mga
                    kahilingan at itatago ng kumpidensyal ayon sa aming patakaran sa privacy.
                </span>
            )}
            <br />
            <hr />
            {languageContext?.selectEnglish ? (
                <span className={styles['perso-subhead']}>Personal Details</span>
            ) : (
                <span className={styles['perso-subhead']}>Personal na Detalye</span>
            )}
            {languageContext?.selectEnglish ? (
                <>
                    {' '}
                    <div className={styles['input-form-personal']}>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="First Name"
                                placeholder="Juan"
                                name="firstName"
                                onChange={handleOnChange}
                                value={selfInput?.firstName}
                                required
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Middle Name"
                                placeholder="Santos"
                                name="middleName"
                                value={selfInput?.middleName}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Last Name"
                                placeholder="Dela Cruz"
                                name="lastName"
                                value={selfInput?.lastName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Name Ext."
                                placeholder="Jr."
                                name="nameExt"
                                value={selfInput?.nameExt}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="gender-label-id">Gender</InputLabel>
                                    <Select
                                        labelId="gender-label-id"
                                        label="Gender"
                                        defaultValue=""
                                        name="gender"
                                        value={selfInput?.gender}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Email Address"
                                placeholder="juandelacruz@gmail.com"
                                name="emailAddress"
                                type="email"
                                value={selfInput?.emailAddress}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Contact Number"
                                placeholder="09XXXXXXXXX"
                                type="number"
                                name="contactNum"
                                value={selfInput?.contactNum}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            {/* <TextField size="small"
                        className={styles['input-names']}
                        name="birthDate"
                        type="date"
                        value={selfInput?.birthDate}
                        onChange={handleOnChange}
                        required
                    /> */}
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
                                size="small"
                                className={styles['input-names']}
                                label="Religion"
                                placeholder="Catholic"
                                name="religion"
                                value={selfInput?.religion}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="status-label-id">Status</InputLabel>
                                    <Select
                                        labelId="status-label-id"
                                        label="Status"
                                        name="status"
                                        defaultValue=""
                                        value={selfInput?.status}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'Married'}>Married</MenuItem>
                                        <MenuItem value={'Single'}>Single</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="sector-label-id">Sector</InputLabel>
                                    <Select
                                        labelId="sector-label-id"
                                        label="Sector"
                                        defaultValue=""
                                        name="sector"
                                        value={selfInput?.sector}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'PWD'}>PWD</MenuItem>
                                        <MenuItem value={'Senior Citizen'}>Senior Citizen</MenuItem>
                                        <MenuItem value={'None'}>None</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    {languageContext?.selectEnglish ? (
                        <span className={styles['perso-subhead']}> Emergency Details</span>
                    ) : (
                        <span className={styles['perso-subhead']}>Mga Detalye ng Emerhensiya</span>
                    )}
                    <div className={styles['input-form-personal']}>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Contact Name"
                                placeholder="Juan S. Dela Cruz"
                                name="emergName"
                                value={selfInput?.emergName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Relationship"
                                placeholder="Mother"
                                name="emergRel"
                                value={selfInput?.emergRel}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Contact Number"
                                placeholder="09XXXXXXXXX"
                                name="emerContact"
                                type="number"
                                value={selfInput?.emerContact}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Address"
                                multiline
                                placeholder="Emergency contact address"
                                name="emerAddress"
                                value={selfInput?.emerAddress}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {' '}
                    <div className={styles['input-form-personal']}>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Unang Pangalan"
                                placeholder="Juan"
                                name="firstName"
                                onChange={handleOnChange}
                                value={selfInput?.firstName}
                                required
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Gitnang Pangalan"
                                placeholder="Santos"
                                name="middleName"
                                value={selfInput?.middleName}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Apelyido"
                                placeholder="Dela Cruz"
                                name="lastName"
                                value={selfInput?.lastName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Karugtong na pangalan"
                                placeholder="Jr."
                                name="nameExt"
                                value={selfInput?.nameExt}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="gender-label-id">Kasarian</InputLabel>
                                    <Select
                                        labelId="gender-label-id"
                                        label="Kasarian"
                                        defaultValue=""
                                        name="gender"
                                        value={selfInput?.gender}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Email Address"
                                placeholder="juandelacruz@gmail.com"
                                name="emailAddress"
                                type="email"
                                value={selfInput?.emailAddress}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Contact Number"
                                placeholder="09XXXXXXXXX"
                                type="number"
                                name="contactNum"
                                value={selfInput?.contactNum}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            {/* <TextField size="small"
                        className={styles['input-names']}
                        name="birthDate"
                        type="date"
                        value={selfInput?.birthDate}
                        onChange={handleOnChange}
                        required
                    /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Petsa ng Kapanganakan"
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
                                size="small"
                                className={styles['input-names']}
                                label="Relihyon"
                                placeholder="Catholic"
                                name="religion"
                                value={selfInput?.religion}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="status-label-id">
                                        Estado ng Pag-aasawa
                                    </InputLabel>
                                    <Select
                                        labelId="status-label-id"
                                        label="Estado ng Pag-aasawa"
                                        name="status"
                                        defaultValue=""
                                        value={selfInput?.status}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'Married'}>Married</MenuItem>
                                        <MenuItem value={'Single'}>Single</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="sector-label-id">Sektor</InputLabel>
                                    <Select
                                        labelId="sector-label-id"
                                        label="Sektor"
                                        defaultValue=""
                                        name="sector"
                                        value={selfInput?.sector}
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'PWD'}>PWD</MenuItem>
                                        <MenuItem value={'Senior Citizen'}>Senior Citizen</MenuItem>
                                        <MenuItem value={'None'}>None</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    {languageContext?.selectEnglish ? (
                        <span className={styles['perso-subhead']}> Emergency Details</span>
                    ) : (
                        <span className={styles['perso-subhead']}>Mga Detalye ng Emerhensiya</span>
                    )}
                    <div className={styles['input-form-personal']}>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Contact Name"
                                placeholder="Juan S. Dela Cruz"
                                name="emergName"
                                value={selfInput?.emergName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Relationship"
                                placeholder="Mother"
                                name="emergRel"
                                value={selfInput?.emergRel}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Contact Number"
                                placeholder="09XXXXXXXXX"
                                name="emerContact"
                                type="number"
                                value={selfInput?.emerContact}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <TextField
                                size="small"
                                className={styles['input-names']}
                                label="Emergency Address"
                                multiline
                                placeholder="Emergency contact address"
                                name="emerAddress"
                                value={selfInput?.emerAddress}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                    </div>{' '}
                </>
            )}
            <div className={styles['nav-buttons-container']}>
                {languageContext?.selectEnglish ? (
                    <button
                        className={styles['nav-btn']}
                        onClick={handleOnClick}
                        onSubmit={handleSubmit}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className={styles['nav-btn']}
                        onClick={handleOnClick}
                        onSubmit={handleSubmit}
                    >
                        Susunod
                    </button>
                )}
            </div>
        </form>
    );
};
