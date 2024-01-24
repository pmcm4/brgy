import classNames from 'classnames';
import styles from './home.module.scss';

export interface HomeProps {
    className?: string;
}

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
                <div className={styles['top-card']} />
                <div className={styles['top-card']} />
                <div className={styles['top-card']} />
                <div className={styles['top-card']} />
            </div>
            <div className={styles.officials} />
        </div>
    </div>;
};
