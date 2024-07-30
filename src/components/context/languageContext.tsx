import React, { useState } from 'react';
import { createContext } from 'react';

type LanguageContextProviderProps = {
    children: React.ReactNode;
};

type ReviewContextType = {
    selectEnglish: boolean;
    setSelectEnglish: React.Dispatch<React.SetStateAction<boolean>>;
    selectFilipino: boolean;
    setSelectFilipino: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LanguageContext = createContext<ReviewContextType | null>(null);

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
    const [selectEnglish, setSelectEnglish] = useState(true);
    const [selectFilipino, setSelectFilipino] = useState(false);

    return (
        <LanguageContext.Provider
            value={{ selectEnglish, setSelectEnglish, selectFilipino, setSelectFilipino }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
