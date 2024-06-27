import React, { useContext, useEffect, useState } from 'react';
import styles from './profile.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { defaultApi } from '../../api';
import { AuthContext } from '../context/authContext';
import { useAxios } from '../utils/useAxios';
import { useQuery } from 'react-query';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface EditProfileProps {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditProfile({ closeModal }: EditProfileProps) {
    const [userDetails, setUserDetails] = useState({
        username: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        name_ext: '',
        gender: '',
        email_address: '',
        contact_num: '',
        birth_date: '',
        religion: '',
        civil_status: '',
        sector: '',
        residency: '',
        years_in_san_roque: '',
        block: '',
        street: '',
        emerg_name: '',
        emerg_rel: '',
        emer_contact: '',
        emer_address: '',
    });
    const [editData, setEditData] = useState<object | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const [sucessMsg, setSucessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    const authContext = useContext(AuthContext);

    let useJWTAxios = useAxios();

    const usernameFromURL = location.pathname.split('/')[3];

    useQuery(
        'fetch_user_data',
        async () => {
            const userData = await useJWTAxios.get(
                `${process.env.API_DOMAIN}/api/requestData/getSingleUserDetails/${usernameFromURL}`,
                {
                    headers: { authorization: 'Bearer ' + authContext?.accessToken },
                }
            );

            setUserDetails({
                username: usernameFromURL,
                first_name: userData.data[0].first_name,
                middle_name: userData.data[0].middle_name,
                last_name: userData.data[0].last_name,
                name_ext: userData.data[0].name_ext,
                gender: userData.data[0].gender,
                email_address: userData.data[0].email_address,
                contact_num: userData.data[0].contact_num,
                birth_date: userData.data[0].birth_date,
                religion: userData.data[0].religion,
                civil_status: userData.data[0].civil_status,
                sector: userData.data[0].sector,
                residency: userData.data[0].residency,
                years_in_san_roque: userData.data[0].years_in_san_roque,
                block: userData.data[0].block,
                street: userData.data[0].street,
                emerg_name: userData.data[0].emerg_name,
                emer_address: userData.data[0].emer_address,
                emer_contact: userData.data[0].emer_contact,
                emerg_rel: userData.data[0].emerg_rel,
            });
        },
        {
            cacheTime: 10000,
            staleTime: 30000,
            refetchOnWindowFocus: true,
        }
    );

    useEffect(() => {
        try {
            if (authContext?.currentUser === null) {
                navigate('/home');
            }

            if (usernameFromURL !== authContext?.currentUser) {
                navigate('/error');
            }

            setEditData(userDetails);
        } catch (error) {
            console.log(error);
        }
    }, [userDetails]);

    const handleOnChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const saveBtn = async () => {
        try {
            const sendUpdate = await useJWTAxios.put(
                `${process.env.API_DOMAIN}/api/requestData/updateUserInfoClient`,
                editData,
                {
                    headers: { authorization: 'Bearer ' + authContext?.accessToken },
                }
            );

            console.log(sendUpdate.status);
            setSucessMsg(true);

            setTimeout(() => {
                setSucessMsg(false);
            }, 5000);
        } catch (error) {
            setFailedMsg(true);
            setTimeout(() => {
                setFailedMsg(false);
            }, 5000);
            console.log(error);
        }
    };

    return (
        <div className={styles['profile-main-body']}>
            <div className={styles['header-image']} />
            <div className={styles['user-contents']}>
                <div className={styles['profile-edit-main-div']}>
                    <div className={styles['edit-header-w-btn']}>
                        <button
                            className={styles['back-btn']}
                            onClick={() => {
                                navigate(`/profile/${usernameFromURL}`);
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: '28px' }} />
                        </button>
                        <span className={styles['edit-profile-header-w-btn']}>
                            Edit Information
                        </span>
                    </div>
                    <hr />
                    <br />
                    <span className={styles['edit-profile-header']}>Personal Information</span>
                    <hr />
                    <div className={styles['request-text-details-inner']}>
                        <div className={styles['row-review-input-data']}>
                            <span>First Name: </span>
                            <input
                                name="first_name"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.first_name}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Middle Name: </span>
                            <input
                                name="middle_name"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.middle_name}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Last Name: </span>
                            <input
                                name="last_name"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.last_name}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Name Extension: </span>
                            <input
                                name="name_ext"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.name_ext}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Gender: </span>
                            <input
                                name="gender"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.gender}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Email Address: </span>
                            <input
                                name="email_address"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.email_address}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Contact Number: </span>
                            <input
                                name="contact_num"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.contact_num}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Birth Date: </span>
                            <input
                                name="birth_date"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.birth_date}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Religion: </span>
                            <input
                                name="religion"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.religion}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Status: </span>
                            <input
                                name="civil_status"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.civil_status}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Sector: </span>
                            <input
                                name="sector"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.sector}
                            />
                        </div>
                    </div>
                    <br />
                    <span className={styles['edit-profile-header']}>Address Information</span>
                    <hr />
                    <div className={styles['request-text-details-inner']}>
                        <div className={styles['row-review-input-data']}>
                            <span>Residency: </span>
                            <input
                                name="residency"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.residency}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Years in San Roque: </span>
                            <input
                                name="years_in_san_roque"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.years_in_san_roque}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Block/Lot: </span>
                            <input
                                name="block"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.block}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Street: </span>
                            <input
                                name="street"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.street}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Barangay: </span>
                            <input
                                name="barangay"
                                onChange={handleOnChangeEdit}
                                defaultValue="San Roque"
                                disabled
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>City: </span>
                            <input
                                name="city"
                                onChange={handleOnChangeEdit}
                                defaultValue="Marikina City"
                                disabled
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Province: </span>
                            <input
                                name="province"
                                onChange={handleOnChangeEdit}
                                defaultValue="Metro Manila"
                                disabled
                            />
                        </div>
                    </div>
                    <br />
                    <span className={styles['edit-profile-header']}>Emergency Information</span>
                    <hr />
                    <div className={styles['request-text-details-inner']}>
                        <div className={styles['row-review-input-data']}>
                            <span>Emergency Full Name: </span>
                            <input
                                name="emerg_name"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.emerg_name}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Emergency Relationship: </span>
                            <input
                                name="emerg_rel"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.emerg_rel}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Emergency Contact Number:</span>
                            <input
                                name="emer_contact"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.emer_contact}
                            />
                        </div>
                        <div className={styles['row-review-input-data']}>
                            <span>Emergency Address: </span>
                            <input
                                name="emer_address"
                                onChange={handleOnChangeEdit}
                                defaultValue={userDetails.emer_address}
                            />
                        </div>
                    </div>
                    <div className={styles['profile-edit-btn-div']}>
                        {' '}
                        {sucessMsg === true && (
                            <span className={styles['sucess-msg']}>Edit saved!</span>
                        )}
                        {failedMsg === true && (
                            <span className={styles['failed-msg']}>Something went wrong...</span>
                        )}
                        <button className={styles['edit-btn']} onClick={saveBtn}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
