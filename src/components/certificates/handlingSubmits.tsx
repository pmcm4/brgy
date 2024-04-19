import { useState } from 'react';

//Forms
const [personalFormActive, setPersonalFormActive] = useState(true);
const [pfaddressActive, setPfaddressActive] = useState(false);
const [certsActive, setCerts] = useState(false);
const [identityProofActive, setIdentityProofActive] = useState(false);
const [backActive, setBackActive] = useState(false);
const [hideNext, setHideNext] = useState(true);

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

export const handle1stSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};

export const handle2ndSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};

export const handleSubmitCert1 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert2 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert3 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert4 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert5 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert6 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert7 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert8 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert9 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert10 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert11 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert12 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
export const handleSubmitCert13 = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    toggleDisplayClass();
};
