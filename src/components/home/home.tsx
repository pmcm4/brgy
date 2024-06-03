/* eslint-disable */
import classNames from 'classnames';
import styles from './home.module.scss';
import PeopleIcon from '@mui/icons-material/People';
import FoundationIcon from '@mui/icons-material/Foundation';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import CarouselComponent from './carouselComponent';

import MenuCard from './menuCard';
import Contactform from './cotactform';
import { Link } from 'react-router-dom';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { ScrollEffectContext } from '../context/scrollEffectContext';

export interface HomeProps {
    className?: string;
}

const center = {
    lat: 14.629162807169603,
    lng: 121.09842114576219,
};

const customMapStyle = [
    {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative.country',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative.province',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
            {
                color: '#e9e0da',
            },
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#e9e0da',
            },
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#e9e0da',
            },
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.government',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.medical',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [
            {
                color: '#b8cf78',
            },
            {
                saturation: '19',
            },
            {
                lightness: '-16',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.sports_complex',
        elementType: 'geometry',
        stylers: [
            {
                color: '#c7c7c7',
            },
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'all',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#ffffff',
            },
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [
            {
                color: '#ffffff',
            },
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
            {
                visibility: 'simplified',
            },
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
            {
                color: '#ffffff',
            },
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'all',
        stylers: [
            {
                color: '#84bde9',
            },
        ],
    },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Home = ({ className }: HomeProps) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });
    const [username, setUsername] = useState('');

    const authContext = useContext(AuthContext);
    const scrollEffectContext = useContext(ScrollEffectContext);

    const [checkExistUser, setCheckExistUser] = useState(false);

    useEffect(() => {
        if (authContext?.currentUser) {
            setCheckExistUser(true);
        }

        if (authContext?.currentUser !== null) {
            const getUsername = JSON.parse(String(localStorage.getItem('currentUser')));
            setUsername(getUsername?.username);
        }
    }, [authContext?.currentUser]);

    const handleScrollAbout = () => {
        scrollEffectContext?.aboutRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['image-bg']}>
                <span className={styles['heading-text']}>Barangay San Roque</span>
                <span className={styles.subheading}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </span>
            </div>
            <div className={styles['cards-container']}>
                <Link to={checkExistUser === true ? `/profile/${username}` : `/login`}>
                    <MenuCard
                        cardTitle="Profile"
                        cardSubText="View and edit your personal information."
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/id_sample_cl3weq.jpg"
                    />
                </Link>
                <Link to={'/certificates'}>
                    <MenuCard
                        cardTitle="Certifications"
                        cardSubText="Request all of available certifications through our online services."
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/photo-1562240020-ce31ccb0fa7d_jlk0ds%20(1).jpg"
                    />
                </Link>
                <Link to={`/faq`}>
                    <MenuCard
                        cardTitle="FAQ"
                        cardSubText="Explore Frequently Asked Questions"
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/photo-1531379410502-63bfe8cdaf6f_npnnrt.jpg"
                    />
                </Link>
                <div className={styles.cardExplore} onClick={handleScrollAbout}>
                    <div className={styles['gradient-card-explore']}></div>
                    <span className={styles['explore-more']}>Explore More ↓</span>
                </div>
            </div>
            <div className={styles['about-sec-home']}>
                <div className={styles['left-image']}>
                    <span
                        ref={scrollEffectContext?.aboutRef}
                        className={styles['header-home-about']}
                    >
                        ABOUT US
                    </span>
                    <span className={styles['header-about-main']}>
                        LOREM IPSUM LOREM IPSUMLOREM IPSUM
                    </span>
                    <span className={styles['subhead-home-about']}>
                        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUMLOREM IPSUM LOREM IPSUM LOREM
                        IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
                        IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM
                    </span>
                    <button className={styles['about-btn']}>Learn More</button>
                </div>
                <div className={styles['right-about-info']}>
                    <span>VIDEO</span>
                </div>
            </div>
            <div className={styles['brgy-info-mem']}>
                <div className={styles.top}>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <PeopleIcon sx={{ fontSize: '100px', color: 'white' }} />
                        </span>
                        <div className={styles['card-info-brgy']}>
                            <span className={styles['head1-info']}>40k+</span>
                            <span className={styles['subhead1-info']}>Residents</span>
                        </div>
                    </div>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <LandscapeIcon sx={{ fontSize: '100px', color: 'white' }} />
                        </span>
                        <div className={styles['card-info-brgy']}>
                            <span className={styles['head1-info']}>1.1 km²</span>
                            <span className={styles['subhead1-info']}>Area</span>
                        </div>
                    </div>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <FoundationIcon sx={{ fontSize: '100px', color: 'white' }} />
                        </span>
                        <div className={styles['card-info-brgy']}>
                            <span className={styles['head1-info']}>30+</span>
                            <span className={styles['subhead1-info']}>Years of Foundation</span>
                        </div>
                    </div>
                </div>
                <div className={styles.officials}>
                    <span className={styles['officials-header']}>Barangay Officials</span>
                    <div className={styles['brgy-cpt']}>
                        <img
                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png"
                            alt=""
                            className={styles['cpt-img']}
                        />
                        <div className={styles['cpt-info']}>
                            <span className={styles['cpt-title']}>Punong Barangay</span>
                            <span className={styles['cpt-name']}>Tadeo Allan M. Aramil</span>
                            <span className={styles['cpt-desc']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>

                            <div className={styles['ctncus-container']}>
                                <button className={styles['cntc-us-boff']}>Contact Us →</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carousell}>
                        <CarouselComponent />
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <Contactform />
                <div className={styles.logos}>
                    <div className={styles['logo-container']}>
                        <img
                            src="https://www.geocities.ws/jkandres/portfolio/marikina/190.seal.gif"
                            alt=""
                            className={styles['logo-contact']}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Sangguniang_Kabataan_logo.svg"
                            alt=""
                            className={styles['logo-contact']}
                        />
                        <img
                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                            alt=""
                            className={styles['logo-contact']}
                        />
                    </div>
                    <div className={styles['map-container']}>
                        {isLoaded ? (
                            <GoogleMap
                                center={center}
                                zoom={13}
                                mapContainerStyle={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px',
                                }}
                                options={{
                                    styles: customMapStyle,
                                }}
                            >
                                {/* Markers Here */}
                            </GoogleMap>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
/*                 <Carousel breakPoints={breakPoints}>
                   <div className={styles['carousell-cards']}>
                        <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order</span>
                    </div>

                   <div className={styles['carousell-cards']}>
                        <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order</span>
                    </div>

                   <div className={styles['carousell-cards']}>
                        <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order</span>
                    </div>

                   <div className={styles['carousell-cards']}>
                        <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order</span>
                    </div>
                    <div className={styles['carousell-cards']}>
                        <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order Kagawad Chair on Peace &amp; Order</span>
                    </div>
                </Carousel>
                
                */
