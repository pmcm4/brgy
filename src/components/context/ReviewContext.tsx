import React, { useState } from 'react';
import { createContext, useContext } from 'react';

export type PersonalReviewTypes = {
    firstName: string;
    middleName: string;
    lastName: string;
    nameExt: string;
    gender: string;
    emailAddress: string;
    contactNum: string;
    birthDate: string;
    religion: string;
    status: string;
    sector: string;
    emergName: string;
    emergRel: string;
    emerContact: string;
    emerAddress: string;
};

export type AddressReviewTypes = {
    residency: string;
    yearsInSanRoque: string;
    block: string;
    street: string;
    barangay: string;
    city: string;
    province: string;
};

export type CertificateReviewTypes = {
    selectedCert: string;
    purpose: string;
    childName: string;
    soloParentSince: string;
    presentedBy: string;
    registryNumber: string;
    nameOfRequestor: string;
    birthAddress: string;
    spouseName: string;
    DateOfMarriage: string;
    noIncomeSince: string;
    DateOfResidency: string;
    newAddress: string;
    DateOfTabloid: string;
    DateBorn: string;
    witnessName: string;
    witnessType: string;
};

type ReviewContextProviderProps = {
    children: React.ReactNode;
};

type ReviewContextType = {
    personalForm: PersonalReviewTypes | null;
    setPersonalFormReview: React.Dispatch<React.SetStateAction<PersonalReviewTypes | null>>;

    addressForm: AddressReviewTypes | null;
    setAddressForm: React.Dispatch<React.SetStateAction<AddressReviewTypes | null>>;

    certificateForm: CertificateReviewTypes | null;
    setCertificateForm: React.Dispatch<React.SetStateAction<CertificateReviewTypes | null>>;

    selfRequest: boolean;
    setSelfRequest: React.Dispatch<React.SetStateAction<boolean>>;

    forSomeoneElseRequest: boolean;
    setForSomeoneElseRequest: React.Dispatch<React.SetStateAction<boolean>>;

    unregisteredAccountRequest: boolean;
    setUregisteredAccountRequest: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReviewContext = createContext<ReviewContextType | null>(null);

export const ReviewContextProvider = ({ children }: ReviewContextProviderProps) => {
    const [personalForm, setPersonalFormReview] = useState<PersonalReviewTypes | null>(null);
    const [addressForm, setAddressForm] = useState<AddressReviewTypes | null>(null);
    const [certificateForm, setCertificateForm] = useState<CertificateReviewTypes | null>(null);

    const [selfRequest, setSelfRequest] = useState(false);
    const [forSomeoneElseRequest, setForSomeoneElseRequest] = useState(false);
    const [unregisteredAccountRequest, setUregisteredAccountRequest] = useState(false);

    return (
        <ReviewContext.Provider
            value={{
                personalForm,
                setPersonalFormReview,
                addressForm,
                setAddressForm,
                certificateForm,
                setCertificateForm,
                selfRequest,
                setSelfRequest,
                forSomeoneElseRequest,
                setForSomeoneElseRequest,
                unregisteredAccountRequest,
                setUregisteredAccountRequest,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
