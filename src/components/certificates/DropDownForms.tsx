import React, { useContext, useState } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';

interface DropDownFormProps {
    onNext: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disableBack: boolean;
}

export function BarangayClearanceForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);

    const [barangayClearanceRequestObj, setBarangayClearanceRequestObj] = useState({
        purpose: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setBarangayClearanceRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayClearance',
            purpose: barangayClearanceRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['barangay-clearance']}>
            <br />
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}

                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function Indigency({ onNext, onBack, disableBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);

    const [indigencyRequestObj, setIndigencyRequestObj] = useState({
        purpose: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setIndigencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'indigency',
            purpose: indigencyRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['indigency']}>
            <br />
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}

                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function BarangayIDForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const [barangayIDRequestObj, setBarangayIDRequestObj] = useState({
        purpose: '',
    });

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayID',
            purpose: barangayIDRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setBarangayIDRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <form onSubmit={onNext} className={styles['barangay-ID']}>
            <br />
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
            />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function SoloParentForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const [soloParentRequestObj, setSoloParentRequestObj] = useState({
        purpose: '',
        childName: '',
        childGender: '',
        soloParentSince: '',
        presentedBy: '',
        registryNumber: '',
        nameOfRequestor: '',
    });

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'soloParent',
            purpose: soloParentRequestObj.purpose,
            childName: soloParentRequestObj.childName,
            childGender: soloParentRequestObj.childGender,
            soloParentSince: soloParentRequestObj.soloParentSince,
            presentedBy: soloParentRequestObj.presentedBy,
            registryNumber: soloParentRequestObj.registryNumber,
            nameOfRequestor: soloParentRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSoloParentRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <form onSubmit={onNext} className={styles['solo-parent']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
            />
            <label className={styles['label-forms']}>Child Name:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="child's name"
                required
                name="childName"
            />
            <br />

            <label className={styles['label-forms']}>Child Gender:</label>
            <br />
            <select
                className={styles['input-drop-down']}
                name="childGender"
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

            <label className={styles['label-forms']}>Solo Parent Since:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                type="date"
                required
                name="soloParentSince"
            />
            <br />

            <label className={styles['label-forms']}>Presented By:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of the presentor"
                name="presentedBy"
                required
            />
            <br />

            <label className={styles['label-forms']}>Registry Number:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                required
                name="registryNumber"
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                required
                name="nameOfRequestor"
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function CohabitationForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const [cohabitationRequestObj, setCohabitationRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        spouseName: '',
        DateOfMarriage: '',
        nameOfRequestor: '',
    });

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: cohabitationRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: cohabitationRequestObj.nameOfRequestor,
            birthAddress: cohabitationRequestObj.birthAddress,
            spouseName: cohabitationRequestObj.spouseName,
            DateOfMarriage: cohabitationRequestObj.DateOfMarriage,
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCohabitationRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <form onSubmit={onNext} className={styles['cohabitation']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Birth Address:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                required
                name="birthAddress"
            />
            <br />

            <label className={styles['label-forms']}>Spouse Name:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="spouseName"
                required
            />
            <br />

            <label className={styles['label-forms']}>Date of Marriage:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="DateOfMarriage"
                required
                type="date"
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function GoodMoralForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [goodMoralRequestObj, setGoodMoralRequestObj] = useState({
        purpose: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setGoodMoralRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        console.log(goodMoralRequestObj);
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'goodMoral',
            purpose: goodMoralRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: goodMoralRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['good-moral']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Request of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function NoIncomeForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [noIncomeRequestObj, setNoIncomeRequestObj] = useState({
        purpose: '',
        noIncomeSince: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNoIncomeRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'noIncome',
            purpose: noIncomeRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: noIncomeRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: noIncomeRequestObj.noIncomeSince,
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['no-income']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>No Income Since:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                type="date"
                required
                name="noIncomeSince"
            />
            <br />

            <label className={styles['label-forms']}>Request of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                required
                name="nameOfRequestor"
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function FirstTimeJobSeekerForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [firstTimeJobSeekerRequestObj, setFirstTimeJobSeekerRequestObj] = useState({
        purpose: '',
        DateOfResidency: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFirstTimeJobSeekerRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'firstTimeJobSeeker',
            purpose: firstTimeJobSeekerRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: '',
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: firstTimeJobSeekerRequestObj.DateOfResidency,
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['first-time-job-seeker']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Date of Residency:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                type="date"
                name="DateOfResidency"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function ResidencyForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [residencyRequestObj, setResidencyRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        DateOfResidency: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'residency',
            purpose: residencyRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: residencyRequestObj.nameOfRequestor,
            birthAddress: residencyRequestObj.birthAddress,
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: residencyRequestObj.DateOfResidency,
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['residency']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Birth Address:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="birthAddress"
                required
            />
            <br />

            <label className={styles['label-forms']}>Date of Residency:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="DateOfResidency"
                required
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function TransferResidencyForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [transferOfResidencyRequestObj, setTransferOfResidencyRequestObj] = useState({
        purpose: '',
        newAddress: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setTransferOfResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'transferOfResidency',
            purpose: transferOfResidencyRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: transferOfResidencyRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: transferOfResidencyRequestObj.newAddress,
            DateOfTabloid: '',
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['transfer-of-residency']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>New Address:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="newAddress"
                required
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function LivingStillForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [livingStillRequestObj, setLivingStillRequestObj] = useState({
        purpose: '',
        DateOfTabloid: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setLivingStillRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'livingStill',
            purpose: livingStillRequestObj.purpose,
            childName: '',
            childGender: '',
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: livingStillRequestObj.nameOfRequestor,
            birthAddress: '',
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: livingStillRequestObj.DateOfTabloid,
            DateBorn: '',
            witnessName: '',
            witnessType: '',
        });
    };

    return (
        <form onSubmit={onNext} className={styles['living-still']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Date of Tabloid:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                type="date"
                name="DateOfTabloid"
                required
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function BirthFactForm({ onNext, onBack, disableBack }: DropDownFormProps) {
    const [birthFactRequestObj, setBirthFactRequestObj] = useState({
        purpose: '',
        DateBorn: '',
        childName: '',
        childGender: '',
        birthAddress: '',
        witnessName: '',
        witnessType: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setBirthFactRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'birthFact',
            purpose: birthFactRequestObj.purpose,
            childName: birthFactRequestObj.childName,
            childGender: birthFactRequestObj.childGender,
            soloParentSince: '',
            presentedBy: '',
            registryNumber: '',
            nameOfRequestor: birthFactRequestObj.nameOfRequestor,
            birthAddress: birthFactRequestObj.birthAddress,
            spouseName: '',
            DateOfMarriage: '',
            noIncomeSince: '',
            DateOfResidency: '',
            newAddress: '',
            DateOfTabloid: '',
            DateBorn: birthFactRequestObj.DateBorn,
            witnessName: birthFactRequestObj.witnessName,
            witnessType: birthFactRequestObj.witnessType,
        });
    };
    return (
        <form onSubmit={onNext} className={styles['birth-fact']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <textarea
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <label className={styles['label-forms']}>Date Born:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                type="date"
                name="DateBorn"
                required
            />
            <br />

            <label className={styles['label-forms']}>Child's Name:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="childName"
                required
            />
            <br />

            <label className={styles['label-forms']}>Child Gender:</label>
            <br />
            <select
                className={styles['input-drop-down']}
                name="childGender"
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

            <label className={styles['label-forms']}> Birth Address:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="birthAddress"
                required
            />
            <br />

            <label className={styles['label-forms']}>Witness Name:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="witnessName"
                required
            />
            <br />

            <label className={styles['label-forms']}>Witness Type:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder=""
                name="witnessType"
                required
            />
            <br />

            <label className={styles['label-forms']}>Request Of:</label>
            <br />
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="name of requestor"
                name="nameOfRequestor"
                required
            />
            <br />
            <div className={styles['nav-buttons-container']}>
                {disableBack === false && (
                    <button className={styles['nav-btn']} onClick={onBack}>
                        Back
                    </button>
                )}
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}
