import { useContext } from 'react';
import styles from './certificates.module.scss';
import { ReviewContext } from '../context/ReviewContext';
import TextField from '@mui/material/TextField';

export function BarangayClearanceForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Barangay Clearance</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
        </>
    );
}

export function IndigencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Indigency</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
        </>
    );
}

export function BarangayIDForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Barangay ID</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
        </>
    );
}

export function SoloParentForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Solo Parent</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="Child's Name"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.childName}
            />
            <TextField
                id="outlined-basic"
                label="Child's Gender"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.childGender}
            />
            <TextField
                id="outlined-basic"
                label="Solo Parent Since"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.soloParentSince}
            />
            <TextField
                id="outlined-basic"
                label="Presented By"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.presentedBy}
            />
            <TextField
                id="outlined-basic"
                label="Registry Number"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.registryNumber}
            />
            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function CohabitationForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Cohabitation</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="Birth Address"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.birthAddress}
            />
            <TextField
                id="outlined-basic"
                label="Spouse Name"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.spouseName}
            />
            <TextField
                id="outlined-basic"
                label="Date of Marriage"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.DateOfMarriage}
            />
            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function GoodMoralForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Good Moral</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />

            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function NoIncomeForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>No Income Form</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="No Income Since"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.noIncomeSince}
            />
            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function FirstTimeJobSeekerForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>First Time Job Seeker</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="Date of Residency"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.DateOfResidency}
            />
        </>
    );
}

export function ResidencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Residency</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />

            <TextField
                id="outlined-basic"
                label="Birth Address"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.birthAddress}
            />
            <TextField
                id="outlined-basic"
                label="Date of Residency"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.DateOfResidency}
            />
            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function TransferOfResidencyForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Transfer of Residency</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="New Address"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.newAddress}
            />

            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function LivingStillForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Living Still</span>
            </div>
            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />
            <TextField
                id="outlined-basic"
                label="Date of Tabloid"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.DateOfTabloid}
            />
            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}

export function BirthFactForm() {
    const reviewContext = useContext(ReviewContext);
    return (
        <>
            <div className={styles['row-review-input-data-type']}>
                <span>Type of Request: </span>
                <span>Birth Fact</span>
            </div>

            <TextField
                multiline
                label="Purpose"
                disabled
                value={reviewContext?.certificateForm?.purpose}
            />

            <TextField
                id="outlined-basic"
                label="Date Born"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.DateBorn}
            />

            <TextField
                id="outlined-basic"
                label="Child's Name"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.childName}
            />

            <TextField
                id="outlined-basic"
                label="first_name"
                variant="Child's Gender"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.childGender}
            />

            <TextField
                id="outlined-basic"
                label="Birth Address"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.birthAddress}
            />

            <TextField
                id="outlined-basic"
                label="Witness Name"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.witnessName}
            />

            <TextField
                id="outlined-basic"
                label="Witness Type"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.witnessType}
            />

            <TextField
                id="outlined-basic"
                label="Name of Requestor"
                variant="outlined"
                className={styles['text-field-mui-override']}
                disabled
                value={reviewContext?.certificateForm?.nameOfRequestor}
            />
        </>
    );
}
