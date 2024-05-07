import React, { useState } from 'react';
import { createContext, useContext } from 'react';

export type CertBooleans = {
    pfStatus: boolean;
    addStatus: boolean;
    certStatus: boolean;
};

type CertBooleansType = {
    certBool: CertBooleans | null;
    setCertBool: React.Dispatch<React.SetStateAction<CertBooleans | null>>;
};

type NavigationCertificateContextProps = {
    children: React.ReactNode;
};

export const NavigationCertificateContext = createContext({
    pfStatus: true,
    addStatus: false,
    certStatus: false,
});

export const NavigationCertificateContextProvider = ({
    children,
}: NavigationCertificateContextProps) => {
    return (
        <NavigationCertificateContext.Provider
            value={{
                pfStatus: true,
                addStatus: false,
                certStatus: false,
            }}
        >
            {children}
        </NavigationCertificateContext.Provider>
    );
};
