import classNames from 'classnames';
import styles from './identity-proof.module.scss';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { MouseEventHandler, useRef, useState } from 'react';
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

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['header-perso']}>Address</h1>
            <span className={styles['perso-subhead']}>
                * Please Provide Two(2) Valid ID&apos;s and Two(2) Photo of you holding the
                ID&apos;s.
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
                    <span>Max file size: 5mb, accepted: jpg|gif|png</span>
                    <button className={styles['nav-btn']}>Upload 1st Valid ID</button>{' '}
                </div>

                <div className={styles['second-id']}>
                    <span>Max file size: 5mb, accepted: jpg|gif|png</span>
                    <button className={styles['nav-btn']}>Upload 2nd Valid ID</button>{' '}
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
                    <ReviewModal />
                </>
            )}
        </div>
    );
};
