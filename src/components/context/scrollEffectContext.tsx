import React, { useRef, useState } from 'react';
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type ScrollEffectContextProvidderProps = {
    children: React.ReactNode;
};

type ReviewContextType = {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const ScrollEffectContext = createContext<ReviewContextType | null>(null);

export const ScrollEffectContextProvidder = ({ children }: ScrollEffectContextProvidderProps) => {
    const aboutRef = useRef<HTMLDivElement | null>(null);

    return (
        <ScrollEffectContext.Provider value={{ aboutRef }}>{children}</ScrollEffectContext.Provider>
    );
};
