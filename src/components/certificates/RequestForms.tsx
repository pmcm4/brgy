import styles from './certificates.module.scss';

interface BarangayClearanceFormProps {
    BarangayClearanceRows?: {
        purpose: string;
    };
}

export function BarangayClearanceForm({ BarangayClearanceRows }: BarangayClearanceFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Barangay Clearance</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={BarangayClearanceRows?.purpose} />
            </div>
        </>
    );
}

interface BarangayIDFormFormProps {
    BarangayIDRows?: {
        purpose: string;
    };
}

export function BarangayIDForm({ BarangayIDRows }: BarangayIDFormFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Barangay ID</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={BarangayIDRows?.purpose} />
            </div>
        </>
    );
}

interface SoloParentFormProps {
    SoloParentRows?: {
        purpose: string;
        child_name: string;
        solo_parent_since: string;
        presented_by: string;
        registry_number: string;
        request_of: string;
    };
}

export function SoloParentForm({ SoloParentRows }: SoloParentFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Solo Parent</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={SoloParentRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child Name: </span>
                <input disabled value={SoloParentRows?.child_name} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Solo Parent Since: </span>
                <input disabled value={SoloParentRows?.solo_parent_since} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Presented By: </span>
                <input disabled value={SoloParentRows?.presented_by} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Registry Number: </span>
                <input disabled value={SoloParentRows?.registry_number} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={SoloParentRows?.request_of} />
            </div>
        </>
    );
}

interface CohabitationFormProps {
    CohabitationRows?: {
        purpose: string;
        birth_address: string;
        spouse_name: string;
        date_of_marriage: string;
        request_of: string;
    };
}

export function CohabitationForm({ CohabitationRows }: CohabitationFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Cohabitation</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={CohabitationRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={CohabitationRows?.birth_address} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Spouse Name: </span>
                <input disabled value={CohabitationRows?.spouse_name} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Marriage: </span>
                <input disabled value={CohabitationRows?.date_of_marriage} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={CohabitationRows?.request_of} />
            </div>
        </>
    );
}

interface GoodMoralFormProps {
    GoodMoralRows?: {
        purpose: string;
        request_of: string;
    };
}

export function GoodMoralForm({ GoodMoralRows }: GoodMoralFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Good Moral</p>
            </div>

            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={GoodMoralRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={GoodMoralRows?.request_of} />
            </div>
        </>
    );
}

interface NoIncomeFormProps {
    NoIncomeRows?: {
        purpose: string;
        no_income_since: string;
        request_of: string;
    };
}

export function NoIncomeForm({ NoIncomeRows }: NoIncomeFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>No Income Form</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={NoIncomeRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>No Income Since: </span>
                <input disabled value={NoIncomeRows?.no_income_since} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={NoIncomeRows?.request_of} />
            </div>
        </>
    );
}

interface FirstTimeJobSeekerFormProps {
    FirstTimeJobSeekerRows?: {
        purpose: string;
        date_of_residency: string;
    };
}

export function FirstTimeJobSeekerForm({ FirstTimeJobSeekerRows }: FirstTimeJobSeekerFormProps) {
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>First Time Job Seeker</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={FirstTimeJobSeekerRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Residency: </span>
                <input disabled value={FirstTimeJobSeekerRows?.date_of_residency} />
            </div>
        </>
    );
}

interface ResidencyFormProps {
    ResidencyRows?: {
        purpose: string;
        birth_address: string;
        date_of_residency: string;
        request_of: string;
    };
}

export function ResidencyForm({ ResidencyRows }: ResidencyFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Residency</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={ResidencyRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={ResidencyRows?.birth_address} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date of Residency: </span>
                <input disabled value={ResidencyRows?.date_of_residency} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={ResidencyRows?.request_of} />
            </div>
        </>
    );
}

interface TransferOfResidencyFormProps {
    TransferOfResidencyRows?: {
        purpose: string;
        new_address: string;
        request_of: string;
    };
}

export function TransferOfResidencyForm({ TransferOfResidencyRows }: TransferOfResidencyFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Transfer of Residency</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={TransferOfResidencyRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>New Address: </span>
                <input disabled value={TransferOfResidencyRows?.new_address} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={TransferOfResidencyRows?.request_of} />
            </div>
        </>
    );
}

interface LivingStillFormProps {
    LivingStillRows?: {
        purpose: string;
        new_address: string;
        request_of: string;
    };
}

export function LivingStillForm({ LivingStillRows }: LivingStillFormProps) {
    return (
        <>
            {' '}
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Living Still</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={LivingStillRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>New Address: </span>
                <input disabled value={LivingStillRows?.new_address} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={LivingStillRows?.request_of} />
            </div>
        </>
    );
}

interface BirthFactFormProps {
    BirthFactRows?: {
        purpose: string;
        date_born: string;
        child_name: string;
        birth_address: string;
        witness_name: string;
        witness_type: string;
        request_of: string;
    };
}

export function BirthFactForm({ BirthFactRows }: BirthFactFormProps) {
    return (
        <>
            <div className={styles['row-review-input-data']}>
                <span>Type of Request: </span>
                <p>Birth Fact</p>
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Purpose: </span>
                <textarea disabled value={BirthFactRows?.purpose} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Date Born: </span>
                <input disabled value={BirthFactRows?.date_born} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Child's Name: </span>
                <input disabled value={BirthFactRows?.child_name} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Birth Address: </span>
                <input disabled value={BirthFactRows?.birth_address} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Witness Name: </span>
                <input disabled value={BirthFactRows?.witness_name} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Witness Type: </span>
                <input disabled value={BirthFactRows?.witness_type} />
            </div>
            <div className={styles['row-review-input-data']}>
                <span>Request Of: </span>
                <input disabled value={BirthFactRows?.request_of} />
            </div>
        </>
    );
}
