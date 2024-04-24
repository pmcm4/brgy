import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Footer } from '../footer/footer';
import React, { ChangeEvent, useRef, useState } from 'react';
import { ReactSketchCanvas, type ReactSketchCanvasRef } from 'react-sketch-canvas';

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

    const toggleDisplayClass = () => {
        if (personalFormActive === true) {
            setPersonalFormActive(!personalFormActive);
            setPfaddressActive(!pfaddressActive);
            setBackActive(!backActive);
        } else if (pfaddressActive === true) {
            setPfaddressActive(!pfaddressActive);
            setCerts(!certsActive);
        } else if (certsActive === true) {
            setCerts(!certsActive);
            setIdentityProofActive(!identityProofActive);
            setHideNext(!hideNext);
        }
    };

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setInputs((inputs) => {
            return { ...inputs, [e.target.name]: e.target.value };
        });

        if (e.target.value === '1') {
            unhideBarangayClearance(!barangayClearance);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '2') {
            unhideBarangayClearance(false);
            unhideBarangayID(!barangayID);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '3') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(!soloParent);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '4') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(!cohabitation);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '5') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(!goodMoral);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '6') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(!noIncome);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '7') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(!firstTimeJobSeeker);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '8') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(!residency);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '9') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(!transferOfResidency);
            unhideLivingStill(false);
            unhideBirthFact(false);
        } else if (e.target.value === '10') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(!livingStill);
            unhideBirthFact(false);
        } else if (e.target.value === '11') {
            unhideBarangayClearance(false);
            unhideBarangayID(false);
            unhideSoloParent(false);
            unhideCohabitation(false);
            unhideGoodMoral(false);
            unhideNoIncome(false);
            unhideFirstTimeJobSeeker(false);
            unhideResidency(false);
            unhideTransferOfResidency(false);
            unhideLivingStill(false);
            unhideBirthFact(!birthFact);
        }
    };

    const handleOnChangeRequest1 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setBarangayClearanceRequestObj((barangayClearanceRequestObj) => {
            return { ...barangayClearanceRequestObj, [e.target.name]: e.target.value };
        });
        console.log(barangayClearanceRequestObj);
    };

    const handleOnChangeRequest2 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setBarangayIDRequestObj((barangayIDRequestObj) => {
            return { ...barangayIDRequestObj, [e.target.name]: e.target.value };
        });
        console.log(barangayIDRequestObj);
    };

    const handleOnChangeRequest3 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setSoloParentRequestObj((soloParentRequestObj) => {
            return { ...soloParentRequestObj, [e.target.name]: e.target.value };
        });
        console.log(soloParentRequestObj);
    };

    const handleOnChangeRequest4 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setCohabitationRequestObj((cohabitationRequestObj) => {
            return { ...cohabitationRequestObj, [e.target.name]: e.target.value };
        });
        console.log(cohabitationRequestObj);
    };

    const handleOnChangeRequest5 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setGoodMoralRequestObj((goodMoralRequestObj) => {
            return { ...goodMoralRequestObj, [e.target.name]: e.target.value };
        });
        console.log(goodMoralRequestObj);
    };

    const handleOnChangeRequest6 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setNoIncomeRequestObj((noIncomeRequestObj) => {
            return { ...noIncomeRequestObj, [e.target.name]: e.target.value };
        });
        console.log(noIncomeRequestObj);
    };

    const handleOnChangeRequest7 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setFirstTimeJobSeekerRequestObj((firstTimeJobSeekerRequestObj) => {
            return { ...firstTimeJobSeekerRequestObj, [e.target.name]: e.target.value };
        });
        console.log(firstTimeJobSeekerRequestObj);
    };

    const handleOnChangeRequest8 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setResidencyRequestObj((residencyRequestObj) => {
            return { ...residencyRequestObj, [e.target.name]: e.target.value };
        });
        console.log(residencyRequestObj);
    };

    const handleOnChangeRequest9 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setTransferOfResidencyRequestObj((transferOfResidencyRequestObj) => {
            return { ...transferOfResidencyRequestObj, [e.target.name]: e.target.value };
        });
        console.log(transferOfResidencyRequestObj);
    };

    const handleOnChangeRequest10 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setLivingStillRequestObj((livingStillRequestObj) => {
            return { ...livingStillRequestObj, [e.target.name]: e.target.value };
        });
        console.log(livingStillRequestObj);
    };

    const handleOnChangeRequest11 = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setBirthFactRequestObj((birthFactRequestObj) => {
            return { ...birthFactRequestObj, [e.target.name]: e.target.value };
        });
        console.log(birthFactRequestObj);
    };

    const backButton = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        if (pfaddressActive === true) {
            setPfaddressActive(!pfaddressActive);
            setPersonalFormActive(!personalFormActive);
            setBackActive(!backActive);
        } else if (certsActive === true) {
            setCerts(!certsActive);
            setPfaddressActive(!pfaddressActive);
        } else if (identityProofActive === true) {
            setIdentityProofActive(!identityProofActive);
            setHideNext(!hideNext);
            setCerts(!certsActive);
        }
    };

    //const [errors, setErrors] = useState({});

    const handle1stSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };

    const handle2ndSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };

    const handleSubmitCert1 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert2 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert3 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert4 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert5 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert6 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert7 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert8 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert9 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert10 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };
    const handleSubmitCert11 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        toggleDisplayClass();
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>
            {/* 1st FORM */}
            <div className={personalFormActive ? styles['personal-form'] : styles.hide}>
                <h1 className={styles['header-perso']}>Personal Information</h1>
                <span className={styles['perso-subhead']}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>

                <button
                    className={styles['existing-profile']}
                    onClick={() => {
                        console.log('HEllo');
                    }}
                >
                    Existing Profile
                </button>

                <form onSubmit={handle1stSubmit} className={styles['personal-form']}>
                    <div className={styles['input-form']}>
                        <label className={styles['label-forms']}>First Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Juan"
                            name="firstName"
                            onChange={handleOnChange}
                            required
                        />

                        <br />
                        <label className={styles['label-forms']}>Middle Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Santos"
                            name="middleName"
                            onChange={handleOnChange}
                        />
                        <br />
                        <label className={styles['label-forms']}>Last Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Dela Cruz"
                            name="lastName"
                            onChange={handleOnChange}
                            required
                        />

                        <br />
                        <label className={styles['label-forms']}>Name Extension: </label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Jr."
                            name="nameExt"
                            onChange={handleOnChange}
                        />
                        <br />
                        <label className={styles['label-forms']}>Gender:</label>
                        <br />
                        <select
                            className={styles['input-drop-down']}
                            name="gender"
                            onChange={handleOnChange}
                            required
                        >
                            <option disabled selected value={''}>
                                Select Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <br />
                        <label className={styles['label-forms']}>Email Address: </label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="juandelacruz@gmail.com"
                            name="emailAddress"
                            type="email"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Contact Number:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="09XXXXXXXXX"
                            type="number"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Birth Date:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            name="birthDate"
                            type="date"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Religion:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Catholic"
                            name="religion"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Status:</label>
                        <br />
                        <select
                            className={styles['input-drop-down']}
                            name="status"
                            onChange={handleOnChange}
                            required
                        >
                            <option disabled selected value={''}>
                                Select Civil Status
                            </option>
                            <option>Married</option>
                            <option>Single</option>
                        </select>
                        <br />
                        <label className={styles['label-forms']}>Sector:</label>
                        <br />
                        <select
                            className={styles['input-drop-down']}
                            name="sector"
                            onChange={handleOnChange}
                        >
                            <option disabled selected value={''}>
                                Select Sector
                            </option>
                            <option>PWD</option>
                            <option>Senior Citizen</option>
                        </select>
                        <br />
                        <h1 className={styles['perso-subhead']}> Emergency Details</h1>
                        <br />
                        <label className={styles['label-forms']}>Emergency Full Name:</label>

                        <input
                            className={styles['input-names']}
                            placeholder="Juan S. Dela Cruz"
                            name="emergName"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Emergency Relationship:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Mother"
                            name="emergRel"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Emergency Contact Number:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="09XXXXXXXXX"
                            name="emergContact"
                            type="number"
                            onChange={handleOnChange}
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Emergency Address:</label>
                        <br />
                        <textarea
                            className={styles['input-names']}
                            placeholder=""
                            name="emergAddress"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className={styles['nav-buttons-container']}>
                        <button
                            className={hideNext ? styles['nav-btn'] : styles.hide}
                            onSubmit={handle1stSubmit}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
            {/* 2nd FORM */}
            <div className={pfaddressActive ? styles['pfaddress'] : styles.hide}>
                <h1 className={styles['header-perso']}>Address</h1>
                <span className={styles['perso-subhead']}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
                <form className={styles['pfaddress']} onSubmit={handle2ndSubmit}>
                    <div className={styles['input-form']}>
                        <label className={styles['label-forms']}>Residency:</label>
                        <br />
                        <select className={styles['input-drop-down']} required>
                            <option disabled selected value={''}>
                                Select Residency
                            </option>
                            <option>Home Owner</option>
                            <option>Tenant</option>
                        </select>
                        <br />
                        <label className={styles['label-forms']}>Years in San Roque:</label>
                        <br />
                        <input className={styles['input-names']} placeholder="1 year" required />
                        <br />
                        <label className={styles['label-forms']}>Block/Lot</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="blk 1 / lot 1"
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}>Street</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="Shoe Avenue"
                            required
                        />
                        <br />
                        <label className={styles['label-forms']}></label>
                        <label className={styles['label-forms']}>Barangay:</label>
                        <br />
                        <input className={styles['input-names']} disabled value={'San Roque'} />
                        <br />
                        <label className={styles['label-forms']}>City:</label>
                        <br />
                        <input className={styles['input-names']} disabled value={'Marikina City'} />
                        <br />
                        <label className={styles['label-forms']}>Province:</label>
                        <br />
                        <input className={styles['input-names']} disabled value={'Metro Manila'} />
                    </div>
                    <div className={styles['nav-buttons-container']}>
                        <button
                            className={backActive ? styles['nav-btn'] : styles.hide}
                            onClick={backButton}
                        >
                            Back
                        </button>
                        <button
                            className={hideNext ? styles['nav-btn'] : styles.hide}
                            onSubmit={handle2ndSubmit}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            {/* 3rd FORM */}
            <div className={certsActive ? styles['certs'] : styles.hide}>
                <h1 className={styles['header-perso']}>Address</h1>
                <span className={styles['perso-subhead']}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
                <div className={styles['input-form']}>
                    <label className={styles['label-forms']}>Choose your request:</label>
                    <br />
                    <select
                        className={styles['input-drop-down']}
                        name="certType"
                        onChange={handleOnChange}
                        required
                    >
                        <option disabled selected value={1}>
                            Select Certificate
                        </option>
                        <option value={1}>Barangay Clearance</option>
                        <option value={2}>Barangay ID</option>
                        <option value={3}>Solo Parent</option>
                        <option value={4}>Cohabitation</option>
                        <option value={5}>Good Moral</option>
                        <option value={6}>No Income</option>
                        <option value={7}>First Time Job Seeker</option>
                        <option value={8}>Residency</option>
                        <option value={9}>Transfer of Residency</option>
                        <option value={10}>Living Still</option>
                        <option value={11}>Birth Fact</option>
                    </select>

                    <br />

                    <form
                        className={barangayClearance ? styles['barangay-clearance'] : styles.hide}
                        onSubmit={handleSubmitCert1}
                    >
                        <br />
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest1}
                            required
                        />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert1}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={barangayID ? styles['barangay-ID'] : styles.hide}
                        onSubmit={handleSubmitCert2}
                    >
                        <br />
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest2}
                        />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert2}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <br />

                    <form
                        className={soloParent ? styles['solo-parent'] : styles.hide}
                        onSubmit={handleSubmitCert3}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest3}
                        />
                        <label className={styles['label-forms']}>Child Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="child's name"
                            required
                            name="childName"
                            onChange={handleOnChangeRequest3}
                        />
                        <br />

                        <label className={styles['label-forms']}>Solo Parent Since:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            type="date"
                            required
                            name="soloParentSince"
                            onChange={handleOnChangeRequest3}
                        />
                        <br />

                        <label className={styles['label-forms']}>Presented By:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of the presentor"
                            name="presentedBy"
                            required
                            onChange={handleOnChangeRequest3}
                        />
                        <br />

                        <label className={styles['label-forms']}>Registry Number:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            required
                            name="registryNumber"
                            onChange={handleOnChangeRequest3}
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            required
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest3}
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert3}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={cohabitation ? styles['cohabitation'] : styles.hide}
                        onSubmit={handleSubmitCert4}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest4}
                            required
                        />
                        <label className={styles['label-forms']}>Birth Address:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            required
                            name="birthAddress"
                            onChange={handleOnChangeRequest4}
                        />
                        <br />

                        <label className={styles['label-forms']}>Spouse Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="spouseName"
                            onChange={handleOnChangeRequest4}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Date of Marriage:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="DateOfMarriage"
                            onChange={handleOnChangeRequest4}
                            required
                            type="date"
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest4}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert4}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={goodMoral ? styles['good-moral'] : styles.hide}
                        onSubmit={handleSubmitCert5}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest5}
                            required
                        />
                        <label className={styles['label-forms']}>Request of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest5}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert5}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={noIncome ? styles['no-income'] : styles.hide}
                        onSubmit={handleSubmitCert6}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest6}
                            required
                        />
                        <label className={styles['label-forms']}>No Income Since:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            type="date"
                            required
                            name="noIncomeSince"
                            onChange={handleOnChangeRequest6}
                        />
                        <br />

                        <label className={styles['label-forms']}>Request of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            required
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest6}
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert6}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={
                            firstTimeJobSeeker ? styles['first-time-job-seeker'] : styles.hide
                        }
                        onSubmit={handleSubmitCert7}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest7}
                            required
                        />
                        <label className={styles['label-forms']}>Date of Residency:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            type="date"
                            name="DateOfResidency"
                            onChange={handleOnChangeRequest7}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert7}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={residency ? styles['residency'] : styles.hide}
                        onSubmit={handleSubmitCert8}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest8}
                            required
                        />
                        <label className={styles['label-forms']}>Birth Address:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="birthAddress"
                            onChange={handleOnChangeRequest8}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Date of Residency:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="DateOfResidency"
                            onChange={handleOnChangeRequest8}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest8}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert8}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={
                            transferOfResidency ? styles['transfer-of-residency'] : styles.hide
                        }
                        onSubmit={handleSubmitCert9}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest9}
                            required
                        />
                        <label className={styles['label-forms']}>New Address:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="newAddress"
                            onChange={handleOnChangeRequest9}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest9}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert8}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={livingStill ? styles['living-still'] : styles.hide}
                        onSubmit={handleSubmitCert10}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest10}
                            required
                        />
                        <label className={styles['label-forms']}>Date of Tabloid:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            type="date"
                            name="DateOfTabloid"
                            onChange={handleOnChangeRequest10}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest10}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert10}
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <form
                        className={birthFact ? styles['birth-fact'] : styles.hide}
                        onSubmit={handleSubmitCert11}
                    >
                        <label className={styles['label-forms']}>Purpose:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="state your purpose here in English or Tagalog."
                            name="purpose"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <label className={styles['label-forms']}>Date Born:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            type="date"
                            name="DateBorn"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Child's Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="childName"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}> Birth Address:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="birthAddress"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Witness Name:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="witnessName"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Witness Type:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder=""
                            name="witnessType"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />

                        <label className={styles['label-forms']}>Request Of:</label>
                        <br />
                        <input
                            className={styles['input-names']}
                            placeholder="name of requestor"
                            name="nameOfRequestor"
                            onChange={handleOnChangeRequest11}
                            required
                        />
                        <br />
                        <div className={styles['nav-buttons-container']}>
                            <button
                                className={backActive ? styles['nav-btn'] : styles.hide}
                                onClick={backButton}
                            >
                                Back
                            </button>
                            <button
                                className={hideNext ? styles['nav-btn'] : styles.hide}
                                onSubmit={handleSubmitCert11}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>

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
                    <button
                        className={backActive ? styles['nav-btn'] : styles.hide}
                        onClick={backButton}
                    >
                        Back
                    </button>
                    <button
                        className={hideNext ? styles['nav-btn'] : styles.hide}
                        onSubmit={handleSubmitCert3}
                    >
                        Next
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};
