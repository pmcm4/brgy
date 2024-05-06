import React, { useState } from 'react';
import { createContext, useContext } from 'react';

export type CertBooleans = {
    pfStatus: true;
    addStatus: false;
    certStatus: false;
};

type CertBooleansType = {
    certBool: CertBooleans | null;
    setCertBool: React.Dispatch<React.SetStateAction<CertBooleans | null>>;
};

type NavigationCertificateContextProps = {
    children: React.ReactNode;
};

export const NavigationCertificateContext = createContext<CertBooleansType | null>(null);

export const NavigationCertificateContextProvider = ({
    children,
}: NavigationCertificateContextProps) => {
    const [certBool, setCertBool] = useState<CertBooleans | null>(null);

    return (
        <NavigationCertificateContext.Provider value={{ certBool, setCertBool }}>
            {children}
        </NavigationCertificateContext.Provider>
    );
};
