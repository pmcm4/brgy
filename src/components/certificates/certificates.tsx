import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Footer } from '../footer/footer';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { PersonalForm } from '../personal-form/personal-form';
import { PFAddress } from '../pf-address/pf-address';
import {
    BarangayClearanceForm,
    BarangayIDForm,
    BirthFactForm,
    CohabitationForm,
    FirstTimeJobSeekerForm,
    GoodMoralForm,
    LivingStillForm,
    NoIncomeForm,
    ResidencyForm,
    SoloParentForm,
    TransferResidencyForm,
} from './DropDownForms';
import { Identity_Proof } from '../identity-proof/identity-proof';
import { ReviewContext } from '../context/ReviewContext';

import axios from 'axios';
import { defaultApi } from '../../api';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

export interface CertificatesProps {
    className?: string;
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

    const reviewContext = useContext(ReviewContext);
    const authContext = useContext(AuthContext);

    const getUserDetails = async () => {
        try {
            const username = JSON.parse(String(localStorage.getItem('currentUser')));
            const sendRequest = await axios.get(
                `${defaultApi}/api/requestData/getSingleUserDetails/${username.username}`
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

                setRenderRequestor(false);
                setRenderChoose(true);
                setForMyselfSelected(true);
            }
        } catch (error) {
            console.log(error);
        }
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
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setRenderForm(() => {
            return {
                barangayClearance: false,
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

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>

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
                            onClick={(e) => {
                                setRenderRequestor(false);
                                setRenderPF(true);
                            }}
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
                <div className={renderRequestor === true ? styles['unhide'] : styles['hide']}>
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
                            onClick={(e) => {
                                setRenderRequestor(false);
                                setRenderPF(true);
                            }}
                        >
                            For someone else
                        </button>
                    </div>
                </div>
            )}

            <div className={renderPF === true ? styles['unhide'] : styles['hide']}>
                {forMyselfSelected === true ? (
                    <PersonalForm handleSubmit={handlePersonalFormNext} selfInput={userDetails} />
                ) : (
                    <PersonalForm handleSubmit={handlePersonalFormNext} />
                )}
            </div>

            <div className={renderAdd === true ? styles['unhide'] : styles['hide']}>
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

            <div className={renderChoose === true ? styles['unhide'] : styles['hide']}>
                <div className={styles['certs-container']}>
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </span>
                    <button className={styles['existing-profile']}>Existing Profile</button>
                    <div className={styles['input-form']}>
                        <label className={styles['label-forms']}>Residency:</label>
                        <br />
                        <select
                            defaultValue={'Select Certificate'}
                            className={styles['input-drop-down']}
                            onChange={handleOnChange}
                        >
                            <option disabled>Select Certificate</option>
                            <option value={'barangayClearance'}>Barangay Clearance</option>
                            <option value={'barangayID'}>Barangay ID</option>
                            <option value={'soloParent'}>Solo Parent</option>
                            <option value={'cohabitation'}>Cohabitation</option>
                            <option value={'goodMoral'}>Good Moral</option>
                            <option value={'noIncome'}>No Income</option>
                            <option value={'firstTimeJobSeeker'}>First Time Job Seeker</option>
                            <option value={'residency'}>Residency</option>
                            <option value={'transferResidency'}>Transfer of Residency</option>
                            <option value={'livingStill'}>Living Still</option>
                            <option value={'birthFact'}>Birth Fact</option>
                        </select>

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
                    </div>
                </div>
            </div>

            <div className={renderVerify === true ? styles['unhide'] : styles['hide']}>
                <Identity_Proof onBack={handleBackVerify} />
            </div>
        </div>
    );
};
