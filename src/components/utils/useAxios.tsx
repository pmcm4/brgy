import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from '../context/authContext';
import { defaultApi } from '../../api';
import { useContext } from 'react';

export const useAxios = () => {
    //this INTERCEPTOR is used for all api request that needs revalidation (refreshes the tokens)
    const authContext = useContext(AuthContext);

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const parse = authContext?.accessToken;
            let currentDate = new Date();

            const decodedToken = jwtDecode(String(parse));

            if (decodedToken.exp! * 1000 < currentDate.getTime()) {
                const data = await handleRefreshToken();
                config.headers['authorization'] = 'Bearer ' + data.accessToken;
                const currentUserStorage = JSON.parse(String(localStorage.getItem('currentUser')));

                localStorage.setItem(
                    'currentUser',
                    JSON.stringify({
                        username: currentUserStorage?.username,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                    })
                );

                authContext?.setAccessToken(data.accessToken);
                authContext?.setRefreshToken(data.refreshToken);
            }

            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    const handleRefreshToken = async () => {
        try {
            const token = {
                token: authContext?.refreshToken,
            };

            const res = await axios.post(`${defaultApi}/api/auth/refreshToken`, token);

            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    return axiosJWT;
};

export const useLogoutAxios = () => {
    //this INTERCEPTOR is used for validating the logout function THEN using the logoutRefresh Route that doesnt regenerate a new refresh token in the database but DELETES them
    const authContext = useContext(AuthContext);

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const parse = authContext?.accessToken;
            let currentDate = new Date();

            const decodedToken = jwtDecode(String(parse));

            if (decodedToken.exp! * 1000 < currentDate.getTime()) {
                const data = await handleLogoutRefresh();
                config.headers['authorization'] = 'Bearer ' + data.accessToken;
                const username = JSON.parse(String(localStorage.getItem('currentUser')));

                localStorage.setItem(
                    'currentUser',
                    JSON.stringify({
                        username: username?.username,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                    })
                );

                authContext?.setAccessToken(data.accessToken);
                authContext?.setRefreshToken(data.refreshToken);
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    const handleLogoutRefresh = async () => {
        try {
            const token = {
                token: authContext?.refreshToken,
            };

            const res = await axios.post(`${defaultApi}/api/auth/handleLogoutToken`, token);

            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    return axiosJWT;
};
