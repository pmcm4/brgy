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
import Loader from '../loader/Loader';
import { LanguageContext } from '../context/languageContext';

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

    const authContext = useContext(AuthContext);
    const languageContext = useContext(LanguageContext);

    const username = authContext?.currentUser;

    const scrollEffectContext = useContext(ScrollEffectContext);

    const [checkExistUser, setCheckExistUser] = useState(false);

    useEffect(() => {
        if (authContext?.currentUser) {
            setCheckExistUser(true);
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
                <div className={styles['home-header-div']}>
                    <span className={styles['heading-text']}>Barangay San Roque</span>
                    {languageContext?.selectEnglish ? (
                        <p className={styles.subheading}>
                            An active community with an effective government and community services.
                        </p>
                    ) : (
                        <p className={styles.subheading}>
                            Isang aktibong komunidad na may epektibong pamahalaan at serbisyong
                            pang-komunidad.
                        </p>
                    )}
                </div>
            </div>
            <div className={styles['cards-container']}>
                <Link to={checkExistUser === true ? `/profile/${username}` : `/login`}>
                    <MenuCard
                        cardTitle="Profile"
                        cardSubText={
                            languageContext?.selectEnglish
                                ? 'View and edit your personal information.'
                                : 'Tingnan at baguhin ang iyong personal na impormasyon.'
                        }
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/id_sample_cl3weq.jpg"
                    />
                </Link>
                <Link to={'/certificates'}>
                    <MenuCard
                        cardTitle={
                            languageContext?.selectEnglish ? 'Certifications' : 'Sertipikasyon'
                        }
                        cardSubText={
                            languageContext?.selectEnglish
                                ? 'Request all of available certifications through our online services.'
                                : 'Mag-request ng mga sertipikasyon online.'
                        }
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/photo-1562240020-ce31ccb0fa7d_jlk0ds%20(1).jpg"
                    />
                </Link>
                <Link to={`/faq`}>
                    <MenuCard
                        cardTitle="FAQ"
                        cardSubText={
                            languageContext?.selectEnglish
                                ? 'Explore Frequently Asked Questions'
                                : 'Tignan ang mga karaniwang tanong at sagot sa serbisyo ng Barangay San Roque'
                        }
                        cardImg="https://storage.googleapis.com/barangay-san-roque-public/photo-1531379410502-63bfe8cdaf6f_npnnrt.jpg"
                    />
                </Link>
                <div className={styles.cardExplore} onClick={handleScrollAbout}>
                    <div className={styles['gradient-card-explore']}></div>
                    {languageContext?.selectEnglish ? (
                        <span className={styles['explore-more']}>Explore More ↓</span>
                    ) : (
                        <span className={styles['explore-more']}>I-explore Pa ↓</span>
                    )}
                </div>
            </div>

            <div className={styles['about-sec-home']}>
                <div className={styles['left-image']}>
                    {
                        <span
                            ref={scrollEffectContext?.aboutRef}
                            className={styles['header-home-about']}
                        >
                            ABOUT US
                        </span>
                    }
                    <span className={styles['header-about-main']}>BARANGAY SAN ROQUE</span>
                    {languageContext?.selectEnglish ? (
                        <span className={styles['subhead-home-about']}>
                            Barangay San Roque is a vibrant community located in District 1 of
                            Marikina City. Known for its active local government and close-knit
                            neighborhoods, San Roque is dedicated to the welfare and safety of its
                            residents. The barangay provides essential services, including online
                            platforms for requesting barangay certificates and IDs, promoting
                            efficient and convenient community management.
                        </span>
                    ) : (
                        <span className={styles['subhead-home-about']}>
                            Ang Barangay San Roque ay isang masiglang komunidad na matatagpuan sa
                            District 1 ng Lungsod ng Marikina. Kilala sa aktibong pamahalaang lokal
                            at magkakalapit na kapitbahayan, ang San Roque ay nakatuon sa kapakanan
                            at kaligtasan ng mga residente nito. Nagbibigay ang barangay ng
                            mahahalagang serbisyo, kabilang ang online na mga plataporma para sa
                            paghingi ng barangay certificates at IDs, na nagtataguyod ng episyente
                            at madaling pamamahala ng komunidad.
                        </span>
                    )}
                    {languageContext?.selectEnglish ? (
                        <button className={styles['about-btn']}>Learn More</button>
                    ) : (
                        <button className={styles['about-btn']}>Alamin Pa</button>
                    )}
                </div>
                <div className={styles['right-about-info']}>
                    <video className={styles['video-container']} controls>
                        <source
                            src="https://storage.googleapis.com/barangay-san-roque-public/BARANGAY_SAN_ROQUE.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div className={styles['brgy-info-mem']}>
                <div className={styles.top}>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <PeopleIcon
                                sx={{ fontSize: '100px', color: 'white' }}
                                className={styles['info-icon']}
                            />
                        </span>
                        <div className={styles['card-info-brgy']}>
                            <span className={styles['head1-info']}>40k+</span>
                            <span className={styles['subhead1-info']}>Residents</span>
                        </div>
                    </div>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <LandscapeIcon
                                sx={{ fontSize: '100px', color: 'white' }}
                                className={styles['info-icon']}
                            />
                        </span>
                        <div className={styles['card-info-brgy']}>
                            <span className={styles['head1-info']}>1.1 km²</span>
                            <span className={styles['subhead1-info']}>Area</span>
                        </div>
                    </div>
                    <div className={styles['top-card']}>
                        <span className={styles['icon-1']}>
                            <FoundationIcon
                                sx={{ fontSize: '100px', color: 'white' }}
                                className={styles['info-icon']}
                            />
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
                            {languageContext?.selectEnglish ? (
                                <span className={styles['cpt-title']}>Barangay Captain</span>
                            ) : (
                                <span className={styles['cpt-title']}>Punong Barangay</span>
                            )}
                            <span className={styles['cpt-name']}>Tadeo Allan M. Aramil</span>
                            {languageContext?.selectEnglish ? (
                                <span className={styles['cpt-desc']}>
                                    A dedicated Punong Barangay of Barangay San Roque, Marikina
                                    City. Born on October 28, 1968, he has served the community
                                    since 1996, contributing significantly to local welfare and
                                    safety.
                                </span>
                            ) : (
                                <span className={styles['cpt-desc']}>
                                    Isang dedikadong Punong Barangay ng Barangay San Roque, Lungsod
                                    ng Marikina. Ipinanganak noong Oktubre 28, 1968, nagsilbi siya
                                    sa komunidad mula pa noong 1996, na nag-aambag nang malaki sa
                                    lokal na kapakanan at kaligtasan.
                                </span>
                            )}

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
