import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { defaultApi } from '../../api';

type AuthContextProps = {
    children: React.ReactNode;
};

type AuthContextProviderType = {
    login: (loginInput: object) => Promise<void>;
    logout: (token: object) => Promise<void>;
    currentUser: object | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AuthContext = createContext<AuthContextProviderType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
    const currentUserString = JSON.parse(String(localStorage.getItem('currentUser')));
    const [currentUser, setCurrentUser] = useState(currentUserString || null);

    const login = async (loginInput: object) => {
        const res = await axios.post(`${defaultApi}/api/auth/loginUser`, loginInput);
        setCurrentUser(res.data);
    };

    const logout = async (token: object) => {
        const parse = JSON.parse(currentUser!);
        await axios.post(`${defaultApi}/api/auth/logout`, token, {
            headers: { authorization: 'Bearer ' + parse.accessToken },
        });
        setCurrentUser(null);
    };

    useEffect(() => {
        if (currentUserString === null && currentUser !== null) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    });

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
