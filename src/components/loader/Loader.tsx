import React, { useState } from 'react';
import styles from './loader.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

interface LoaderTypes {
    offSignal: boolean;
}

function Loader({ offSignal }: LoaderTypes) {
    return (
        <div className={offSignal === false ? styles['opacity-off'] : styles['loader-container']}>
            <CircularProgress />
        </div>
    );
}

export default Loader;
