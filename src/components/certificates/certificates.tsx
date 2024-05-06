import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Footer } from '../footer/footer';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas, type ReactSketchCanvasRef } from 'react-sketch-canvas';
import { PersonalForm } from '../personal-form/personal-form';
import { PFAddress } from '../pf-address/pf-address';
import { ChooseCert } from '../choose-cert/choose-cert';
import { NavigationCertificateContext } from '../context/certificate-nav-context';

export interface CertificatesProps {
    className?: string;
}
const styleSketchCanvas = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '1px',
};

export const Certificates = ({ className }: CertificatesProps) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);

    const [inputs, setInputs] = useState({
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
        residency: '',
        yearsInSanRoque: '',
        blockLot: '',
        street: '',
        certType: '',
    });

    const [barangayClearanceRequestObj, setBarangayClearanceRequestObj] = useState({
        purpose: '',
    });

    const [barangayIDRequestObj, setBarangayIDRequestObj] = useState({
        purpose: '',
    });

    const [soloParentRequestObj, setSoloParentRequestObj] = useState({
        purpose: '',
        childName: '',
        soloParentSince: '',
        presentedBy: '',
        registryNumber: '',
        nameOfRequestor: '',
    });

    const [cohabitationRequestObj, setCohabitationRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        spouseName: '',
        DateOfMarriage: '',
        nameOfRequestor: '',
    });

    const [goodMoralRequestObj, setGoodMoralRequestObj] = useState({
        purpose: '',
        nameOfRequestor: '',
    });

    const [noIncomeRequestObj, setNoIncomeRequestObj] = useState({
        purpose: '',
        noIncomeSince: '',
        nameOfRequestor: '',
    });

    const [firstTimeJobSeekerRequestObj, setFirstTimeJobSeekerRequestObj] = useState({
        purpose: '',
        DateOfResidency: '',
    });

    const [residencyRequestObj, setResidencyRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        DateOfResidency: '',
        nameOfRequestor: '',
    });

    const [transferOfResidencyRequestObj, setTransferOfResidencyRequestObj] = useState({
        purpose: '',
        newAddress: '',
        nameOfRequestor: '',
    });

    const [livingStillRequestObj, setLivingStillRequestObj] = useState({
        purpose: '',
        DateOfTabloid: '',
        nameOfRequestor: '',
    });

    const [birthFactRequestObj, setBirthFactRequestObj] = useState({
        purpose: '',
        DateBorn: '',
        childName: '',
        birthAddress: '',
        witnessName: '',
        witnessType: '',
        nameOfRequestor: '',
    });

    //Forms
    const [personalFormActive, setPersonalFormActive] = useState(true);
    const [pfaddressActive, setPfaddressActive] = useState(false);
    const [certsActive, setCerts] = useState(false);
    const [identityProofActive, setIdentityProofActive] = useState(false);
    const [backActive, setBackActive] = useState(false);
    const [hideNext, setHideNext] = useState(true);

    //Certificates
    const [barangayClearance, unhideBarangayClearance] = useState(false);
    const [barangayID, unhideBarangayID] = useState(false);
    const [soloParent, unhideSoloParent] = useState(false);
    const [cohabitation, unhideCohabitation] = useState(false);
    const [goodMoral, unhideGoodMoral] = useState(false);
    const [noIncome, unhideNoIncome] = useState(false);
    const [firstTimeJobSeeker, unhideFirstTimeJobSeeker] = useState(false);
    const [residency, unhideResidency] = useState(false);
    const [transferOfResidency, unhideTransferOfResidency] = useState(false);
    const [livingStill, unhideLivingStill] = useState(false);
    const [birthFact, unhideBirthFact] = useState(false);

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

    const NavigationContext = useContext(NavigationCertificateContext);

    const [renderPF, setRenderPF] = useState(); //change me
    const [renderAdd, setRenderAdd] = useState();
    const [renderChoose, setrenderChoose] = useState();

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>
            {renderPF === true && <PersonalForm />}

            {renderAdd === true && <PFAddress />}

            {renderChoose === true && <ChooseCert />}

            <div className={identityProofActive ? styles['identity-proof'] : styles.hide}>
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
                    <button className={backActive ? styles['nav-btn'] : styles.hide}>Back</button>
                    <button className={hideNext ? styles['nav-btn'] : styles.hide}>Next</button>
                </div>
            </div>

            <Footer />
        </div>
    );
};
