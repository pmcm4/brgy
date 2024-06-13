import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { defaultApi } from '../../api';
import { jwtDecode } from 'jwt-decode';

type AuthContextProps = {
    children: React.ReactNode;
};

type AuthContextProviderType = {
    login: (loginInput: object) => Promise<void>;
    logout: (token: object) => Promise<void>;
    currentUser: string | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
    accessToken: string | null;
    setAccessToken: React.Dispatch<any>;
    logoutSignal: boolean;
    setLogoutSignal: React.Dispatch<React.SetStateAction<boolean>>;
};

type LoginCredentialType = {
    accessToken: string;
};
type DecodedTokenType = {
    username: string;
};

export const AuthContext = createContext<AuthContextProviderType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
    const [currentUser, setCurrentUser] = useState<string | null>(null);

    const [accessToken, setAccessToken] = useState<string | null>(null);

    const [logoutSignal, setLogoutSignal] = useState(false);

    const login = async (loginInput: object) => {
        await axios
            .post<LoginCredentialType>(`${process.env.API_DOMAIN}/api/auth/loginUser`, loginInput, {
                withCredentials: true,
            }) // assign type in an axios response
            .then((response) => {
                const decodedToken = jwtDecode<DecodedTokenType>(String(response.data.accessToken));
                setCurrentUser(decodedToken.username);
                setAccessToken(response.data.accessToken);
            })
            .then(() => {
                console.log(accessToken);
            });
    };

    const logout = async () => {
        const parse = JSON.parse(currentUser!);
        await axios.post(`${process.env.API_DOMAIN}/api/auth/logout`, {
            headers: { authorization: 'Bearer ' + parse.accessToken },
            withCredentials: true,
        });
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                login,
                logout,
                setCurrentUser,
                accessToken,
                setAccessToken,
                //refreshToken,
                //setRefreshToken,
                logoutSignal,
                setLogoutSignal,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
