import React, {
    forwardRef,
    MouseEventHandler,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import styles from './layout.module.scss';
import Header from '../header/header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { AuthContext } from '../context/authContext';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LanguageContext } from '../context/languageContext';

function Layout() {
    const authContext = useContext(LanguageContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [langDropDown, setLangDropDown] = useState(false);
    const [modal, setModal] = useState(true);

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home');
        }
    }, []);

    const MOverLang = () => {
        setLangDropDown(true);
    };
    const MOutLang = () => {
        setLangDropDown(false);
        setModal(false);
    };

    const selectLanguage = (
        e:
            | React.MouseEvent<HTMLLIElement, MouseEvent>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const val = e.currentTarget.value;

        if (val == 1) {
            authContext?.setSelectEnglish(true);
            authContext?.setSelectFilipino(false);

            MOutLang();
        } else {
            authContext?.setSelectEnglish(false);
            authContext?.setSelectFilipino(true);

            MOutLang();
        }
    };

    return (
        <div className={styles['App']}>
            <div
                id={
                    modal
                        ? styles['language-select-background']
                        : styles['language-select-background-unset']
                }
            >
                <div id={styles['language-select-modal']}>
                    <h3>Select a language</h3>
                    <button onClick={selectLanguage} value={1}>
                        English
                    </button>
                    <button onClick={selectLanguage} value={2}>
                        Filipino
                    </button>
                </div>
            </div>
            <div id={styles['header-banner']}>
                <span>Tel: 646-84-79</span>
                <span> | </span>
                <span>barangaysanroque.marikinacity@gmail.com</span>
                <div id={styles['lang-icon']} onMouseOver={MOverLang} onMouseOut={MOutLang}>
                    <LanguageIcon /> <ArrowDropDownIcon />
                    <div
                        id={langDropDown ? styles['lang-dropdown'] : styles['lang-dropdown-hide']}
                        onMouseOver={MOverLang}
                        onMouseOut={MOutLang}
                    >
                        <li
                            onClick={selectLanguage}
                            value={1}
                            className={
                                authContext?.selectEnglish
                                    ? styles['li-focus']
                                    : styles['li-no-focus']
                            }
                        >
                            English
                        </li>
                        <li
                            onClick={selectLanguage}
                            value={2}
                            className={
                                authContext?.selectFilipino
                                    ? styles['li-focus']
                                    : styles['li-no-focus']
                            }
                        >
                            Tagalog
                        </li>
                    </div>
                </div>
            </div>
            <Header />
            <div className={styles['body-content']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
