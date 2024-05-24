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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import FailedModal from '../message-modals/FailedModal';
import SuccessModal from '../message-modals/SuccessModal';

function ReviewModal() {
    const reviewContext = useContext(ReviewContext);

    const [successMsg, setSuccessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    const handleSubmitForMyself = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault();
            const date = new Date().toLocaleDateString();
            const username = JSON.parse(String(localStorage.getItem('currentUser')));
            const DataToSend = {
                username: username.username,
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: date,
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

            const sendData = await axios.post(
                `${defaultApi}/api/requestData/submitRequest`,
                DataToSend
            );

            if (sendData.status === 200) {
                setSuccessMsg(true);
            } else {
                setSuccessMsg(false);
                setFailedMsg(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitForSomeoneElse = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            e.preventDefault();
            const date = new Date().toLocaleDateString();
            const username = JSON.parse(String(localStorage.getItem('currentUser')));
            const DataToSend = {
                username: username.username,
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: date,
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

            const sendData = await axios.post(
                `${defaultApi}/api/requestData/submitForSomeoneElseRequest`,
                DataToSend
            );

            if (sendData.status === 200) {
                setSuccessMsg(true);
            } else {
                setSuccessMsg(false);
                setFailedMsg(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUnregisteredRequest = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            e.preventDefault();
            const date = new Date().toLocaleDateString();
            const DataToSend = {
                //certificate request details
                selected_cert_type: reviewContext?.certificateForm?.selectedCert,
                request_date: date,

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

            const sendData = await axios.post(
                `${defaultApi}/api/requestData/unregisteredUserRequest`,
                DataToSend
            );

            if (sendData.status === 200) {
                setSuccessMsg(true);
            } else {
                setSuccessMsg(false);
                setFailedMsg(true);
            }
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
            <div>
                <span> Requestor's Personal Information</span>
                <hr />
                <div className={styles['request-text-details-inner']}>
                    <div className={styles['row-review-input-data']}>
                        <span>First Name: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.firstName || ''}
                            name="first_name"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Middle Name: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.middleName || ''}
                            name="middle_name"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Last Name: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.lastName || ''}
                            name="last_name"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Name Extension: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.nameExt || ''}
                            name="name_ext"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Gender: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.gender || ''}
                            name="gender"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Email Address: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.emailAddress || ''}
                            name="email_address"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Contact Number: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.contactNum || ''}
                            name="contact_num"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Birth Date: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.birthDate || ''}
                            name="birth_date"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Religion: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.religion || ''}
                            name="religion"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Status: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.status || ''}
                            name="civil_status"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Sector: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.sector || ''}
                            name="sector"
                        />
                    </div>
                </div>

                <br />
                <span> Requestor's Emergency Information</span>
                <hr />
                <div className={styles['request-text-details-inner']}>
                    <div className={styles['row-review-input-data']}>
                        <span>Emergency Full Name: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.emergName || ''}
                            name="emerg_name"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Emergency Relationship: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.emergRel || ''}
                            name="emerg_rel"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Emergency Contact Number:</span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.emerContact || ''}
                            name="emer_contact"
                        />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Emergency Address: </span>
                        <input
                            disabled
                            value={reviewContext?.personalForm?.emerAddress || ''}
                            name="emer_address"
                        />
                    </div>
                </div>
            </div>
            <div>
                <span> Requestor's Address</span>
                <hr />
                <div className={styles['request-text-details-inner']}>
                    <div className={styles['row-review-input-data']}>
                        <span>Residency: </span>
                        <input disabled value={reviewContext?.addressForm?.residency || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Years in San Roque: </span>
                        <input disabled value={reviewContext?.addressForm?.yearsInSanRoque || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Block/Lot: </span>
                        <input disabled value={reviewContext?.addressForm?.block || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Street: </span>
                        <input disabled value={reviewContext?.addressForm?.street || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Barangay: </span>
                        <input disabled value={reviewContext?.addressForm?.barangay || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>City: </span>
                        <input disabled value={reviewContext?.addressForm?.city || ''} />
                    </div>
                    <div className={styles['row-review-input-data']}>
                        <span>Province: </span>
                        <input disabled value={reviewContext?.addressForm?.province || ''} />
                    </div>
                </div>

                <br />
            </div>
            <div>
                <span> Requestor's Request Type</span>
                <hr />
                <div className={styles['request-text-details-inner']}>
                    {reviewContext?.certificateForm?.selectedCert === 'barangayClearance' && (
                        <BarangayClearanceForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'indigency' && (
                        <IndigencyForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'barangayID' && (
                        <BarangayIDForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'soloParent' && (
                        <SoloParentForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'cohabitation' && (
                        <CohabitationForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'goodMoral' && (
                        <GoodMoralForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'noIncome' && (
                        <NoIncomeForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'firstTimeJobSeeker' && (
                        <FirstTimeJobSeekerForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'residency' && (
                        <ResidencyForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'transferOfResidency' && (
                        <TransferOfResidencyForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'livingStill' && (
                        <LivingStillForm />
                    )}
                    {reviewContext?.certificateForm?.selectedCert === 'birthFact' && (
                        <BirthFactForm />
                    )}
                </div>
            </div>
            <hr />
            {reviewContext?.selfRequest === true && (
                <button className={styles['submit-button']} onClick={handleSubmitForMyself}>
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
