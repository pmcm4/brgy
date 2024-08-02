import React, { useContext, useEffect, useState } from 'react';
import styles from './certificate-request-forms.module.scss';
import { ReviewContext } from '../context/ReviewContext';
import dayjs, { Dayjs } from 'dayjs';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LanguageContext } from '../context/languageContext';
import FeeModal from '../message-modals/FeeModal';

interface DropDownFormProps {
    onNext: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disableBack: boolean;
    deliveryType: string;
}

const formatDate = (date: dayjs.Dayjs | null) => {
    return `${date?.year()}-${date?.month()! + 1}-${date?.date()}`;
};

export function BarangayClearanceForm({
    onNext,
    onBack,
    disableBack,
    deliveryType,
}: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);

    const [showModal, setShowModal] = useState(false);
    const [showFeeMsg, setShowFeeMsg] = useState(false);
    const [showFreeFeeMsg, setShowFreeFeeMsg] = useState(false);
    const [showFreeFeeMsgStudent, setShowFreeFeeMsgStudent] = useState(false);
    const [showFreePWD, setShowFreePWD] = useState(false);
    const [showFreeSenior, setShowFreeSenior] = useState(false);

    const [barangayClearanceRequestObj, setBarangayClearanceRequestObj] = useState({
        purpose: '',
    });

    const handleOnChange = (e: SelectChangeEvent<string>) => {
        setBarangayClearanceRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });

        if (e.target.value === 'First Time Job Seeker') {
            setShowModal(false);
            setShowFeeMsg(false);
            setShowFreeFeeMsg(true);
            setShowFreeFeeMsgStudent(false);
            setShowFreePWD(false);
            setShowFreeSenior(false);
        } else if (e.target.value === 'School Requirement') {
            setShowModal(false);
            setShowFeeMsg(false);
            setShowFreeFeeMsg(false);
            setShowFreeFeeMsgStudent(true);
            setShowFreePWD(false);
            setShowFreeSenior(false);
        } else if (reviewContext?.personalForm?.sector === 'PWD') {
            setShowModal(false);
            setShowFeeMsg(false);
            setShowFreeFeeMsg(false);
            setShowFreeFeeMsgStudent(false);
            setShowFreePWD(true);
            setShowFreeSenior(false);
        } else if (reviewContext?.personalForm?.sector === 'Senior Citizen') {
            setShowModal(false);
            setShowFeeMsg(false);
            setShowFreeFeeMsg(false);
            setShowFreeFeeMsgStudent(false);
            setShowFreePWD(false);
            setShowFreeSenior(true);
        } else {
            setShowModal(true);
            setShowFeeMsg(true);
            setShowFreeFeeMsg(false);
            setShowFreeFeeMsgStudent(false);
            setShowFreePWD(false);
            setShowFreeSenior(false);
        }
    };

    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayClearance',
            purpose: barangayClearanceRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            <div className={styles['input-div-certificates']}>
                <Box>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="purpose-label-id">Purpose</InputLabel>
                        <Select
                            labelId="purpose-label-id"
                            label="Purpose"
                            defaultValue=""
                            name="purpose"
                            onChange={handleOnChange}
                            required
                        >
                            <MenuItem value={'Proof of Residency'}>Proof of Residency</MenuItem>
                            <MenuItem value={'Legal Purpose'}>Legal Purpose</MenuItem>
                            <MenuItem value={'Local Employment'}>Local Employment</MenuItem>
                            <MenuItem value={'Loan Purpose'}>Loan Purpose</MenuItem>
                            <MenuItem value={'School Requirement'}>School Requirement</MenuItem>
                            <MenuItem value={'Bank Purpose'}>Bank Purpose</MenuItem>
                            <MenuItem value={'First Time Job Seeker'}>
                                First Time Job Seeker
                            </MenuItem>
                            <MenuItem value={'Police Clearance'}>Police Clearance</MenuItem>
                            <MenuItem value={'Senior Citizen'}>Senior Citizen</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {languageContext?.selectEnglish ? (
                <>
                    {' '}
                    {showFeeMsg && (
                        <span style={{ color: 'orange', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: PHP 50.00
                        </span>
                    )}
                    {showFreeFeeMsg && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE
                        </span>
                    )}
                    {showFreeFeeMsgStudent && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your Student ID on
                            pickup/delivery)
                        </span>
                    )}
                    {showFreePWD && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your PWD ID on pickup/delivery)
                        </span>
                    )}
                    {showFreeSenior && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your Senior Citizen ID on
                            pickup/delivery)
                        </span>
                    )}
                    {showModal && <FeeModal handleModalFunc={handleModal} />}{' '}
                </>
            ) : (
                <>
                    {' '}
                    {showFeeMsg && (
                        <span style={{ color: 'orange', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: PHP 50.00
                        </span>
                    )}
                    {showFreeFeeMsg && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE
                        </span>
                    )}
                    {showFreeFeeMsgStudent && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang Student ID sa oras ng pag pickup o
                            delivery)
                        </span>
                    )}
                    {showFreePWD && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang PWD ID sa oras ng pag pickup o
                            delivery)
                        </span>
                    )}
                    {showFreeSenior && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang Senior Citizen ID sa oras ng pag
                            pickup o delivery)
                        </span>
                    )}
                    {showModal && <FeeModal handleModalFunc={handleModal} />}{' '}
                </>
            )}
            {/* <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>
            </div> */}
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function Indigency({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);

    const [indigencyRequestObj, setIndigencyRequestObj] = useState({
        purpose: '',
    });

    const handleOnChange = (e: SelectChangeEvent<string>) => {
        setIndigencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'indigency',
            purpose: indigencyRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <Box>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="purpose-label-id">Purpose</InputLabel>
                            <Select
                                labelId="purpose-label-id"
                                label="Purpose"
                                defaultValue=""
                                name="purpose"
                                onChange={handleOnChange}
                                required
                            >
                                <MenuItem value={'medical'}>Medical</MenuItem>
                                <MenuItem value={'financial'}>Financial</MenuItem>
                                <MenuItem value={'educational'}>Educational</MenuItem>
                                <MenuItem value={'internship'}>Internship</MenuItem>
                                <MenuItem value={'legal'}>Legal</MenuItem>
                                <MenuItem value={'livelihood'}>Livelihood</MenuItem>
                                <MenuItem value={'pao'}>Public Attorney's Office</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                        *Processing Fee: FREE
                    </span>
                </div>

                {/* <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div> */}
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function BarangayIDForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const [barangayIDRequestObj, setBarangayIDRequestObj] = useState({
        purpose: '',
    });

    const [feeMsg, showFeeMsg] = useState(true);

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayID',
            purpose: barangayIDRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setBarangayIDRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    useEffect(() => {
        if (
            reviewContext?.personalForm?.sector === 'Student' ||
            reviewContext?.personalForm?.sector === 'PWD' ||
            reviewContext?.personalForm?.sector === 'Senior Citizen'
        ) {
            showFeeMsg(false);
        }
    }, [reviewContext?.personalForm?.sector]);

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <>
                    {feeMsg && (
                        <span style={{ color: 'orange', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: PHP 50.00
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'Student' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your Student ID on
                            pickup/delivery)
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'PWD' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your PWD ID on pickup/delivery)
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'Senior Citizen' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (Please present your Senior Citizen ID on
                            pickup/delivery)
                        </span>
                    )}
                </>
            ) : (
                <>
                    {feeMsg && (
                        <span style={{ color: 'orange', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: PHP 50.00
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'Student' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang Student ID sa oras ng pag pickup o
                            delivery)
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'PWD' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang PWD ID sa oras ng pag pickup o
                            delivery)
                        </span>
                    )}
                    {reviewContext?.personalForm?.sector === 'Senior Citizen' && (
                        <span style={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>
                            *Processing Fee: FREE (I-present ang Senior Citizen ID sa oras ng pag
                            pickup o delivery)
                        </span>
                    )}
                </>
            )}
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function SoloParentForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const [soloParentRequestObj, setSoloParentRequestObj] = useState({
        purpose: '',
        childName: '',
        childGender: '',
        soloParentSince: '',
        presentedBy: '',
        registryNumber: '',
        nameOfRequestor: '',
    });

    const [soloParentSince, setSoloParentSince] = useState<Dayjs | null>(null);

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'soloParent',
            purpose: soloParentRequestObj.purpose,
            deliveryType: deliveryType,
            childName: soloParentRequestObj.childName,
            childGender: soloParentRequestObj.childGender,
            soloParentSince: soloParentRequestObj.soloParentSince,
            presentedBy: soloParentRequestObj.presentedBy,
            registryNumber: soloParentRequestObj.registryNumber,
            nameOfRequestor: soloParentRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setSoloParentRequestObj((prev) => {
            prev.soloParentSince = formatDate(soloParentSince);
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Child's Name"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="child's name"
                        required
                        name="childName"
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <Box>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="child-gender-label-id">Child's Gender</InputLabel>
                            <Select
                                labelId="child-gender-label-id"
                                label="Child's Gender"
                                defaultValue=""
                                name="childGender"
                                onChange={handleOnChange}
                                required
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Solo Parent Since"
                            className={styles['input-names']}
                            name="soloParentSince"
                            value={soloParentSince}
                            onChange={(value) => {
                                setSoloParentRequestObj((prev) => {
                                    setSoloParentSince(value);
                                    prev.soloParentSince = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Presented By"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of the presentor"
                        name="presentedBy"
                        required
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Registry Number"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        required
                        name="registryNumber"
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        required
                        name="nameOfRequestor"
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function CohabitationForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const [cohabitationRequestObj, setCohabitationRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        spouseName: '',
        DateOfMarriage: '',
        nameOfRequestor: '',
    });

    const [dateOfMarriage, setDateOfMarriage] = useState<Dayjs | null>(null);

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: cohabitationRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: cohabitationRequestObj.nameOfRequestor,
            birthAddress: cohabitationRequestObj.birthAddress,
            spouseName: cohabitationRequestObj.spouseName,
            DateOfMarriage: cohabitationRequestObj.DateOfMarriage,
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCohabitationRequestObj((prev) => {
            prev.DateOfMarriage = formatDate(dateOfMarriage);
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Birth Address"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        required
                        name="birthAddress"
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Spouse Name"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="spouseName"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date of Marriage"
                            className={styles['input-names']}
                            name="dateOfMarriage"
                            value={dateOfMarriage}
                            onChange={(value) => {
                                setCohabitationRequestObj((prev) => {
                                    setDateOfMarriage(value);
                                    prev.DateOfMarriage = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function GoodMoralForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const [goodMoralRequestObj, setGoodMoralRequestObj] = useState({
        purpose: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setGoodMoralRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'goodMoral',
            purpose: goodMoralRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: goodMoralRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function NoIncomeForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const [noIncomeSince, setNoIncomeSince] = useState<Dayjs | null>(null);

    const [noIncomeRequestObj, setNoIncomeRequestObj] = useState({
        purpose: '',
        noIncomeSince: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNoIncomeRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'noIncome',
            purpose: noIncomeRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: noIncomeRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: noIncomeRequestObj.noIncomeSince,
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="No Income Since"
                            className={styles['input-names']}
                            name="noIncomeSince"
                            value={noIncomeSince}
                            onChange={(value) => {
                                setNoIncomeRequestObj((prev) => {
                                    setNoIncomeSince(value);
                                    prev.noIncomeSince = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        required
                        name="nameOfRequestor"
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function FirstTimeJobSeekerForm({
    onNext,
    onBack,
    disableBack,
    deliveryType,
}: DropDownFormProps) {
    const [dateOfResidency, setDateOfResidency] = useState<Dayjs | null>(null);

    const [firstTimeJobSeekerRequestObj, setFirstTimeJobSeekerRequestObj] = useState({
        purpose: '',
        DateOfResidency: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFirstTimeJobSeekerRequestObj((prev) => {
            prev.DateOfResidency = formatDate(dateOfResidency);

            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'firstTimeJobSeeker',
            purpose: firstTimeJobSeekerRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: firstTimeJobSeekerRequestObj.DateOfResidency,
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date of Residency"
                            className={styles['input-names']}
                            name="DateOfResidency"
                            value={dateOfResidency}
                            onChange={(value) => {
                                setFirstTimeJobSeekerRequestObj((prev) => {
                                    setDateOfResidency(value);
                                    prev.DateOfResidency = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function ResidencyForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const [residencyRequestObj, setResidencyRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        DateOfResidency: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'residency',
            purpose: residencyRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: residencyRequestObj.nameOfRequestor,
            birthAddress: residencyRequestObj.birthAddress,
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: residencyRequestObj.DateOfResidency,
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Birth Address"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="birthAddress"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Date of Residency"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="DateOfResidency"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function TransferResidencyForm({
    onNext,
    onBack,
    disableBack,
    deliveryType,
}: DropDownFormProps) {
    const [transferOfResidencyRequestObj, setTransferOfResidencyRequestObj] = useState({
        purpose: '',
        newAddress: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setTransferOfResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'transferOfResidency',
            purpose: transferOfResidencyRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: transferOfResidencyRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: transferOfResidencyRequestObj.newAddress,
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="New Address"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="newAddress"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function LivingStillForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const [dateOfTabloid, setDateOfTabloid] = useState<Dayjs | null>(null);

    const [livingStillRequestObj, setLivingStillRequestObj] = useState({
        purpose: '',
        DateOfTabloid: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setLivingStillRequestObj((prev) => {
            prev.DateOfTabloid = formatDate(dateOfTabloid);
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'livingStill',
            purpose: livingStillRequestObj.purpose,
            deliveryType: deliveryType,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: livingStillRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: livingStillRequestObj.DateOfTabloid,
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date of Tabloid"
                            className={styles['input-names']}
                            name="DateOfTabloid"
                            value={dateOfTabloid}
                            onChange={(value) => {
                                setLivingStillRequestObj((prev) => {
                                    setDateOfTabloid(value);
                                    prev.DateOfTabloid = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}

export function BirthFactForm({ onNext, onBack, disableBack, deliveryType }: DropDownFormProps) {
    const [dateBorn, setDateBorn] = useState<Dayjs | null>(null);

    const [birthFactRequestObj, setBirthFactRequestObj] = useState({
        purpose: '',
        DateBorn: '',
        childName: '',
        childGender: '',
        birthAddress: '',
        witnessName: '',
        witnessType: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setBirthFactRequestObj((prev) => {
            prev.DateBorn = formatDate(dateBorn);
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'birthFact',
            purpose: birthFactRequestObj.purpose,
            deliveryType: deliveryType,
            childName: birthFactRequestObj.childName,
            childGender: birthFactRequestObj.childGender,
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: birthFactRequestObj.nameOfRequestor,
            birthAddress: birthFactRequestObj.birthAddress,
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: birthFactRequestObj.DateBorn,
            witnessName: birthFactRequestObj.witnessName,
            witnessType: birthFactRequestObj.witnessType,
        });
    };
    return (
        <form onSubmit={onNext} className={styles['certificate-container-form']}>
            {' '}
            <div className={styles['input-form-certificates']}>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Purpose"
                        size="small"
                        multiline
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        name="purpose"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date Born"
                            className={styles['input-names']}
                            name="dateBorn"
                            value={dateBorn}
                            onChange={(value) => {
                                setBirthFactRequestObj((prev) => {
                                    setDateBorn(value);
                                    prev.DateBorn = formatDate(value);
                                    return { ...prev };
                                });
                            }}
                            slotProps={{
                                textField: {
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Child's Name"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="childName"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <Box>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="child-gender-label-id">Child's Gender</InputLabel>
                            <Select
                                labelId="child-gender-label-id"
                                label="Child's Gender"
                                defaultValue=""
                                name="childGender"
                                onChange={handleOnChange}
                                required
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Birth Address"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="birthAddress"
                        required
                    />
                </div>

                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Witness Name"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="witnessName"
                        required
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Witness Type"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder=""
                        name="witnessType"
                        required
                    />
                </div>
                <div className={styles['input-div-certificates']}>
                    <TextField
                        label="Name of Requestor"
                        size="small"
                        onChange={handleOnChange}
                        className={styles['input-names']}
                        placeholder="name of requestor"
                        name="nameOfRequestor"
                        required
                    />
                </div>
            </div>
            {languageContext?.selectEnglish ? (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Next
                    </button>
                </div>
            ) : (
                <div className={styles['nav-buttons-container']}>
                    {disableBack === false && (
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                    )}

                    <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                        Susunod
                    </button>
                </div>
            )}
        </form>
    );
}
