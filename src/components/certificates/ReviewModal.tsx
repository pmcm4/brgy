import React, { useContext, useState } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';
import {
    BarangayClearanceForm,
    BarangayIDForm,
    BirthFactForm,
    CohabitationForm,
    FirstTimeJobSeekerForm,
    GoodMoralForm,
    IndigencyForm,
    LivingStillForm,
    NoIncomeForm,
    ResidencyForm,
    SoloParentForm,
    TransferOfResidencyForm,
} from './RequestForms';
import axios from 'axios';
import { defaultApi } from '../../api';
import FailedModal from '../message-modals/FailedModal';
import SuccessModal from '../message-modals/SuccessModal';
import { AuthContext } from '../context/authContext';
import TextField from '@mui/material/TextField';
import { LanguageContext } from '../context/languageContext';

interface ReviewModalProps {
    imgID: {
        name: string;
        file: object;
    } | null;
    imgSelf: {
        name: string;
        file: object;
    } | null;
    letterDoc?: {
        name: string;
        file: object;
    } | null;
    signatureImg: string | null;
}

function ReviewModal({ imgID, imgSelf, signatureImg, letterDoc }: ReviewModalProps) {
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);

    const [successMsg, setSuccessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    const authContext = useContext(AuthContext);

    const handleSubmitForMyself = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault();
            const date = new Date();

            const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            const user_file_upload = new FormData();

            const DataToSend = {
                username: authContext?.currentUser,
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: dateNow,
                purpose: reviewContext?.certificateForm?.purpose,
                childName: reviewContext?.certificateForm?.childName,
                childGender: reviewContext?.certificateForm?.childGender,
                soloParentSince: reviewContext?.certificateForm?.soloParentSince,
                presentedBy: reviewContext?.certificateForm?.presentedBy,
                registryNumber: reviewContext?.certificateForm?.registryNumber,
                nameOfRequestor: reviewContext?.certificateForm?.nameOfRequestor,
                birthAddress: reviewContext?.certificateForm?.birthAddress,
                spouseName: reviewContext?.certificateForm?.spouseName,
                dateOfMarriage: reviewContext?.certificateForm?.DateOfMarriage,
                noIncomeSince: reviewContext?.certificateForm?.noIncomeSince,
                DateOfResidency: reviewContext?.certificateForm?.DateOfResidency,
                newAddress: reviewContext?.certificateForm?.newAddress,
                DateOfTabloid: reviewContext?.certificateForm?.DateOfTabloid,
                DateBorn: reviewContext?.certificateForm?.DateBorn,
                witnessName: reviewContext?.certificateForm?.witnessName,
                witnessType: reviewContext?.certificateForm?.witnessType,
            };

            await axios
                .post(`${process.env.API_DOMAIN}/api/requestData/submitRequest`, DataToSend)
                .then(async (data) => {
                    const request_id_number = data.data;
                    user_file_upload.append('valid_id_image', imgID?.file as Blob);
                    user_file_upload.append('self_image', imgSelf?.file as Blob);
                    user_file_upload.append('letter_doc', letterDoc?.file as Blob);
                    user_file_upload.append('id', request_id_number);
                    user_file_upload.append('signature_image', signatureImg!);

                    const uploadImage = await axios.post(
                        `${process.env.API_DOMAIN}/api/requestData/uploadIDtoCloud`,
                        user_file_upload
                    );

                    if (uploadImage.status === 200 && data.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            console.log(error);
            setSuccessMsg(false);
            setFailedMsg(true);
        }
    };

    const handleAdminSelected = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault();
            const date = new Date();

            const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            const DataToSend = {
                username: authContext?.currentUser,
                user_id: reviewContext?.selectedUserIDByAdmin,

                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: dateNow,
                purpose: reviewContext?.certificateForm?.purpose,
                childName: reviewContext?.certificateForm?.childName,
                childGender: reviewContext?.certificateForm?.childGender,
                soloParentSince: reviewContext?.certificateForm?.soloParentSince,
                presentedBy: reviewContext?.certificateForm?.presentedBy,
                registryNumber: reviewContext?.certificateForm?.registryNumber,
                nameOfRequestor: reviewContext?.certificateForm?.nameOfRequestor,
                birthAddress: reviewContext?.certificateForm?.birthAddress,
                spouseName: reviewContext?.certificateForm?.spouseName,
                dateOfMarriage: reviewContext?.certificateForm?.DateOfMarriage,
                noIncomeSince: reviewContext?.certificateForm?.noIncomeSince,
                DateOfResidency: reviewContext?.certificateForm?.DateOfResidency,
                newAddress: reviewContext?.certificateForm?.newAddress,
                DateOfTabloid: reviewContext?.certificateForm?.DateOfTabloid,
                DateBorn: reviewContext?.certificateForm?.DateBorn,
                witnessName: reviewContext?.certificateForm?.witnessName,
                witnessType: reviewContext?.certificateForm?.witnessType,
            };

            await axios
                .post(`${process.env.API_DOMAIN}/api/requestData/submitAdminSelected`, DataToSend)
                .then(async (data) => {
                    if (data.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitAdminNonExistingProfile = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            e.preventDefault();
            const date = new Date();

            const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            const DataToSend = {
                username: authContext?.currentUser,
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: dateNow,
                first_name: reviewContext?.personalForm?.firstName,
                middle_name: reviewContext?.personalForm?.middleName,
                last_name: reviewContext?.personalForm?.lastName,
                name_ext: reviewContext?.personalForm?.nameExt,
                email_address: reviewContext?.personalForm?.emailAddress,
                gender: reviewContext?.personalForm?.gender,
                contact_num: reviewContext?.personalForm?.contactNum,
                birth_date: reviewContext?.personalForm?.birthDate,
                religion: reviewContext?.personalForm?.religion,
                civil_status: reviewContext?.personalForm?.status,
                sector: reviewContext?.personalForm?.sector,
                emerg_name: reviewContext?.personalForm?.emergName,
                emerg_rel: reviewContext?.personalForm?.emergRel,
                emer_contact: reviewContext?.personalForm?.emerContact,
                emer_address: reviewContext?.personalForm?.emerAddress,
                years_in_san_roque: reviewContext?.addressForm?.yearsInSanRoque,
                block: reviewContext?.addressForm?.block,
                barangay: reviewContext?.addressForm?.barangay,
                city: reviewContext?.addressForm?.city,
                province: reviewContext?.addressForm?.province,
                street: reviewContext?.addressForm?.street,
                residency: reviewContext?.addressForm?.residency,
                registered: false,

                purpose: reviewContext?.certificateForm?.purpose,
                childName: reviewContext?.certificateForm?.childName,
                childGender: reviewContext?.certificateForm?.childGender,
                soloParentSince: reviewContext?.certificateForm?.soloParentSince,
                presentedBy: reviewContext?.certificateForm?.presentedBy,
                registryNumber: reviewContext?.certificateForm?.registryNumber,
                nameOfRequestor: reviewContext?.certificateForm?.nameOfRequestor,
                birthAddress: reviewContext?.certificateForm?.birthAddress,
                spouseName: reviewContext?.certificateForm?.spouseName,
                dateOfMarriage: reviewContext?.certificateForm?.DateOfMarriage,
                noIncomeSince: reviewContext?.certificateForm?.noIncomeSince,
                DateOfResidency: reviewContext?.certificateForm?.DateOfResidency,
                newAddress: reviewContext?.certificateForm?.newAddress,
                DateOfTabloid: reviewContext?.certificateForm?.DateOfTabloid,
                DateBorn: reviewContext?.certificateForm?.DateBorn,
                witnessName: reviewContext?.certificateForm?.witnessName,
                witnessType: reviewContext?.certificateForm?.witnessType,
            };

            await axios
                .post(
                    `${process.env.API_DOMAIN}/api/requestData/submitAdminNonExistProfile`,
                    DataToSend
                )
                .then(async (data) => {
                    if (data.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitForSomeoneElse = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            e.preventDefault();
            const date = new Date();

            const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            const user_file_upload = new FormData();

            const DataToSend = {
                username: authContext?.currentUser,
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: dateNow,
                first_name: reviewContext?.personalForm?.firstName,
                middle_name: reviewContext?.personalForm?.middleName,
                last_name: reviewContext?.personalForm?.lastName,
                name_ext: reviewContext?.personalForm?.nameExt,
                email_address: reviewContext?.personalForm?.emailAddress,
                gender: reviewContext?.personalForm?.gender,
                contact_num: reviewContext?.personalForm?.contactNum,
                birth_date: reviewContext?.personalForm?.birthDate,
                religion: reviewContext?.personalForm?.religion,
                civil_status: reviewContext?.personalForm?.status,
                sector: reviewContext?.personalForm?.sector,
                emerg_name: reviewContext?.personalForm?.emergName,
                emerg_rel: reviewContext?.personalForm?.emergRel,
                emer_contact: reviewContext?.personalForm?.emerContact,
                emer_address: reviewContext?.personalForm?.emerAddress,
                years_in_san_roque: reviewContext?.addressForm?.yearsInSanRoque,
                block: reviewContext?.addressForm?.block,
                barangay: reviewContext?.addressForm?.barangay,
                city: reviewContext?.addressForm?.city,
                province: reviewContext?.addressForm?.province,
                street: reviewContext?.addressForm?.street,
                residency: reviewContext?.addressForm?.residency,
                registered: false,

                purpose: reviewContext?.certificateForm?.purpose,
                childName: reviewContext?.certificateForm?.childName,
                childGender: reviewContext?.certificateForm?.childGender,
                soloParentSince: reviewContext?.certificateForm?.soloParentSince,
                presentedBy: reviewContext?.certificateForm?.presentedBy,
                registryNumber: reviewContext?.certificateForm?.registryNumber,
                nameOfRequestor: reviewContext?.certificateForm?.nameOfRequestor,
                birthAddress: reviewContext?.certificateForm?.birthAddress,
                spouseName: reviewContext?.certificateForm?.spouseName,
                dateOfMarriage: reviewContext?.certificateForm?.DateOfMarriage,
                noIncomeSince: reviewContext?.certificateForm?.noIncomeSince,
                DateOfResidency: reviewContext?.certificateForm?.DateOfResidency,
                newAddress: reviewContext?.certificateForm?.newAddress,
                DateOfTabloid: reviewContext?.certificateForm?.DateOfTabloid,
                DateBorn: reviewContext?.certificateForm?.DateBorn,
                witnessName: reviewContext?.certificateForm?.witnessName,
                witnessType: reviewContext?.certificateForm?.witnessType,
            };

            await axios
                .post(
                    `${process.env.API_DOMAIN}/api/requestData/submitForSomeoneElseRequest`,
                    DataToSend
                )
                .then(async (data) => {
                    const request_id_number = data.data;
                    console.log(request_id_number);
                    user_file_upload.append('valid_id_image', imgID?.file as Blob);
                    user_file_upload.append('self_image', imgSelf?.file as Blob);
                    user_file_upload.append('letter_doc', letterDoc?.file as Blob);
                    user_file_upload.append('id', request_id_number);
                    user_file_upload.append('signature_image', signatureImg!);

                    const uploadImage = await axios.post(
                        `${process.env.API_DOMAIN}/api/requestData/uploadIDtoCloud`,
                        user_file_upload
                    );

                    if (uploadImage.status === 200 && data.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUnregisteredRequest = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            e.preventDefault();
            const date = new Date();

            const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            const user_file_upload = new FormData();

            const DataToSend = {
                //certificate request details
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: dateNow,

                //user info details
                first_name: reviewContext?.personalForm?.firstName,
                middle_name: reviewContext?.personalForm?.middleName,
                last_name: reviewContext?.personalForm?.lastName,
                name_ext: reviewContext?.personalForm?.nameExt,
                email_address: reviewContext?.personalForm?.emailAddress,
                gender: reviewContext?.personalForm?.gender,
                contact_num: reviewContext?.personalForm?.contactNum,
                birth_date: reviewContext?.personalForm?.birthDate,
                religion: reviewContext?.personalForm?.religion,
                civil_status: reviewContext?.personalForm?.status,
                sector: reviewContext?.personalForm?.sector,
                emerg_name: reviewContext?.personalForm?.emergName,
                emerg_rel: reviewContext?.personalForm?.emergRel,
                emer_contact: reviewContext?.personalForm?.emerContact,
                emer_address: reviewContext?.personalForm?.emerAddress,
                years_in_san_roque: reviewContext?.addressForm?.yearsInSanRoque,
                block: reviewContext?.addressForm?.block,
                barangay: reviewContext?.addressForm?.barangay,
                city: reviewContext?.addressForm?.city,
                province: reviewContext?.addressForm?.province,
                street: reviewContext?.addressForm?.street,
                residency: reviewContext?.addressForm?.residency,
                registered: false,

                //certificate request details
                purpose: reviewContext?.certificateForm?.purpose,
                childName: reviewContext?.certificateForm?.childName,
                childGender: reviewContext?.certificateForm?.childGender,
                soloParentSince: reviewContext?.certificateForm?.soloParentSince,
                presentedBy: reviewContext?.certificateForm?.presentedBy,
                registryNumber: reviewContext?.certificateForm?.registryNumber,
                nameOfRequestor: reviewContext?.certificateForm?.nameOfRequestor,
                birthAddress: reviewContext?.certificateForm?.birthAddress,
                spouseName: reviewContext?.certificateForm?.spouseName,
                dateOfMarriage: reviewContext?.certificateForm?.DateOfMarriage,
                noIncomeSince: reviewContext?.certificateForm?.noIncomeSince,
                DateOfResidency: reviewContext?.certificateForm?.DateOfResidency,
                newAddress: reviewContext?.certificateForm?.newAddress,
                DateOfTabloid: reviewContext?.certificateForm?.DateOfTabloid,
                DateBorn: reviewContext?.certificateForm?.DateBorn,
                witnessName: reviewContext?.certificateForm?.witnessName,
                witnessType: reviewContext?.certificateForm?.witnessType,
            };

            await axios
                .post(
                    `${process.env.API_DOMAIN}/api/requestData/unregisteredUserRequest`,
                    DataToSend
                )
                .then(async (data) => {
                    const request_id_number = data.data;
                    console.log(request_id_number);
                    user_file_upload.append('valid_id_image', imgID?.file as Blob);
                    user_file_upload.append('self_image', imgSelf?.file as Blob);
                    user_file_upload.append('letter_doc', letterDoc?.file as Blob);
                    user_file_upload.append('id', request_id_number);
                    user_file_upload.append('signature_image', signatureImg!);

                    const uploadImage = await axios.post(
                        `${process.env.API_DOMAIN}/api/requestData/uploadIDtoCloud`,
                        user_file_upload
                    );

                    if (uploadImage.status === 200 && data.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleTryAgainBtn = () => {
        setFailedMsg(false);
    };

    const handleResetStates = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //reset all states and navigate to initial certificate process AFTER SUCCESS REUQEST SUBMISSION
        window.location.reload();
    };
    return (
        <div className={styles['review-modal-container']}>
            {languageContext?.selectEnglish ? (
                <span className={styles['review-section-labels']}>
                    Requestor's Personal Information
                </span>
            ) : (
                <span className={styles['review-section-labels']}>
                    Personal na Impormasyon ng Humihiling
                </span>
            )}
            <hr />
            <div className={styles['request-text-details-inner']}>
                <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.firstName || ''}
                    name="first_name"
                />

                <TextField
                    id="outlined-basic"
                    label="Middle Name"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.middleName || ''}
                    name="middle_name"
                />

                <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.lastName || ''}
                    name="last_name"
                />

                <TextField
                    id="outlined-basic"
                    label="Name Ext."
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.nameExt || ''}
                    name="name_ext"
                />

                <TextField
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.gender || ''}
                    name="gender"
                />

                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.emailAddress || ''}
                    name="email_address"
                />

                <TextField
                    id="outlined-basic"
                    label="Contact Number"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.contactNum || ''}
                    name="contact_num"
                />

                <TextField
                    id="outlined-basic"
                    label="Birth Date"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.birthDate || ''}
                    name="birth_date"
                />

                <TextField
                    id="outlined-basic"
                    label="Religion"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.religion || ''}
                    name="religion"
                />

                <TextField
                    id="outlined-basic"
                    label="Civil Status"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.status || ''}
                    name="civil_status"
                />

                <TextField
                    id="outlined-basic"
                    label="Sector"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.sector || ''}
                    name="sector"
                />
            </div>

            <br />
            {languageContext?.selectEnglish ? (
                <span className={styles['review-section-labels']}>
                    Requestor's Emergency Information
                </span>
            ) : (
                <span className={styles['review-section-labels']}>
                    Emerhensiyang Impormasyon ng Humihiling
                </span>
            )}
            <hr />
            <div className={styles['request-text-details-inner']}>
                <TextField
                    id="outlined-basic"
                    label="Emergency Name"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.emergName || ''}
                    name="emerg_name"
                />
                <TextField
                    id="outlined-basic"
                    label="Emergency Relationship"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.emergRel || ''}
                    name="emerg_rel"
                />
                <TextField
                    id="outlined-basic"
                    label="Emergency Contact Number"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.emerContact || ''}
                    name="emer_contact"
                />
                <TextField
                    multiline
                    label="Emergency Address"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.personalForm?.emerAddress || ''}
                    name="emer_address"
                />{' '}
            </div>
            <br />
            {languageContext?.selectEnglish ? (
                <span className={styles['review-section-labels']}> Requestor's Address</span>
            ) : (
                <span className={styles['review-section-labels']}> Address ng Humihiling</span>
            )}
            <hr />
            <div className={styles['request-text-details-inner']}>
                <TextField
                    id="outlined-basic"
                    label="Resideny"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.residency || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="Years in San Roque"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.yearsInSanRoque || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="Block"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.block || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="Street"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.street || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="Barangay"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.barangay || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.city || ''}
                />

                <TextField
                    id="outlined-basic"
                    label="Province"
                    variant="outlined"
                    className={styles['text-field-mui-override']}
                    disabled
                    value={reviewContext?.addressForm?.province || ''}
                />
            </div>

            <br />

            {languageContext?.selectEnglish ? (
                <span className={styles['review-section-labels']}> Requestor's Request Type</span>
            ) : (
                <span className={styles['review-section-labels']}>
                    Uri ng Kahilingan ng Humihiling
                </span>
            )}
            <hr />
            <div className={styles['request-text-details-inner-type']}>
                {reviewContext?.certificateForm?.selectedCert === 'barangayClearance' && (
                    <BarangayClearanceForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'indigency' && <IndigencyForm />}
                {reviewContext?.certificateForm?.selectedCert === 'barangayID' && (
                    <BarangayIDForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'soloParent' && (
                    <SoloParentForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'cohabitation' && (
                    <CohabitationForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'goodMoral' && <GoodMoralForm />}
                {reviewContext?.certificateForm?.selectedCert === 'noIncome' && <NoIncomeForm />}
                {reviewContext?.certificateForm?.selectedCert === 'firstTimeJobSeeker' && (
                    <FirstTimeJobSeekerForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'residency' && <ResidencyForm />}
                {reviewContext?.certificateForm?.selectedCert === 'transferOfResidency' && (
                    <TransferOfResidencyForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'livingStill' && (
                    <LivingStillForm />
                )}
                {reviewContext?.certificateForm?.selectedCert === 'birthFact' && <BirthFactForm />}
            </div>

            <hr />
            {reviewContext?.selfRequest === true && (
                <button className={styles['submit-button']} onClick={handleSubmitForMyself}>
                    Submit
                </button>
            )}
            {reviewContext?.adminSelected === true && (
                <button className={styles['submit-button']} onClick={handleAdminSelected}>
                    Submit
                </button>
            )}
            {reviewContext?.adminNonExistingProfileSelected === true && (
                <button
                    className={styles['submit-button']}
                    onClick={handleSubmitAdminNonExistingProfile}
                >
                    Submit
                </button>
            )}
            {reviewContext?.forSomeoneElseRequest === true && (
                <button className={styles['submit-button']} onClick={handleSubmitForSomeoneElse}>
                    Submit
                </button>
            )}
            {reviewContext?.unregisteredAccountRequest === true && (
                <button className={styles['submit-button']} onClick={handleUnregisteredRequest}>
                    Submit
                </button>
            )}
            {successMsg === true && (
                <SuccessModal
                    title="Request Sumbission"
                    message="Your request is now submitted! Check your profile and email for updates"
                    buttonTitle="Request Another Certificate"
                    resetStates={handleResetStates}
                />
            )}
            {failedMsg === true && (
                <FailedModal
                    title="Request Submission"
                    message="Server error, Try Again later..."
                    buttonTitle="Try Again"
                    buttonLink="/certificates"
                    tryAgainBtn={handleTryAgainBtn}
                />
            )}
        </div>
    );
}

export default ReviewModal;
