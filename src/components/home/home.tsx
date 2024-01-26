import classNames from 'classnames';
import styles from './home.module.scss';
import PeopleIcon from '@mui/icons-material/People';
import FoundationIcon from '@mui/icons-material/Foundation';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Carousel from 'react-elastic-carousel';
import { Footer } from '../footer/footer';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

export interface HomeProps {
    className?: string;
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

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
export const Home = ({ className }: HomeProps) => { 
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });


    return <div className={classNames(styles.root, className)}>
        <div className={styles['image-bg']}>
            <span className={styles['heading-text']}>Barangay San Roque</span>
            <span className={styles.subheading}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className={styles['cards-container']}>
            <div className={styles.card}>
                <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706074450/photo-1562240020-ce31ccb0fa7d_jlk0ds.webp" alt="" className={styles['cert-image']} />
                <div className={styles['gradient-card']}>
                    <span className={styles['card-text']}>Certifications</span>
                    <span className={styles['card-subtext']}>Request all of available certifications through our online services.</span>
                </div></div>
            <div className={styles.card}>
                <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706074448/id_sample_cl3weq.png" alt="" className={styles['id-image']} />
                <div className={styles['gradient-card']}>
                    <span className={styles['card-text']}>I.D. Card</span>
                    <span className={styles['card-subtext']}>Request Barangay I.D. through our online services.</span></div>
            </div>
            <div className={styles.card}>
                <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706074449/photo-1531379410502-63bfe8cdaf6f_npnnrt.webp" alt="" className={styles['faq-img']} />
                <div className={styles['gradient-card']} ><span className={styles['card-text']}>FAQ</span>
                    <span className={styles['card-subtext']}>Explore Frequently Asked Questions</span></div>
            </div>
            <div className={styles.card}>
                <span className={styles['explore-more']}>Explore More ↓</span>
            </div>
        </div>
        <div className={styles['about-sec-home']}>
            <div className={styles['left-image']}>
                <span className={styles['header-home-about']}>ABOUT US</span>
                <span className={styles['header-about-main']}>LOREM IPSUM LOREM IPSUMLOREM IPSUM</span>
                <span className={styles['subhead-home-about']}>LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUMLOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM</span>
                <button className={styles['about-btn']}>Learn More</button>
            </div>
            <div className={styles['right-about-info']}>
                <span>VIDEO</span>
            </div>
        </div>
        <div className={styles['brgy-info-mem']}>
            <div className={styles.top}>
                <div className={styles['top-card']}>
                    <span className={styles['icon-1']}><PeopleIcon sx={{ fontSize: "100px", color: "white" }} /></span>
                    <div className={styles['card-info-brgy']}>
                        <span className={styles['head1-info']}>40k+</span>
                        <span className={styles['subhead1-info']}>Residents</span>
                    </div>
                </div>
                <div className={styles['top-card']}>
                    <span className={styles['icon-1']}><LandscapeIcon sx={{ fontSize: "100px", color: "white" }} /></span>
                    <div className={styles['card-info-brgy']}>
                        <span className={styles['head1-info']}>1.1 km²</span>
                        <span className={styles['subhead1-info']}>Area</span>
                    </div>
                </div>
                <div className={styles['top-card']}>
                    <span className={styles['icon-1']}><FoundationIcon sx={{ fontSize: "100px", color: "white" }} /></span>
                    <div className={styles['card-info-brgy']}>
                        <span className={styles['head1-info']}>30+</span>
                        <span className={styles['subhead1-info']}>Years of Foundation</span>
                    </div>
                </div></div>
            <div className={styles.officials}>
                <span className={styles['officials-header']}>Barangay Officials</span>
                <div className={styles['brgy-cpt']}>
                    <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png" alt="" className={styles['cpt-img']} />
                    <div className={styles['cpt-info']}>
                        <span className={styles['cpt-title']}>Punong Barangay</span>
                        <span className={styles['cpt-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['cpt-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                        <div className={styles['ctncus-container']}><button className={styles['cntc-us-boff']}>Contact Us  →</button></div>
                    </div>


                </div>
                <div className={styles.carousell}>
                    <div className={styles['carousell-cards']}>
                        <img src="" alt="" className={styles.kgwd} />
                        <span className={styles['kgwd-title']}>Kagawad</span>
                        <span className={styles['kgwd-name']}>Tadeo Allan M. Aramil</span>
                        <span className={styles['kgwd-desc']}>Committee Chairman - Budget and Appropriations, Ways and Means, Livelihood, Trade and Industry and People’s Participation</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contact}>
            <div className={styles['contact-form']}>
                <span className={styles['contact-us-title']}>Contact Us</span>
                <span className={styles['contact-us-desc']}>text</span>
                <div className={styles['names-container']}>
                    <div className={styles['fname-container']}>
                        <span className={styles['name-span']}>First Name*</span>
                        <input className={styles['fname-input']} />
                    </div>
                    <div className={styles['lname-container']}>
                        <span className={styles['name-span']}>Last Name*</span>
                        <input className={styles['lname-input']} />
                    </div>
                </div>
                <div className={styles['email-container']}>
                    <span className={styles['email-title-contact']}>Email * </span>
                    <input className={styles['email-input']} />
                </div>
                <div className={styles['message-container']}>
                    <span className={styles['leave-a-msg']}>Leave us a message...</span>
                    <textarea className={styles['message-input']} />
                </div>
                <button className={styles['contact-submit-btn']}>Submit</button>
            </div>
            <div className={styles.logos}>
                <div className={styles['logo-container']}>
                    <img src="https://www.geocities.ws/jkandres/portfolio/marikina/190.seal.gif" alt="" className={styles['logo-contact']} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Sangguniang_Kabataan_logo.svg" alt="" className={styles['logo-contact']} />
                    <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png" alt="" className={styles['logo-contact']} />
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
        <Footer />
    </div>;
};
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