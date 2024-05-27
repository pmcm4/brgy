import classNames from 'classnames';
import styles from './identity-proof.module.scss';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import ReviewModal from '../certificates/ReviewModal';

export interface Identity_ProofProps {
    className?: string;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const styleSketchCanvas = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '1px',
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Identity_Proof = ({ className, onBack }: Identity_ProofProps) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    //sketch image
    const [sketchImg, setSketchImg] = useState('');
    const [imgFile, setImgFile] = useState({ name: '', file: {} });

    const handleClearClick = () => {
        setSketchImg('');
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
        setShowReviewModal(!showReviewModal);
    };

    const handleIDupload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //inital set up for uploading images
        setImgFile({
            name: e.target.files![0].name,
            file: e.target.files![0],
        });
        console.log(imgFile);
    };

    const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {};

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['header-perso']}>Proof of Identity</h1>
            <span className={styles['perso-subhead']}>
                Please provide the Following:
                <br /> Signature (use the sketch canvas below), Government ID, and latest 2x2
                picture with white background
            </span>
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
                        />
                        <div className={styles['sketchBtn']}>
                            <button className={styles['nav-btn']} onClick={handleClearClick}>
                                Clear
                            </button>
                            <button className={styles['nav-btn']} onClick={exportSketch}>
                                Check Signature
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles['right-sign']}>
                    <div className={styles['signatures-buttons']}>
                        <div className={styles['checkSignature']}>
                            {sketchImg !== '' && (
                                <img src={sketchImg} className={styles['sketchImgPreview']} />
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
            <div className={styles['upload-div']}>
                <div className={styles['first-id']}>
                    <label className={styles['file-btn']}>
                        <input type="file" onChange={handleIDupload} />
                        Upload Valid ID
                    </label>
                    Valid ID should be any Government ID
                </div>

                <div className={styles['second-id']}>
                    <label className={styles['file-btn']}>
                        <input type="file" onChange={handlePicUpload} />
                        Upload 2x2 Picture
                    </label>
                    2x2 ID Picture should have white background and no accessories (glasses, mask,
                    hat etc.)
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
            {showReviewModal === true && (
                <>
                    <div className={styles['modal-background']} onClick={handleReview}></div>
                    <ReviewModal imageObj={imgFile} />
                </>
            )}
        </div>
    );
};
