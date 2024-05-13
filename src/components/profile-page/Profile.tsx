import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import axios from 'axios';
import { defaultApi } from '../../api';
import { useLocation, useNavigate } from 'react-router-dom';

function Profile() {
    const [userDetails, setUserDetails] = useState({
        name: '',
        username: '',
        email: '',
    });

    const [requestRows, setRequestDetails] = useState([
        {
            request_date: '',
            request_id: '',
            request_status: '',
            selected_cert_type: '',
            user_request_id: '',
        },
    ]);

    const [totalRequests, setTotalRequests] = useState(0);
    const [yearsResident, setYearsResident] = useState(0);
    const [unclaimedRequests, setUnclaimedRequests] = useState(0);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    //const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const location = useLocation();
    const navigate = useNavigate();

    const usernameFromURL = location.pathname.split('/')[2];

    const usernameFromStorage = JSON.parse(String(localStorage.getItem('currentUser')));

    useEffect(() => {
        try {
            if (usernameFromURL !== usernameFromStorage.username) {
                navigate('/error');
            }

            const getUserData = async () => {
                const userData = await axios.get(
                    `${defaultApi}/api/requestData/getSingleUserDetails/${usernameFromURL}`
                );

                setUserDetails({
                    name:
                        userData.data[0].first_name +
                        ' ' +
                        userData.data[0].middle_name +
                        ' ' +
                        userData.data[0].last_name,
                    username: userData.data[0].username,
                    email: userData.data[0].email_address,
                });

                setYearsResident(userData.data[0].years_in_san_roque);
            };
            getUserData();

            const getUserRequests = async () => {
                const userRequests = await axios.get(
                    `${defaultApi}/api/requestData/getSingleUserRequests/${usernameFromURL}`
                );

                setRequestDetails(userRequests.data);

                setTotalRequests(userRequests.data.length);
            };

            getUserRequests();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={styles['profile-main-body']}>
            <div className={styles['header-image']}></div>
            <div className={styles['user-contents']}>
                <div className={styles['user-details-box']}>
                    <img
                        src="https://cdn-icons-png.freepik.com/512/1077/1077114.png"
                        className={styles['user-image']}
                    />
                    <span className={styles['user-name']}>{userDetails.name}</span>

                    <button className={styles['edit-button']}>Edit Profile</button>

                    <div className={styles['input-box']}>
                        <span className={styles['input-label']}>Username</span>
                        <span className={styles['user-name']}>{userDetails.username}</span>
                    </div>

                    <div className={styles['input-box']}>
                        <span className={styles['input-label']}>Email</span>
                        <span className={styles['user-name']}>{userDetails.email}</span>
                    </div>
                </div>
                <div className={styles['user-requests-box']}>
                    <div className={styles['status-cards-container']}>
                        <div className={styles['status-cards']}>
                            <div className={styles['status-div-texts']}>
                                <span>{totalRequests}</span>
                                <span>Total</span>
                                <span>Requests</span>
                            </div>
                            <RequestPageOutlinedIcon
                                sx={{ fontSize: '120px', color: 'rgb(17, 202, 17)' }}
                            />
                        </div>
                        <div className={styles['status-cards']}>
                            <div className={styles['status-div-texts']}>
                                <span>0</span>
                                <span>Unclaimed</span>
                                <span>Requests</span>
                            </div>
                            <QuizOutlinedIcon
                                sx={{ fontSize: '120px', color: 'rgb(255, 153, 0)' }}
                            />
                        </div>
                        <div className={styles['status-cards']}>
                            <div className={styles['status-div-texts']}>
                                <span>{yearsResident}</span>
                                <span>Years</span>
                                <span>Resident</span>
                            </div>
                            <HomeWorkOutlinedIcon
                                sx={{ fontSize: '120px', color: 'rgb(0, 132, 255)' }}
                            />
                        </div>
                    </div>

                    <div className={styles['requests-table']}>
                        <Table aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Request ID</TableCell>
                                    <TableCell align="center">Type of Request</TableCell>
                                    <TableCell align="center">Date of Request</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? requestRows.slice(
                                          page * rowsPerPage,
                                          page * rowsPerPage + rowsPerPage
                                      )
                                    : requestRows
                                ).map((row) => (
                                    <TableRow key={row.request_id}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            style={{ width: 'auto' }}
                                            align="center"
                                        >
                                            {row.request_id}
                                        </TableCell>
                                        <TableCell style={{ width: 'auto' }} align="center">
                                            {row.selected_cert_type}
                                        </TableCell>
                                        <TableCell style={{ width: 'auto' }} align="center">
                                            {row.request_date}
                                        </TableCell>
                                        <TableCell style={{ width: 'auto' }} align="center">
                                            {row.request_status}
                                        </TableCell>
                                        <TableCell style={{ width: 'auto' }} align="center">
                                            <button>View</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {/* {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )} */}
                                <TableRow></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
