import React, { useState } from 'react';
import styles from './profile.module.scss';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';

function ReuploadModal() {
    const [validIDImg, setValidIDImg] = useState({ name: '', file: {} });
    const [selfPicImg, setSelfPicImg] = useState({ name: '', file: {} });
    const [letterFile, setLetterFile] = useState({ name: '', file: {} });

    const [successMsg, setSuccessMsg] = useState(false);
    const [failedMsg, setFailedMsg] = useState(false);

    const [displayValidID, setDisplayValidID] = useState<Blob | MediaSource | null>(null);
    const [displaySelfImage, setDisplaySelfImage] = useState<Blob | MediaSource | null>(null);
    const [displayLetterFileName, setDisplayLetterFileName] = useState<string | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    const usernameFromURL = location.pathname.split('/')[2];

    const request_id_number = location.pathname.split('/')[4];

    const user_file_upload = new FormData();

    const handleIDupload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setValidIDImg({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });

        const validIdBlob = new Blob([e.target.files![0]], {
            type: 'image/jpeg' || 'image/png',
        });

        setDisplayValidID(validIdBlob);
    };

    const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setSelfPicImg({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });
        const selfImageBlob = new Blob([e.target.files![0]], {
            type: 'image/jpeg' || 'image/png',
        });

        setDisplaySelfImage(selfImageBlob);
    };

    const handleUpdateUpload = async () => {
        try {
            user_file_upload.append('valid_id_image', validIDImg?.file as Blob);

            user_file_upload.append('self_image', selfPicImg?.file as Blob);
            user_file_upload.append('id', request_id_number);

            await axios
                .post(
                    `${process.env.API_DOMAIN}/api/requestData/reuploadIDtoCloud`,
                    user_file_upload
                )
                .then(async () => {
                    const respondBody = {
                        request_id: Number(request_id_number),
                    };
                    const updateRequest = await axios.put(
                        `${process.env.API_DOMAIN}/api/requestData/reupload`,
                        respondBody
                    );

                    if (updateRequest.status === 200) {
                        setSuccessMsg(true);
                    } else {
                        setSuccessMsg(false);
                        setFailedMsg(true);
                    }
                });
        } catch (error) {
            setSuccessMsg(false);
            setFailedMsg(true);
        }
    };

    const handleResetStates = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //reset all states and navigate to initial certificate process AFTER SUCCESS REUQEST SUBMISSION
        window.location.reload();
    };

    const handleTryAgainBtn = () => {
        setFailedMsg(false);
    };

    return (
        <>
            <div className={styles['header-image']} />
            <div className={styles['reupload-background']}>
                <div className={styles['reupload-container']}>
                    <div className={styles['edit-header-w-btn']}>
                        <button
                            className={styles['back-btn']}
                            onClick={() => {
                                navigate(`/profile/${usernameFromURL}`);
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: '28px' }} />
                        </button>
                        <span className={styles['edit-profile-header-w-btn']}>Reupload</span>
                    </div>
                    <hr />
                    <div className={styles['upload-div']}>
                        <div className={styles['first-id']}>
                            {displayValidID !== null ? (
                                <img
                                    src={URL.createObjectURL(displayValidID)}
                                    className={styles['img-container']}
                                />
                            ) : (
                                <img
                                    src="https://storage.googleapis.com/barangay-san-roque-public/govt-id-guide.jpg"
                                    className={styles['img-container']}
                                />
                            )}
                            <label className={styles['file-btn']}>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleIDupload}
                                />
                                Upload Valid ID
                            </label>
                            <span>
                                Valid ID should be addressed in Barangay San Roque only. Accepted
                                Government ID's: Driver's License, UMID, SSS, PhilSys etc.
                            </span>
                        </div>

                        <div className={styles['second-id']}>
                            {displaySelfImage !== null ? (
                                <img
                                    src={URL.createObjectURL(displaySelfImage)}
                                    className={styles['img-container']}
                                />
                            ) : (
                                <img
                                    src="https://storage.googleapis.com/barangay-san-roque-public/self-image.jpg"
                                    className={styles['img-container']}
                                />
                            )}
                            <label className={styles['file-btn']}>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handlePicUpload}
                                />
                                Upload 2x2 Picture
                            </label>
                            <span>
                                2x2 ID Picture should have white background and no accessories
                                (glasses, mask, hat etc.)
                            </span>
                        </div>
                    </div>
                    <button onClick={handleUpdateUpload}>Submit</button>
                </div>
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
        </>
    );
}

export default ReuploadModal;
