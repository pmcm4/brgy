import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Footer } from '../footer/footer';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { PersonalForm } from '../certificate-request-forms/personal-form';
import { PFAddress } from '../certificate-request-forms/pf-address';
import {
    BarangayClearanceForm,
    BarangayIDForm,
    BirthFactForm,
    CohabitationForm,
    FirstTimeJobSeekerForm,
    GoodMoralForm,
    Indigency,
    LivingStillForm,
    NoIncomeForm,
    ResidencyForm,
    SoloParentForm,
    TransferResidencyForm,
} from '../certificate-request-forms/DropDownForms';
import { Identity_Proof } from '../certificate-request-forms/identity-proof';
import { ReviewContext } from '../context/ReviewContext';

import axios from 'axios';
import { defaultApi } from '../../api';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface CertificatesProps {
    className?: string;
}

interface AdminSelectedUserType {
    user_id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    name_ext: string;
    gender: string;
    email_address: string;
    contact_num: string;
    birth_date: string;
    religion: string;
    civil_status: string;
    sector: string;
    emerg_name: string;
    emerg_rel: string;
    emer_contact: string;
    emer_address: string;
    registered: string;
    residency: string;
    years_in_san_roque: string;
    block: string;
    street: string;
    barangay: string;
    city: string;
    province: string;
}

export const Certificates = ({ className }: CertificatesProps) => {
    const [renderRequestor, setRenderRequestor] = useState(true);

    const [renderPF, setRenderPF] = useState(false); //initial render state
    const [renderAdd, setRenderAdd] = useState(false);

    const [renderChoose, setRenderChoose] = useState(false);
    const [renderVerify, setRenderVerify] = useState(false);
    const [forMyselfSelected, setForMyselfSelected] = useState(false);

    const [userDetails, setUserDetails] = useState({
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
        registered: '',
    });

    const [userAddress, setuserAddress] = useState({
        residency: '',
        yearsInSanRoque: '',
        block: '',
        street: '',
        barangay: '',
        city: '',
        province: '',
    });

    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    const reviewContext = useContext(ReviewContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        try {
            const checkAdmin = async () => {
                await axios
                    .get(
                        `${process.env.API_DOMAIN}/api/auth/isAdminCheck/${authContext?.currentUser}`
                    )
                    .then((data) => {
                        if (data.data[0].is_admin === true) {
                            setIsAdmin(true);
                        } else {
                            setIsAdmin(false);
                        }
                    });
            };
            if (authContext?.currentUser !== null) {
                checkAdmin();
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getUserDetails = async () => {
        try {
            const sendRequest = await axios.get(
                `${process.env.API_DOMAIN}/api/requestData/getSingleUserDetails/${authContext?.currentUser}`
            );

            if (sendRequest.status === 200) {
                setUserDetails({
                    firstName: sendRequest.data[0].first_name,
                    middleName: sendRequest.data[0].middle_name,
                    lastName: sendRequest.data[0].last_name,
                    nameExt: sendRequest.data[0].name_ext,
                    gender: sendRequest.data[0].gender,
                    emailAddress: sendRequest.data[0].email_address,
                    contactNum: sendRequest.data[0].contact_num,
                    birthDate: sendRequest.data[0].birth_date,
                    religion: sendRequest.data[0].religion,
                    status: sendRequest.data[0].civil_status,
                    sector: sendRequest.data[0].sector,
                    emergName: sendRequest.data[0].emerg_name,
                    emergRel: sendRequest.data[0].emerg_rel,
                    emerContact: sendRequest.data[0].emer_contact,
                    emerAddress: sendRequest.data[0].emer_address,
                    registered: sendRequest.data[0].registered,
                });
                setuserAddress({
                    residency: sendRequest.data[0].residency,
                    yearsInSanRoque: sendRequest.data[0].years_in_san_roque,
                    block: sendRequest.data[0].block,
                    street: sendRequest.data[0].street,
                    barangay: sendRequest.data[0].barangay,
                    city: sendRequest.data[0].city,
                    province: sendRequest.data[0].province,
                });

                reviewContext?.setPersonalFormReview({
                    firstName: sendRequest.data[0].first_name,
                    middleName: sendRequest.data[0].middle_name,
                    lastName: sendRequest.data[0].last_name,
                    nameExt: sendRequest.data[0].name_ext,
                    gender: sendRequest.data[0].gender,
                    emailAddress: sendRequest.data[0].email_address,
                    contactNum: sendRequest.data[0].contact_num,
                    birthDate: sendRequest.data[0].birth_date,
                    religion: sendRequest.data[0].religion,
                    status: sendRequest.data[0].civil_status,
                    sector: sendRequest.data[0].sector,
                    emergName: sendRequest.data[0].emerg_name,
                    emergRel: sendRequest.data[0].emerg_rel,
                    emerContact: sendRequest.data[0].emer_contact,
                    emerAddress: sendRequest.data[0].emer_address,
                });

                reviewContext?.setAddressForm({
                    residency: sendRequest.data[0].residency,
                    yearsInSanRoque: sendRequest.data[0].years_in_san_roque,
                    block: sendRequest.data[0].block,
                    street: sendRequest.data[0].street,
                    barangay: sendRequest.data[0].barangay,
                    city: sendRequest.data[0].city,
                    province: sendRequest.data[0].province,
                });

                reviewContext?.setSelfRequest(true);
                reviewContext?.setForSomeoneElseRequest(false);
                reviewContext?.setUregisteredAccountRequest(false);

                setRenderRequestor(false);
                setRenderChoose(true);
                setForMyselfSelected(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getSelectedUserDetails = async (data: AdminSelectedUserType) => {
        try {
            setUserDetails({
                firstName: data.first_name,
                middleName: data.middle_name,
                lastName: data.last_name,
                nameExt: data.name_ext,
                gender: data.gender,
                emailAddress: data.email_address,
                contactNum: data.contact_num,
                birthDate: data.birth_date,
                religion: data.religion,
                status: data.civil_status,
                sector: data.sector,
                emergName: data.emerg_name,
                emergRel: data.emerg_rel,
                emerContact: data.emer_contact,
                emerAddress: data.emer_address,
                registered: data.registered,
            });
            setuserAddress({
                residency: data.residency,
                yearsInSanRoque: data.years_in_san_roque,
                block: data.block,
                street: data.street,
                barangay: data.barangay,
                city: data.city,
                province: data.province,
            });
            reviewContext?.setSelectedUserIDByAdmin(data.user_id);

            reviewContext?.setPersonalFormReview({
                firstName: data.first_name,
                middleName: data.middle_name,
                lastName: data.last_name,
                nameExt: data.name_ext,
                gender: data.gender,
                emailAddress: data.email_address,
                contactNum: data.contact_num,
                birthDate: data.birth_date,
                religion: data.religion,
                status: data.civil_status,
                sector: data.sector,
                emergName: data.emerg_name,
                emergRel: data.emerg_rel,
                emerContact: data.emer_contact,
                emerAddress: data.emer_address,
            });
            reviewContext?.setAddressForm({
                residency: data.residency,
                yearsInSanRoque: data.years_in_san_roque,
                block: data.block,
                street: data.street,
                barangay: data.barangay,
                city: data.city,
                province: data.province,
            });
            reviewContext?.setAdminSelected(true);
            reviewContext?.setSelfRequest(false);
            reviewContext?.setForSomeoneElseRequest(false);
            reviewContext?.setUregisteredAccountRequest(false);
            setRenderRequestor(false);
            setRenderChoose(true);
            setForMyselfSelected(true);
        } catch (error) {
            console.log(error);
        }
    };

    const ForSomeoneElseSelected = () => {
        reviewContext?.setSelfRequest(false);
        reviewContext?.setForSomeoneElseRequest(true);
        reviewContext?.setUregisteredAccountRequest(false);
        setRenderRequestor(false);
        setRenderPF(true);
    };

    const AdminNonExistingProfileSelected = () => {
        reviewContext?.setSelfRequest(false);
        reviewContext?.setForSomeoneElseRequest(false);
        reviewContext?.setUregisteredAccountRequest(false);
        reviewContext?.setAdminNonExistingProfileSelected(true);
        setRenderRequestor(false);
        setRenderPF(true);
    };

    const unregisteredRequestSelected = () => {
        reviewContext?.setSelfRequest(false);
        reviewContext?.setForSomeoneElseRequest(false);
        reviewContext?.setUregisteredAccountRequest(true);
        setRenderRequestor(false);
        setRenderPF(true);
    };

    //next button
    const handlePersonalFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        console.log(reviewContext?.personalForm);
        setRenderPF(false);
        setRenderAdd(true);
    };

    const handleAddressFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        console.log(reviewContext?.addressForm);
        setRenderAdd(false);
        setRenderChoose(true);
    };

    const handleCertFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        setRenderChoose(false);
        setRenderVerify(true);
    };

    // back button
    const handleBackVerify = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderVerify(false);
        setRenderChoose(true);
    };

    const handleBackCertChoose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderChoose(false);
        setRenderAdd(true);
    };

    const handleBackAddress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderAdd(false);
        setRenderPF(true);
    };

    const [renderForm, setRenderForm] = useState({
        barangayClearance: false,
        indigency: false,
        barangayID: false,
        soloParent: false,
        cohabitation: false,
        goodMoral: false,
        noIncome: false,
        firstTimeJobSeeker: false,
        residency: false,
        transferResidency: false,
        livingStill: false,
        birthFact: false,
    });

    const [selectedCertificate, setSelectedCertificate] = useState({
        selectedCert: '',
    });

    const handleOnChange = (
        e:
            | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setRenderForm(() => {
            return {
                barangayClearance: false,
                indigency: false,
                barangayID: false,
                soloParent: false,
                cohabitation: false,
                goodMoral: false,
                noIncome: false,
                firstTimeJobSeeker: false,
                residency: false,
                transferResidency: false,
                livingStill: false,
                birthFact: false,
                [e.target.value]: true,
            };
        });

        setSelectedCertificate({ selectedCert: e.target.value });
    };

    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchTrigger, setSearchTrigger] = useState(false);

    const handleSearchProfile = async (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        try {
            const search = {
                search: e.target.value,
            };
            if (search.search === '') {
                setSearchResults([]);
                setSearchTrigger(false);
            } else {
                await axios
                    .post(`${process.env.API_DOMAIN}/api/requestData/searchProfile`, search)
                    .then((data) => {
                        setSearchResults(data.data);
                        setSearchTrigger(true);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>

            {isAdmin === true && (
                <div className={renderRequestor === true ? styles['admin-search'] : styles['hide']}>
                    <span
                        className={styles['admin-search-span']}
                        style={{ fontSize: '24px', fontWeight: '500' }}
                    >
                        Choose a profile:
                        <TextField
                            id="outlined-search"
                            label="Enter Name"
                            type="search"
                            size="small"
                            onChange={handleSearchProfile}
                        />
                    </span>

                    <div className={styles['search-results']}>
                        {searchTrigger === true ? (
                            <>
                                {searchResults.length > 0 ? (
                                    searchResults.map((row, key) => {
                                        return (
                                            <div
                                                className={styles['search-results-indiv']}
                                                key={key}
                                            >
                                                <span>{row.full_name}</span>
                                                <span>
                                                    {row.block +
                                                        ' ' +
                                                        row.street +
                                                        ' ' +
                                                        row.barangay +
                                                        ' ' +
                                                        row.city +
                                                        ' ' +
                                                        row.province}
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        getSelectedUserDetails(row);
                                                    }}
                                                >
                                                    Use Profile
                                                </button>{' '}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <span className={styles['search-results-init']}>
                                        No Results
                                    </span>
                                )}
                            </>
                        ) : (
                            <span className={styles['search-results-init']}>Search Results</span>
                        )}
                    </div>
                    <span style={{ fontSize: '24px', fontWeight: '400', margin: '20px 0 20px 0' }}>
                        OR
                    </span>
                    <button
                        style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                        onClick={AdminNonExistingProfileSelected}
                    >
                        Continue without existing profile
                    </button>
                </div>
            )}

            {authContext?.currentUser === null ? (
                <div className={renderRequestor === true ? styles['unhide'] : styles['hide']}>
                    <div className={styles['choose-requestor-no-account']}>
                        <span style={{ fontSize: '24px', fontWeight: '500' }}>
                            Register an Account!
                        </span>
                        <span style={{ marginBottom: '20px' }}>
                            We highly recommend you to register an account first before requesting
                            for certificates. By doing so, your requests will be tracked and managed
                            better by the Barangay administrators. Also, you won't need to re-enter
                            your user information every time you request a certificate if you have a
                            registered account.
                        </span>
                        <Link to={'/register'}>
                            <button style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}>
                                Register
                            </button>
                        </Link>
                        <button
                            style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                            onClick={unregisteredRequestSelected}
                        >
                            Continue without registration
                        </button>
                        <span>OR</span>
                        <Link to={'/login'}>
                            <button style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div
                    className={
                        renderRequestor === true && isAdmin === false
                            ? styles['unhide']
                            : styles['hide']
                    }
                >
                    <div className={styles['choose-requestor']}>
                        <span style={{ fontSize: '30px', fontWeight: '600' }}>
                            Who is requesting?
                        </span>
                        <button
                            style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                            onClick={getUserDetails}
                        >
                            For myself
                        </button>
                        <button
                            style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                            onClick={ForSomeoneElseSelected}
                        >
                            For someone else
                        </button>
                    </div>
                </div>
            )}

            <div className={renderPF === true ? styles['unhide-PF'] : styles['hide']}>
                {forMyselfSelected === true ? (
                    <PersonalForm handleSubmit={handlePersonalFormNext} selfInput={userDetails} />
                ) : (
                    <PersonalForm handleSubmit={handlePersonalFormNext} />
                )}
            </div>

            <div className={renderAdd === true ? styles['unhide-Add'] : styles['hide']}>
                {forMyselfSelected === true ? (
                    <PFAddress
                        handleSubmit={handleAddressFormNext}
                        onBack={handleBackAddress}
                        selfInput={userAddress}
                    />
                ) : (
                    <PFAddress handleSubmit={handleAddressFormNext} onBack={handleBackAddress} />
                )}
            </div>

            <div className={renderChoose === true ? styles['unhide-Choose'] : styles['hide']}>
                <div className={styles['certs-container']}>
                    <h1 className={styles['header-perso']}>Certificates</h1>
                    <span className={styles['perso-subhead']}>
                        Please select a certificate or ID you need and fill out the form with
                        accurate information. This will ensure efficient processing of your request.
                        Your information will be kept confidential in accordance with our privacy
                        policy.
                    </span>
                    <br />
                    <hr />
                    <br />
                    <div className={styles['input-form']}>
                        <div className={styles['input-div']}>
                            <Box>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="certificate-label-id">
                                        Select Certificate
                                    </InputLabel>
                                    <Select
                                        labelId="certificate-label-id"
                                        label="Select Certificate"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                        required
                                    >
                                        <MenuItem value={'barangayClearance'}>
                                            Barangay Clearance
                                        </MenuItem>
                                        <MenuItem value={'indigency'}>Indigency</MenuItem>
                                        <MenuItem value={'barangayID'}>Barangay ID</MenuItem>
                                        <MenuItem value={'soloParent'}>Solo Parent</MenuItem>
                                        <MenuItem value={'cohabitation'}>Cohabitation</MenuItem>
                                        <MenuItem value={'goodMoral'}>Good Moral</MenuItem>
                                        <MenuItem value={'noIncome'}>No Income</MenuItem>
                                        <MenuItem value={'firstTimeJobSeeker'}>
                                            First Time Job Seeker
                                        </MenuItem>
                                        <MenuItem value={'residency'}>Residency</MenuItem>
                                        <MenuItem value={'transferResidency'}>
                                            Transfer of Residency
                                        </MenuItem>
                                        <MenuItem value={'livingStill'}>Living Still</MenuItem>
                                        <MenuItem value={'birthFact'}>Birth Fact</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        {renderForm.barangayClearance === true && (
                            <BarangayClearanceForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.barangayID === true && (
                            <BarangayIDForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.soloParent === true && (
                            <SoloParentForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.cohabitation === true && (
                            <CohabitationForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.goodMoral === true && (
                            <GoodMoralForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.noIncome === true && (
                            <NoIncomeForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.firstTimeJobSeeker === true && (
                            <FirstTimeJobSeekerForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.residency === true && (
                            <ResidencyForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.transferResidency === true && (
                            <TransferResidencyForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.livingStill === true && (
                            <LivingStillForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.birthFact === true && (
                            <BirthFactForm
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.indigency === true && (
                            <Indigency
                                disableBack={forMyselfSelected === true && true}
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className={renderVerify === true ? styles['unhide-Verify'] : styles['hide']}>
                <Identity_Proof onBack={handleBackVerify} adminCheck={isAdmin} />
            </div>
        </div>
    );
};
