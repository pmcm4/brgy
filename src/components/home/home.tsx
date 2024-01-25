import classNames from 'classnames';
import styles from './home.module.scss';
import PeopleIcon from '@mui/icons-material/People';
import FoundationIcon from '@mui/icons-material/Foundation';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Carousel from 'react-elastic-carousel';
import { Footer } from '../footer/footer';

export interface HomeProps {
    className?: string;
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Home = ({ className }: HomeProps) => {

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
            <div className={styles['contact-form']} />
            <div className={styles.logos} />
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