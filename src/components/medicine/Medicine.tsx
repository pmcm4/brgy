import React, { useContext, useEffect, useState } from 'react';
import styles from './medicine.module.scss';
import { LanguageContext } from '../context/languageContext';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../context/ReviewContext';
import { useAxios } from '../utils/useAxios';
import axios from 'axios';
import MedicineForm from './MedicineForm';

function Medicine() {
    const languageContext = useContext(LanguageContext);
    const authContext = useContext(AuthContext);
    const reviewContext = useContext(ReviewContext);

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

    let useJWTAxios = useAxios();

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
            const sendRequest = await useJWTAxios.get(
                `${process.env.API_DOMAIN}/api/requestData/getSingleUserDetails/${authContext?.currentUser}`,
                {
                    headers: { authorization: 'Bearer ' + authContext?.accessToken },
                }
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

    return (
        <div className={styles.root}>
            <div className={styles['header-certs']}>
                <div id={styles['white-shade']}></div>
                {languageContext?.selectEnglish ? (
                    <span className={styles['heading-text']}>Medicine Request</span>
                ) : (
                    <span className={styles['heading-text']}>Kahilingan ng Gamot</span>
                )}
                {languageContext?.selectEnglish ? (
                    <span className={styles.subheading}>
                        Request Medicine assistance easily by filling out the required form for your
                        needs.
                    </span>
                ) : (
                    <span className={styles.subheading}>
                        Humiling ng tulong sa gamot nang madali sa pamamagitan ng pag-fill up ng
                        form.
                    </span>
                )}
            </div>
            {authContext?.currentUser === null ? (
                <div className={renderRequestor === true ? styles['unhide'] : styles['hide']}>
                    <div className={styles['choose-requestor-no-account']}>
                        {languageContext?.selectEnglish ? (
                            <span style={{ fontSize: '24px', fontWeight: '500' }}>
                                Register an account!
                            </span>
                        ) : (
                            <span style={{ fontSize: '24px', fontWeight: '500' }}>
                                Mag rehistro ng account!
                            </span>
                        )}
                        {languageContext?.selectEnglish ? (
                            <span style={{ marginBottom: '20px' }}>
                                We highly recommend you to register an account first before
                                requesting for certificates. By doing so, your requests will be
                                tracked and managed better by the Barangay administrators. Also, you
                                won't need to re-enter your user information every time you request
                                a certificate if you have a registered account.
                            </span>
                        ) : (
                            <span style={{ marginBottom: '20px' }}>
                                Inirerekomenda naming magrehistro muna ng account bago humiling ng
                                mga sertipiko. Sa ganitong paraan, mas mabuti mong matutunton at
                                mamamahalaan ang iyong mga kahilingan ng mga administrador ng
                                Barangay. Higit pa rito, hindi mo na kailangang ulit-ulitin ang
                                iyong impormasyon sa tuwing humihingi ka ng sertipiko kung mayroon
                                kang rehistradong account.
                            </span>
                        )}
                        <Link to={'/register'}>
                            {languageContext?.selectEnglish ? (
                                <button
                                    style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                >
                                    Register
                                </button>
                            ) : (
                                <button
                                    style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                >
                                    Mag Rehistro
                                </button>
                            )}
                        </Link>
                        {languageContext?.selectEnglish ? (
                            <button
                                style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                onClick={unregisteredRequestSelected}
                            >
                                Continue without registration
                            </button>
                        ) : (
                            <button
                                style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                onClick={unregisteredRequestSelected}
                            >
                                Mag-patuloy kahit hindi naka-rehistro
                            </button>
                        )}
                        <span>OR</span>
                        <Link to={'/login'}>
                            {languageContext?.selectEnglish ? (
                                <button
                                    style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                >
                                    Mag login
                                </button>
                            )}
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
                    {languageContext?.selectEnglish ? (
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
                    ) : (
                        <div className={styles['choose-requestor']}>
                            <span style={{ fontSize: '30px', fontWeight: '600' }}>
                                Sino ang mag rerequest?
                            </span>
                            <button
                                style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                onClick={getUserDetails}
                            >
                                Para sa aking sarili
                            </button>
                            <button
                                style={{ fontSize: '18px', fontWeight: '600', width: '200px' }}
                                onClick={ForSomeoneElseSelected}
                            >
                                Para sa ibang tao
                            </button>
                        </div>
                    )}
                </div>
            )}

            {forMyselfSelected && <MedicineForm />}
        </div>
    );
}

export default Medicine;
