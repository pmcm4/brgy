import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { defaultApi } from '../../api';
import { jwtDecode } from 'jwt-decode';

type DecodedTokenType = {
    username: string;
};

export const useOnReload = async (
    logoutSignal: boolean,
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>,
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
    currentUser: string | null
) => {
    const handleRefresh = async () => {
        try {
            const response = await axios.post<{ accessToken: string }>(
                `${process.env.API_DOMAIN}/api/auth/preventLogout`,
                {},
                { withCredentials: true }
            );

            const decodedToken = jwtDecode<DecodedTokenType>(String(response.data.accessToken));
            setCurrentUser(decodedToken.username);
            setAccessToken(response.data.accessToken);
            sessionStorage.clear();

            return 'withlogin';
        } catch (error) {
            console.log('No recent login');

            return 'withoutlogin';
        }
    };
    const value = await handleRefresh();

    return value;
};
