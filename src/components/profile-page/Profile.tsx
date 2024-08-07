import React, { useContext, useEffect, useState } from 'react';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TablePaginationActions from './TablePaginationActions';
import { useAxios } from '../utils/useAxios';
import { AuthContext } from '../context/authContext';
import EditProfile from './EditProfile';
import { useQueries, useQuery } from 'react-query';
import ReuploadModal from './ReuploadModal';

function Profile() {
    const [userDetails, setUserDetails] = useState({
        name: '',
        username: '',
        email: '',
    });

    const [requestRows, setRequestDetails] = useState<any[]>([]);

    const [totalRequests, setTotalRequests] = useState(0);
    const [yearsResident, setYearsResident] = useState(0);
    const [unclaimedRequests, setUnclaimedRequests] = useState(0);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [reuploadModal, setReuploadModal] = useState(false);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - requestRows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const location = useLocation();
    const navigate = useNavigate();

    const usernameFromURL = location.pathname.split('/')[2];

    const authContext = useContext(AuthContext);

    let JWTAxios = useAxios();

    const getProfileData = async () => {
        const userRequests = await JWTAxios.get(
            `${process.env.API_DOMAIN}/api/requestData/getProfilePageContent/${usernameFromURL}`,
            {
                headers: {
                    authorization: `Bearer ${authContext?.accessToken}`,
                },
            }
        );

        sessionStorage.setItem('user_requests', JSON.stringify(userRequests.data));

        const parseUserRequests = JSON.parse(String(sessionStorage.getItem('user_requests')));

        setRequestDetails(parseUserRequests.userRequestsRows);
        setTotalRequests(parseUserRequests.userRequestsRows.length);

        setUserDetails({
            name:
                parseUserRequests.profileDetailsRows[0].first_name +
                ' ' +
                parseUserRequests.profileDetailsRows[0].middle_name +
                ' ' +
                parseUserRequests.profileDetailsRows[0].last_name,
            username: parseUserRequests.profileDetailsRows[0].username,
            email: parseUserRequests.profileDetailsRows[0].email_address,
        });

        setYearsResident(parseUserRequests.profileDetailsRows[0].years_in_san_roque);
    };

    if (
        authContext?.currentUser &&
        JSON.parse(String(sessionStorage.getItem('user_requests'))) === null
    ) {
        useQuery('getProfileContent', getProfileData);
    } else {
        useQuery('getProfileContent', getProfileData, {
            cacheTime: 1000 * 60 * 1, // Cache for 1 minute
            staleTime: 1000 * 30, // Data considered fresh for 30 seconds
        });
    }

    useEffect(() => {
        if (authContext?.currentUser === null) {
            navigate('/home');
        }

        if (JSON.parse(String(sessionStorage.getItem('user_requests'))) !== null) {
            const parseUserRequests = JSON.parse(String(sessionStorage.getItem('user_requests')));

            setRequestDetails(parseUserRequests.userRequestsRows);
            setTotalRequests(parseUserRequests.userRequestsRows.length);

            setUserDetails({
                name:
                    parseUserRequests.profileDetailsRows[0].first_name +
                    ' ' +
                    parseUserRequests.profileDetailsRows[0].middle_name +
                    ' ' +
                    parseUserRequests.profileDetailsRows[0].last_name,
                username: parseUserRequests.profileDetailsRows[0].username,
                email: parseUserRequests.profileDetailsRows[0].email_address,
            });

            setYearsResident(parseUserRequests.profileDetailsRows[0].years_in_san_roque);
        }
    }, []);

    const handleReuploadModal = () => {
        if (!reuploadModal) {
            setReuploadModal(true);
        } else {
            setReuploadModal(false);
        }
    };

    return (
        <div className={styles['profile-main-body']}>
            <div className={styles['header-image']} />

            <div className={styles['user-contents']}>
                <div className={styles['user-details-box']}>
                    <img
                        src="https://cdn-icons-png.freepik.com/512/1077/1077114.png"
                        className={styles['user-image']}
                    />
                    <span className={styles['user-name']}>{userDetails.name}</span>

                    <button
                        className={styles['edit-button']}
                        onClick={() => {
                            navigate(`/profile/edit/${usernameFromURL}`);
                        }}
                    >
                        Edit Profile
                    </button>

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
                                sx={{ color: 'rgb(17, 202, 17)' }}
                                className={styles['profile-icons']}
                            />
                        </div>
                        <div className={styles['status-cards']}>
                            <div className={styles['status-div-texts']}>
                                <span>0</span>
                                <span>Unclaimed</span>
                                <span>Requests</span>
                            </div>
                            <QuizOutlinedIcon
                                className={styles['profile-icons']}
                                sx={{ color: 'rgb(255, 153, 0)' }}
                            />
                        </div>
                        <div className={styles['status-cards']}>
                            <div className={styles['status-div-texts']}>
                                <span>{yearsResident}</span>
                                <span>Years</span>
                                <span>Resident</span>
                            </div>
                            <HomeWorkOutlinedIcon
                                className={styles['profile-icons']}
                                sx={{ color: 'rgb(0, 132, 255)' }}
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
                                    <TableRow key={row.request_id} style={{ height: '70px' }}>
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
                                            <Link
                                                to={`/profile/${usernameFromURL}/reupload/${row.request_id}`}
                                            >
                                                {row.reupload_access !== 0 ? (
                                                    <button onClick={handleReuploadModal}>
                                                        Reupload
                                                    </button>
                                                ) : (
                                                    <button disabled>Reupload</button>
                                                )}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10]}
                                        sx={{ borderTop: ' 1px solid rgba(224, 224, 224, 1)' }}
                                        colSpan={6}
                                        count={requestRows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
