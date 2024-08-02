import classNames from 'classnames';
import styles from './identity-proof.module.scss';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useContext, useRef, useState } from 'react';
import ReviewModal from '../certificates/ReviewModal';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { ReviewContext } from '../context/ReviewContext';
import { LanguageContext } from '../context/languageContext';

export interface Identity_ProofProps {
    className?: string;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    adminCheck: boolean | null;
}

const styleSketchCanvas = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '1px',
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Identity_Proof = ({ className, onBack, adminCheck }: Identity_ProofProps) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);
    const [showReviewModal, setShowReviewModal] = useState(false);
    //sketch image
    const [sketchImg, setSketchImg] = useState<string | null>(null);
    const [isCanvasEmtpy, setIsCanvasEmpty] = useState(true);
    const [validIDImg, setValidIDImg] = useState({ name: '', file: {} });
    const [selfPicImg, setSelfPicImg] = useState({ name: '', file: {} });
    const [letterFile, setLetterFile] = useState({ name: '', file: {} });

    const [displayValidID, setDisplayValidID] = useState<Blob | MediaSource | null>(null);
    const [displaySelfImage, setDisplaySelfImage] = useState<Blob | MediaSource | null>(null);
    const [displayLetterFileName, setDisplayLetterFileName] = useState<string | null>(null);

    const [missingUplaod, setMissingUpload] = useState(false);

    const residencyType = reviewContext?.addressForm?.residency;

    const handleClearClick = () => {
        setSketchImg('');
        setIsCanvasEmpty(true);
        canvasRef.current?.clearCanvas();
    };
    const exportSketch = () => {
        canvasRef.current
            ?.exportImage('png')
            .then((data) => {
                setSketchImg(data);
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleReview = () => {
        if (
            (displayValidID === null ||
                displaySelfImage === null ||
                sketchImg === null ||
                sketchImg === '') &&
            (adminCheck === false || adminCheck === null)
        ) {
            setMissingUpload(true);
        } else if (adminCheck === true) {
            setShowReviewModal(!showReviewModal);
        } else {
            setShowReviewModal(!showReviewModal);
        }
    };

    const handleIDupload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setValidIDImg({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });

        const validIdBlob = new Blob([e.target.files![0]], { type: 'image/jpeg' || 'image/png' });

        setDisplayValidID(validIdBlob);
    };

    const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setSelfPicImg({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });
        const selfImageBlob = new Blob([e.target.files![0]], { type: 'image/jpeg' || 'image/png' });

        setDisplaySelfImage(selfImageBlob);
    };

    //, ,

    const handleLetterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setLetterFile({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });

        setDisplayLetterFileName(e.target.files![0].name);
    };

    return (
        <div className={classNames(styles.root, className)}>
            {languageContext?.selectEnglish ? (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Proof of Identity</h1>
                    <span className={styles['perso-subhead']}>
                        Please provide the Following:
                        <br /> Signature (use the sketch canvas below), Government ID, and latest
                        2x2 picture with white background
                    </span>
                    <br />
                    <hr />
                    <br />
                    <div className={styles['input-form-proof']}>
                        <div className={styles['left-sign']}>
                            <div className={styles['signatures-buttons']}>
                                {' '}
                                <ReactSketchCanvas
                                    style={styleSketchCanvas}
                                    className={styles['sketchCanvas']}
                                    width="100%"
                                    height="100%"
                                    strokeWidth={4}
                                    strokeColor="black"
                                    ref={canvasRef}
                                    onStroke={() => {
                                        setIsCanvasEmpty(false);
                                    }}
                                />
                                <div className={styles['sketchBtn']}>
                                    <button
                                        className={styles['nav-btn']}
                                        onClick={handleClearClick}
                                    >
                                        Clear
                                    </button>
                                    {isCanvasEmtpy === true ? (
                                        <button disabled>Save Signature</button>
                                    ) : (
                                        <button
                                            className={styles['nav-btn']}
                                            onClick={exportSketch}
                                        >
                                            Save Signature
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles['right-sign']}>
                            <div className={styles['signatures-buttons']}>
                                <div className={styles['checkSignature']}>
                                    {sketchImg !== '' && (
                                        <img
                                            src={sketchImg!}
                                            className={styles['sketchImgPreview']}
                                        />
                                    )}
                                </div>
                                <div className={styles['sketchBtn']}>
                                    <span className={styles['checkSignatureMessage']}>
                                        Check your signature!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {residencyType === 'Tenant' && (
                        <>
                            {' '}
                            <label className={styles['file-div-doc']}>
                                <label className={styles['file-btn-doc']}>
                                    <input
                                        id="upload"
                                        type="file"
                                        accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={handleLetterUpload}
                                    />
                                    <FileUploadOutlinedIcon />
                                </label>
                                {displayLetterFileName !== null ? (
                                    <span className={styles['display-letter-span']}>
                                        {displayLetterFileName}
                                    </span>
                                ) : (
                                    <span> Upload letter here</span>
                                )}
                            </label>
                            <span className={styles['tenant-letter-span']}>
                                Provide a letter from your landlord certifying that you are an
                                active resident of his/her property, the letter should posses a
                                signature from the landlord and the requestor.
                            </span>
                        </>
                    )}
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
                            {residencyType === 'Home Owner' ? (
                                <span>
                                    Valid ID should be addressed in Barangay San Roque only.
                                    Accepted Government ID's: Driver's License, UMID, SSS, PhilSys
                                    etc.
                                </span>
                            ) : (
                                <span>
                                    Accepted Government ID's: Driver's License, UMID, SSS, PhilSys
                                    etc.
                                </span>
                            )}
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
                    <div className={styles['nav-buttons-container']}>
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Back
                        </button>
                        <button className={styles['nav-btn']} onClick={handleReview}>
                            Review
                        </button>
                    </div>
                    {(adminCheck === false || adminCheck === null) && (
                        <>
                            {missingUplaod === true && (
                                <div className={styles['error-modal-background']}>
                                    <div
                                        className={styles['error-modal-container']}
                                        style={{
                                            color: 'red',
                                            fontSize: '18px',
                                            fontWeight: '450',
                                        }}
                                    >
                                        <br />
                                        {(sketchImg === null || sketchImg === '') && (
                                            <span>
                                                *Please provide a signature then select "Save
                                                Signature" <br />
                                            </span>
                                        )}
                                        {residencyType === 'Tenant' &&
                                            (displayLetterFileName === null ||
                                                displayLetterFileName === '') && (
                                                <span>
                                                    *Please provide a letter from your landlord{' '}
                                                    <br />
                                                </span>
                                            )}
                                        {displayValidID === null && (
                                            <span>
                                                *Please upload a Valid ID. <br />
                                            </span>
                                        )}
                                        {displaySelfImage === null && (
                                            <span>
                                                *Please upload your 2x2 picture. <br />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {showReviewModal === true && (
                        <>
                            <div
                                className={styles['modal-background']}
                                onClick={handleReview}
                            ></div>
                            <ReviewModal
                                imgID={validIDImg}
                                imgSelf={selfPicImg}
                                signatureImg={sketchImg}
                                letterDoc={letterFile}
                            />
                        </>
                    )}{' '}
                </>
            ) : (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Patunay ng Pagkakakilanlan</h1>
                    <span className={styles['perso-subhead']}>
                        Pakiusap na ibigay ang mga sumusunod:
                        <br /> Signature (gamitin ang sketch canvas sa ibaba), Government ID, at
                        pinakabagong 2x2 litrato na may puting background.
                    </span>
                    <br />
                    <hr />
                    <br />
                    <div className={styles['input-form-proof']}>
                        <div className={styles['left-sign']}>
                            <div className={styles['signatures-buttons']}>
                                {' '}
                                <ReactSketchCanvas
                                    style={styleSketchCanvas}
                                    className={styles['sketchCanvas']}
                                    width="100%"
                                    height="100%"
                                    strokeWidth={4}
                                    strokeColor="black"
                                    ref={canvasRef}
                                    onStroke={() => {
                                        setIsCanvasEmpty(false);
                                    }}
                                />
                                <div className={styles['sketchBtn']}>
                                    <button
                                        className={styles['nav-btn']}
                                        onClick={handleClearClick}
                                    >
                                        Clear
                                    </button>
                                    {isCanvasEmtpy === true ? (
                                        <button disabled>I-save ang Signature</button>
                                    ) : (
                                        <button
                                            className={styles['nav-btn']}
                                            onClick={exportSketch}
                                        >
                                            I-save ang Signature
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles['right-sign']}>
                            <div className={styles['signatures-buttons']}>
                                <div className={styles['checkSignature']}>
                                    {sketchImg !== '' && (
                                        <img
                                            src={sketchImg!}
                                            className={styles['sketchImgPreview']}
                                        />
                                    )}
                                </div>
                                <div className={styles['sketchBtn']}>
                                    <span className={styles['checkSignatureMessage']}>
                                        Tignan ang iyong Signature!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {residencyType === 'Tenant' && (
                        <>
                            {' '}
                            <label className={styles['file-div-doc']}>
                                <label className={styles['file-btn-doc']}>
                                    <input
                                        id="upload"
                                        type="file"
                                        accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={handleLetterUpload}
                                    />
                                    <FileUploadOutlinedIcon />
                                </label>
                                {displayLetterFileName !== null ? (
                                    <span className={styles['display-letter-span']}>
                                        {displayLetterFileName}
                                    </span>
                                ) : (
                                    <span>I-upload ang letter dito</span>
                                )}
                            </label>
                            <span className={styles['tenant-letter-span']}>
                                Magbigay ng letter mula sa landlord na nagpapatunay na ikaw ay
                                aktibong residente ng kanyang ari-arian. Ang letter ay dapat na may
                                signature mula sa may-ari ng bahay at mula sa humihiling.
                            </span>
                        </>
                    )}
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
                                I-upload ang Valid ID
                            </label>
                            {residencyType === 'Home Owner' ? (
                                <span>
                                    Ang valid ID ay dapat nakalaan lamang sa Barangay San Roque. Mga
                                    tinatanggap na Government ID: Lisensya sa Pagmamaneho, UMID,
                                    SSS, PhilSys, at iba pa.
                                </span>
                            ) : (
                                <span>
                                    Mga tinatanggap na Government ID: Lisensya sa Pagmamaneho, UMID,
                                    SSS, PhilSys, at iba pa.
                                </span>
                            )}
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
                                I-upload 2x2 na Litrato
                            </label>
                            <span>
                                Ang 2x2 ID na litrato ay dapat may puting background at walang mga
                                aksesorya (salamin, mask, sombrero, atbp.).
                            </span>
                        </div>
                    </div>
                    <div className={styles['nav-buttons-container']}>
                        <button className={styles['nav-btn']} onClick={onBack}>
                            Bumalik
                        </button>
                        <button className={styles['nav-btn']} onClick={handleReview}>
                            Review
                        </button>
                    </div>
                    {(adminCheck === false || adminCheck === null) && (
                        <>
                            {missingUplaod === true && (
                                <div className={styles['error-modal-background']}>
                                    <div
                                        className={styles['error-modal-container']}
                                        style={{
                                            color: 'red',
                                            fontSize: '18px',
                                            fontWeight: '450',
                                        }}
                                    >
                                        <br />
                                        {(sketchImg === null || sketchImg === '') && (
                                            <span>
                                                *Maaaring mag lagay ng Signature at piliin ang
                                                "I-save ang Signature" <br />
                                            </span>
                                        )}
                                        {residencyType === 'Tenant' &&
                                            (displayLetterFileName === null ||
                                                displayLetterFileName === '') && (
                                                <span>
                                                    *Mag-upload ng letter mula sa landlord <br />
                                                </span>
                                            )}
                                        {displayValidID === null && (
                                            <span>
                                                *Mag-upload ng Valid ID <br />
                                            </span>
                                        )}
                                        {displaySelfImage === null && (
                                            <span>
                                                *Mag-upload ng 2x2 na litrato <br />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {showReviewModal === true && (
                        <>
                            <div
                                className={styles['modal-background']}
                                onClick={handleReview}
                            ></div>
                            <ReviewModal
                                imgID={validIDImg}
                                imgSelf={selfPicImg}
                                signatureImg={sketchImg}
                                letterDoc={letterFile}
                            />
                        </>
                    )}{' '}
                </>
            )}
        </div>
    );
};
