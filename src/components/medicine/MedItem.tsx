import React from 'react';
import styles from './medicine.module.scss';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

type MedItemTypes = {
    medName: string;
};

function MedItem({ medName }: MedItemTypes) {
    return (
        <div className={styles['medicine-cards']}>
            <Checkbox
                sx={{
                    '& .MuiSvgIcon-root': { fontSize: 18 },
                    color: '#212121',
                    '&.Mui-checked': {
                        color: '#212121',
                    },
                }}
            />
            <h3>{medName}</h3>
            <div className={styles['number-input-div']}>
                <IconButton aria-label="add" size="small">
                    <AddIcon />
                </IconButton>
                <input id={styles['input-number']} type="number" defaultValue={0} />
                <IconButton aria-label="remove" size="small">
                    <RemoveIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default MedItem;
