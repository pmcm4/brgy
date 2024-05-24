import { useContext } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';

export function BarangayClearanceForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Barangay Clearance</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
        </>
    );
}

export function IndigencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Indigency</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
        </>
    );
}

export function BarangayIDForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Barangay ID</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
        </>
    );
}

export function SoloParentForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Solo Parent</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child Name: </span>
                <input disabled value={reviewContext?.certificateForm?.childName} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child Gender: </span>
                <input disabled value={reviewContext?.certificateForm?.childGender} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Solo Parent Since: </span>
                <input disabled value={reviewContext?.certificateForm?.soloParentSince} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Presented By: </span>
                <input disabled value={reviewContext?.certificateForm?.presentedBy} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Registry Number: </span>
                <input disabled value={reviewContext?.certificateForm?.registryNumber} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function CohabitationForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Cohabitation</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={reviewContext?.certificateForm?.birthAddress} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Spouse Name: </span>
                <input disabled value={reviewContext?.certificateForm?.spouseName} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Marriage: </span>
                <input disabled value={reviewContext?.certificateForm?.DateOfMarriage} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function GoodMoralForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Good Moral</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function NoIncomeForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>No Income Form</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>No Income Since: </span>
                <input disabled value={reviewContext?.certificateForm?.noIncomeSince} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function FirstTimeJobSeekerForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>First Time Job Seeker</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Residency: </span>
                <input disabled value={reviewContext?.certificateForm?.DateOfResidency} />
            </div>
        </>
    );
}

export function ResidencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Residency</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={reviewContext?.certificateForm?.birthAddress} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Residency: </span>
                <input disabled value={reviewContext?.certificateForm?.DateOfResidency} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function TransferOfResidencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Transfer of Residency</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>New Address: </span>
                <input disabled value={reviewContext?.certificateForm?.newAddress} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function LivingStillForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Living Still</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Tabloid: </span>
                <input disabled value={reviewContext?.certificateForm?.DateOfTabloid} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}

export function BirthFactForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Birth Fact</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={reviewContext?.certificateForm?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date Born: </span>
                <input disabled value={reviewContext?.certificateForm?.DateBorn} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child's Name: </span>
                <input disabled value={reviewContext?.certificateForm?.childName} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child's Gender: </span>
                <input disabled value={reviewContext?.certificateForm?.childGender} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={reviewContext?.certificateForm?.birthAddress} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Witness Name: </span>
                <input disabled value={reviewContext?.certificateForm?.witnessName} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Witness Type: </span>
                <input disabled value={reviewContext?.certificateForm?.witnessType} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={reviewContext?.certificateForm?.nameOfRequestor} />
            </div>
        </>
    );
}
