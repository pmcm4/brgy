import classNames from 'classnames';
import styles from './certificates.module.scss';
import { Footer } from '../footer/footer';
import React, { ChangeEvent, useState } from 'react';
import { PersonalForm } from '../personal-form/personal-form';
import { PFAddress } from '../pf-address/pf-address';
import {
    BarangayClearanceForm,
    BarangayIDForm,
    BirthFactForm,
    CohabitationForm,
    FirstTimeJobSeekerForm,
    GoodMoralForm,
    LivingStillForm,
    NoIncomeForm,
    ResidencyForm,
    SoloParentForm,
    TransferResidencyForm,
} from './DropDownForms';
import { Identity_Proof } from '../identity-proof/identity-proof';

export interface CertificatesProps {
    className?: string;
}

export const Certificates = ({ className }: CertificatesProps) => {
    const [renderPF, setRenderPF] = useState(true); //initial render state
    const [renderAdd, setRenderAdd] = useState(false);
    const [renderChoose, setRenderChoose] = useState(false);
    const [renderVerify, setRenderVerify] = useState(false);

    //next button
    const handlePersonalFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        setRenderPF(false); //set inital render state to false
        setRenderAdd(true); //set next state to true
    };

    const handleAddressFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        setRenderAdd(false); //set current state to false
        setRenderChoose(true); // set next state to true
    };

    const handleCertFormNext = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        setRenderChoose(false);
        setRenderVerify(true);
    };

    // back button
    const handleBackVerify = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderVerify(false);
        setRenderChoose(true);
    };

    const handleBackCertChoose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderChoose(false);
        setRenderAdd(true);
    };

    const handleBackAddress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRenderAdd(false);
        setRenderPF(true);
    };

    const [renderForm, setRenderForm] = useState({
        barangayClearance: false,
        barangayID: false,
        soloParent: false,
        cohabitation: false,
        goodMoral: false,
        noIncome: false,
        firstTimeJobSeeker: false,
        residency: false,
        transferResidency: false,
        livingStill: false,
        birthFact: false,
    });

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setRenderForm(() => {
            return {
                barangayClearance: false,
                barangayID: false,
                soloParent: false,
                cohabitation: false,
                goodMoral: false,
                noIncome: false,
                firstTimeJobSeeker: false,
                residency: false,
                transferResidency: false,
                livingStill: false,
                birthFact: false,
                [e.target.value]: true,
            };
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-certs']}>
                <span className={styles['heading-text']}>Certificates</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>
            {renderPF === true && <PersonalForm handleSubmit={handlePersonalFormNext} />}

            {renderAdd === true && (
                <PFAddress handleSubmit={handleAddressFormNext} onBack={handleBackAddress} />
            )}

            {renderChoose === true && (
                <div className={styles['certs-container']}>
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </span>
                    <button className={styles['existing-profile']}>Existing Profile</button>
                    <div className={styles['input-form']}>
                        <label className={styles['label-forms']}>Residency:</label>
                        <br />
                        <select
                            defaultValue={'Select Certificate'}
                            className={styles['input-drop-down']}
                            onChange={handleOnChange}
                        >
                            <option disabled>Select Certificate</option>
                            <option value={'barangayClearance'}>Barangay Clearance</option>
                            <option value={'barangayID'}>Barangay ID</option>
                            <option value={'soloParent'}>Solo Parent</option>
                            <option value={'cohabitation'}>Cohabitation</option>
                            <option value={'goodMoral'}>Good Moral</option>
                            <option value={'noIncome'}>No Income</option>
                            <option value={'firstTimeJobSeeker'}>First Time Job Seeker</option>
                            <option value={'residency'}>Residency</option>
                            <option value={'transferResidency'}>Transfer of Residency</option>
                            <option value={'livingStill'}>Living Still</option>
                            <option value={'birthFact'}>Birth Fact</option>
                        </select>

                        {renderForm.barangayClearance === true && (
                            <BarangayClearanceForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.barangayID === true && (
                            <BarangayIDForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.soloParent === true && (
                            <SoloParentForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.cohabitation === true && (
                            <CohabitationForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.goodMoral === true && (
                            <GoodMoralForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.noIncome === true && (
                            <NoIncomeForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.firstTimeJobSeeker === true && (
                            <FirstTimeJobSeekerForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.residency === true && (
                            <ResidencyForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.transferResidency === true && (
                            <TransferResidencyForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.livingStill === true && (
                            <LivingStillForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                        {renderForm.birthFact === true && (
                            <BirthFactForm
                                onNext={handleCertFormNext}
                                onBack={handleBackCertChoose}
                            />
                        )}
                    </div>
                </div>
            )}

            {renderVerify === true && <Identity_Proof onBack={handleBackVerify} />}

            <Footer />
        </div>
    );
};
