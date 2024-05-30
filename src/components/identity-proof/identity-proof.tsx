import classNames from 'classnames';
import styles from './identity-proof.module.scss';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { useRef, useState } from 'react';
import ReviewModal from '../certificates/ReviewModal';
import { createURI } from '@google-cloud/storage/build/cjs/src/resumable-upload';

export interface Identity_ProofProps {
    className?: string;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isBarangayID: boolean;
}

const styleSketchCanvas = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '1px',
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Identity_Proof = ({ className, onBack, isBarangayID }: Identity_ProofProps) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    //sketch image
    const [sketchImg, setSketchImg] = useState<string | null>(null);
    const [isCanvasEmtpy, setIsCanvasEmpty] = useState(true);
    const [validIDImg, setValidIDImg] = useState({ name: '', file: {} });
    const [selfPicImg, setSelfPicImg] = useState({ name: '', file: {} });

    const [displayValidID, setDisplayValidID] = useState<Blob | MediaSource | null>(null);
    const [displaySelfImage, setDisplaySelfImage] = useState<Blob | MediaSource | null>(null);

    const [missingUplaod, setMissingUpload] = useState(false);

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
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleReview = () => {
        if (
            displayValidID === null ||
            displaySelfImage === null ||
            (isBarangayID === true && (sketchImg === null || sketchImg === ''))
        ) {
            setMissingUpload(true);
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

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['header-perso']}>Proof of Identity</h1>
            <span className={styles['perso-subhead']}>
                Please provide the Following:
                <br /> Signature (use the sketch canvas below), Government ID, and latest 2x2
                picture with white background
            </span>
            {isBarangayID && (
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
                                <button className={styles['nav-btn']} onClick={handleClearClick}>
                                    Clear
                                </button>
                                {isCanvasEmtpy === true ? (
                                    <button disabled>Save Signature</button>
                                ) : (
                                    <button className={styles['nav-btn']} onClick={exportSketch}>
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
                                    <img src={sketchImg!} className={styles['sketchImgPreview']} />
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
            )}
            <hr style={{ width: '90%' }} />
            <div className={styles['upload-div']}>
                <div className={styles['first-id']}>
                    <label className={styles['file-btn']}>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleIDupload}
                        />
                        Upload Valid ID
                    </label>
                    <span>
                        Valid ID should be addressed in Barangay San Roque only. Accepted Government
                        ID's: Driver's License, UMID, SSS, PhilSys etc.
                    </span>
                    {displayValidID !== null ? (
                        <img
                            src={URL.createObjectURL(displayValidID)}
                            className={styles['img-container']}
                        />
                    ) : (
                        <img
                            src="https://storage.googleapis.com/brgysrbucket/govt-id-guide.jpg"
                            className={styles['img-container']}
                        />
                    )}
                </div>

                <div className={styles['second-id']}>
                    <label className={styles['file-btn']}>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handlePicUpload}
                        />
                        Upload 2x2 Picture
                    </label>
                    <span>
                        2x2 ID Picture should have white background and no accessories (glasses,
                        mask, hat etc.)
                    </span>
                    {displaySelfImage !== null ? (
                        <img
                            src={URL.createObjectURL(displaySelfImage)}
                            className={styles['img-container']}
                        />
                    ) : (
                        <img
                            src="https://storage.googleapis.com/brgysrbucket/self-image.jpg"
                            className={styles['img-container']}
                        />
                    )}
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
            {missingUplaod === true && (
                <div className={styles['error-modal-background']}>
                    <div
                        className={styles['error-modal-container']}
                        style={{ color: 'red', fontSize: '18px', fontWeight: '450' }}
                    >
                        <br />
                        {isBarangayID === true && (sketchImg === null || sketchImg === '') && (
                            <span>
                                *Please provide a signature then select "Save Signature" <br />
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

            {showReviewModal === true && (
                <>
                    <div className={styles['modal-background']} onClick={handleReview}></div>
                    <ReviewModal imgID={validIDImg} imgSelf={selfPicImg} signatureImg={sketchImg} />
                </>
            )}
        </div>
    );
};
