import classNames from 'classnames';
import styles from './certificate-request-forms.module.scss';
import { ChangeEvent, useContext, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import dayjs, { Dayjs } from 'dayjs';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SuccessModal from '../message-modals/SuccessModal';
import FailedModal from '../message-modals/FailedModal';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LanguageContext } from '../context/languageContext';

export interface PFAddressProps {
    className?: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selfInput?: {
        residency: string;
        yearsInSanRoque: string;
        block: string;
        street: string;
        barangay: string;
        city: string;
        province: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PFAddress = ({ className, handleSubmit, onBack, selfInput }: PFAddressProps) => {
    const [inputs, setInputs] = useState({
        residency: '',
        yearsInSanRoque: '',
        block: '',
        street: '',
        barangay: 'San Roque',
        city: 'Marikina City',
        province: 'Metro Manila',
    });

    const handleOnChange = (
        e:
            | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);

    const handleOnClick = () => {
        reviewContext?.setAddressForm({
            residency: inputs.residency,
            yearsInSanRoque: inputs.yearsInSanRoque,
            block: inputs.block,
            street: inputs.street,
            barangay: inputs.barangay,
            city: inputs.city,
            province: inputs.province,
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            {languageContext?.selectEnglish ? (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Please fill out this form with your current and accurate address
                        information. This information is essential for residency verification and
                        delivery purposes, and will be kept confidential in accordance with our
                        privacy policy.
                    </span>
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit} className={styles['address-container-form']}>
                        <div className={styles['input-form-address']}>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="residency-label-id">Residency</InputLabel>
                                        <Select
                                            labelId="residency-label-id"
                                            label="Residency"
                                            defaultValue=""
                                            name="residency"
                                            value={selfInput?.residency}
                                            onChange={handleOnChange}
                                            required
                                        >
                                            <MenuItem value={'Home Owner'}>Home Owner</MenuItem>
                                            <MenuItem value={'Tenant'}>Tenant</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            <div className={styles['input-div']}>
                                <TextField
                                    label="Year In San Roque"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="1 year"
                                    value={selfInput?.yearsInSanRoque}
                                    required
                                    name="yearsInSanRoque"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Block"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="blk 1 / lot 1"
                                    value={selfInput?.block}
                                    required
                                    name="block"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Street"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="Shoe Avenue"
                                    value={selfInput?.street}
                                    required
                                    name="street"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Barangay"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'San Roque'}
                                    name="barangay"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="City"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Marikina City'}
                                    name="city"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Province"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Metro Manila'}
                                    name="province"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className={styles['nav-buttons-container']}>
                            <button className={styles['nav-btn']} onClick={onBack}>
                                Back
                            </button>
                            <button
                                className={styles['nav-btn']}
                                onClick={handleOnClick}
                                onSubmit={handleSubmit}
                            >
                                Next
                            </button>
                        </div>
                    </form>{' '}
                </>
            ) : (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Pakipunan ang form na ito ng iyong kasalukuyan at tamang address. Mahalaga
                        ang impormasyong ito para sa beripikasyon ng residency at layunin ng
                        paghahatid, at itatago itong kumpidensyal ayon sa aming patakaran sa
                        privacy.
                    </span>
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit} className={styles['address-container-form']}>
                        <div className={styles['input-form-address']}>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="residency-label-id">Paninirahan</InputLabel>
                                        <Select
                                            labelId="residency-label-id"
                                            label="Paninirahan"
                                            defaultValue=""
                                            name="residency"
                                            value={selfInput?.residency}
                                            onChange={handleOnChange}
                                            required
                                        >
                                            <MenuItem value={'Home Owner'}>Home owner</MenuItem>
                                            <MenuItem value={'Tenant'}>Nangungupahan</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            <div className={styles['input-div']}>
                                <TextField
                                    label="Taon sa San Roque"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="1 year"
                                    value={selfInput?.yearsInSanRoque}
                                    required
                                    name="yearsInSanRoque"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Block"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="blk 1 / lot 1"
                                    value={selfInput?.block}
                                    required
                                    name="block"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Street"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="Shoe Avenue"
                                    value={selfInput?.street}
                                    required
                                    name="street"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Barangay"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'San Roque'}
                                    name="barangay"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="City"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Marikina City'}
                                    name="city"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Province"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Metro Manila'}
                                    name="province"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className={styles['nav-buttons-container']}>
                            <button className={styles['nav-btn']} onClick={onBack}>
                                Bumalik
                            </button>
                            <button
                                className={styles['nav-btn']}
                                onClick={handleOnClick}
                                onSubmit={handleSubmit}
                            >
                                Susunod
                            </button>
                        </div>
                    </form>{' '}
                </>
            )}
        </div>
    );
};

export const PFAddressUncontrolled = ({ className, handleSubmit, onBack }: PFAddressProps) => {
    const [inputs, setInputs] = useState({
        residency: '',
        yearsInSanRoque: '',
        block: '',
        street: '',
        barangay: 'San Roque',
        city: 'Marikina City',
        province: 'Metro Manila',
    });

    const handleOnChange = (
        e:
            | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>
    ) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const reviewContext = useContext(ReviewContext);
    const languageContext = useContext(LanguageContext);

    const handleOnClick = () => {
        reviewContext?.setAddressForm({
            residency: inputs.residency,
            yearsInSanRoque: inputs.yearsInSanRoque,
            block: inputs.block,
            street: inputs.street,
            barangay: inputs.barangay,
            city: inputs.city,
            province: inputs.province,
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            {languageContext?.selectEnglish ? (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Please fill out this form with your current and accurate address
                        information. This information is essential for residency verification and
                        delivery purposes, and will be kept confidential in accordance with our
                        privacy policy.
                    </span>
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit} className={styles['address-container-form']}>
                        <div className={styles['input-form-address']}>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="residency-label-id">Residency</InputLabel>
                                        <Select
                                            labelId="residency-label-id"
                                            label="Residency"
                                            defaultValue=""
                                            name="residency"
                                            onChange={handleOnChange}
                                            required
                                        >
                                            <MenuItem value={'Home Owner'}>Home Owner</MenuItem>
                                            <MenuItem value={'Tenant'}>Tenant</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            <div className={styles['input-div']}>
                                <TextField
                                    label="Year In San Roque"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="1 year"
                                    required
                                    name="yearsInSanRoque"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Block"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="blk 1 / lot 1"
                                    required
                                    name="block"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Street"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="Shoe Avenue"
                                    required
                                    name="street"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Barangay"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'San Roque'}
                                    name="barangay"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="City"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Marikina City'}
                                    name="city"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Province"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Metro Manila'}
                                    name="province"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className={styles['nav-buttons-container']}>
                            <button className={styles['nav-btn']} onClick={onBack}>
                                Back
                            </button>
                            <button
                                className={styles['nav-btn']}
                                onClick={handleOnClick}
                                onSubmit={handleSubmit}
                            >
                                Next
                            </button>
                        </div>
                    </form>{' '}
                </>
            ) : (
                <>
                    {' '}
                    <h1 className={styles['header-perso']}>Address</h1>
                    <span className={styles['perso-subhead']}>
                        Pakipunan ang form na ito ng iyong kasalukuyan at tamang address. Mahalaga
                        ang impormasyong ito para sa beripikasyon ng residency at layunin ng
                        paghahatid, at itatago itong kumpidensyal ayon sa aming patakaran sa
                        privacy.
                    </span>
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit} className={styles['address-container-form']}>
                        <div className={styles['input-form-address']}>
                            <div className={styles['input-div']}>
                                <Box>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="residency-label-id">Paninirahan</InputLabel>
                                        <Select
                                            labelId="residency-label-id"
                                            label="Paninirahan"
                                            defaultValue=""
                                            name="residency"
                                            onChange={handleOnChange}
                                            required
                                        >
                                            <MenuItem value={'Home Owner'}>Home owner</MenuItem>
                                            <MenuItem value={'Tenant'}>Nangungupahan</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            <div className={styles['input-div']}>
                                <TextField
                                    label="Taon sa San Roque"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="1 year"
                                    required
                                    name="yearsInSanRoque"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Block"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="blk 1 / lot 1"
                                    required
                                    name="block"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Street"
                                    size="small"
                                    className={styles['input-names']}
                                    placeholder="Shoe Avenue"
                                    required
                                    name="street"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Barangay"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'San Roque'}
                                    name="barangay"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="City"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Marikina City'}
                                    name="city"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className={styles['input-div']}>
                                <TextField
                                    label="Province"
                                    size="small"
                                    className={styles['input-names']}
                                    disabled
                                    value={'Metro Manila'}
                                    name="province"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className={styles['nav-buttons-container']}>
                            <button className={styles['nav-btn']} onClick={onBack}>
                                Bumalik
                            </button>
                            <button
                                className={styles['nav-btn']}
                                onClick={handleOnClick}
                                onSubmit={handleSubmit}
                            >
                                Susunod
                            </button>
                        </div>
                    </form>{' '}
                </>
            )}
        </div>
    );
};
