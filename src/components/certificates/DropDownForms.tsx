import React, { useContext, useState } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';

interface DropDownFormProps {
    onNext: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function BarangayClearanceForm({ onNext, onBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);

    const [barangayClearanceRequestObj, setBarangayClearanceRequestObj] = useState({
        purpose: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBarangayClearanceRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayClearance',
            purpose: barangayClearanceRequestObj.purpose,
            childName: '',
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
            <input
                onChange={handleOnChange}
                className={styles['input-names']}
                placeholder="state your purpose here in English or Tagalog."
                name="purpose"
                required
            />
            <div className={styles['nav-buttons-container']}>
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function BarangayIDForm({ onNext, onBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const [barangayIDRequestObj, setBarangayIDRequestObj] = useState({
        purpose: '',
    });

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayID',
            purpose: barangayIDRequestObj.purpose,
            childName: '',
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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function SoloParentForm({ onNext, onBack }: DropDownFormProps) {
    const reviewContext = useContext(ReviewContext);
    const [soloParentRequestObj, setSoloParentRequestObj] = useState({
        purpose: '',
        childName: '',
        soloParentSince: '',
        presentedBy: '',
        registryNumber: '',
        nameOfRequestor: '',
    });

    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'barangayClearance',
            purpose: soloParentRequestObj.purpose,
            childName: soloParentRequestObj.childName,
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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function CohabitationForm({ onNext, onBack }: DropDownFormProps) {
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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCohabitationRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <form onSubmit={onNext} className={styles['cohabitation']}>
            <label className={styles['label-forms']}>Purpose:</label>
            <br />
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function GoodMoralForm({ onNext, onBack }: DropDownFormProps) {
    const [goodMoralRequestObj, setGoodMoralRequestObj] = useState({
        purpose: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGoodMoralRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        console.log(goodMoralRequestObj);
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: goodMoralRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function NoIncomeForm({ onNext, onBack }: DropDownFormProps) {
    const [noIncomeRequestObj, setNoIncomeRequestObj] = useState({
        purpose: '',
        noIncomeSince: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoIncomeRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: noIncomeRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function FirstTimeJobSeekerForm({ onNext, onBack }: DropDownFormProps) {
    const [firstTimeJobSeekerRequestObj, setFirstTimeJobSeekerRequestObj] = useState({
        purpose: '',
        DateOfResidency: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstTimeJobSeekerRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: firstTimeJobSeekerRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function ResidencyForm({ onNext, onBack }: DropDownFormProps) {
    const [residencyRequestObj, setResidencyRequestObj] = useState({
        purpose: '',
        birthAddress: '',
        DateOfResidency: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: residencyRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function TransferResidencyForm({ onNext, onBack }: DropDownFormProps) {
    const [transferOfResidencyRequestObj, setTransferOfResidencyRequestObj] = useState({
        purpose: '',
        newAddress: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransferOfResidencyRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: transferOfResidencyRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function LivingStillForm({ onNext, onBack }: DropDownFormProps) {
    const [livingStillRequestObj, setLivingStillRequestObj] = useState({
        purpose: '',
        DateOfTabloid: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLivingStillRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: livingStillRequestObj.purpose,
            childName: '',
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}

export function BirthFactForm({ onNext, onBack }: DropDownFormProps) {
    const [birthFactRequestObj, setBirthFactRequestObj] = useState({
        purpose: '',
        DateBorn: '',
        childName: '',
        birthAddress: '',
        witnessName: '',
        witnessType: '',
        nameOfRequestor: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthFactRequestObj((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const handleOnClick = () => {
        reviewContext?.setCertificateForm({
            selectedCert: 'cohabitation',
            purpose: birthFactRequestObj.purpose,
            childName: birthFactRequestObj.childName,
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
            <input
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
                <button className={styles['nav-btn']} onClick={onBack}>
                    Back
                </button>
                <button className={styles['nav-btn']} onClick={handleOnClick} onSubmit={onNext}>
                    Next
                </button>
            </div>
        </form>
    );
}
