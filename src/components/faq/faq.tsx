import classNames from 'classnames';
import styles from './faq.module.scss';
import { Header } from '../header/header';
import { useEffect, useRef } from 'react';
import { Footer } from '../footer/footer';

export interface FAQProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FAQ = ({ className }: FAQProps) => {

    const accordionRef = useRef<HTMLButtonElement[]>([]);

    useEffect(() => {
        const handleAccordionClick = (index: number) => {
            const accordion = accordionRef.current[index];
            const panel = accordion.nextElementSibling;

            accordion.classList.toggle("active");
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        }
        accordionRef.current.forEach((accordion, index) => {
            accordion.addEventListener("click", () => handleAccordionClick(index));
        });

        return () => {
            // Cleanup event listeners when the component unmounts
            accordionRef.current.forEach((accordion, index) => {
                accordion.removeEventListener("click", () => handleAccordionClick(index));
            });
        };
    }, []);


    return <div className={classNames(styles.root, className)}>
        <Header className={styles['menu-faq']} />
        <div className={styles['header-faq']} >
            <span className={styles['heading-text']}>Frequently Asked Questions</span>
            <span className={styles.subheading}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span></div>
        <div className={styles['faq-body']}>
            <div className={styles['left']}>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[0] = el)} className={styles.accordion}>
                        FAQ 1
                    </button>
                    <div className={styles.panel}>
                        <span>text</span>
                    </div>
                </div>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[1] = el)} className={styles.accordion}>
                    FAQ 2
                    </button>
                    <div className={styles.panel}>
                        <span>text</span>
                    </div>
                </div>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[2] = el)} className={styles.accordion}>
                        FAQ 3
                    </button>
                    <div className={styles.panel}>
                        <span>text</span>
                    </div>
                </div>

            </div>

            <div className={styles['right']}>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[3] = el)} className={styles.accordion}>
                        FAQ 4
                    </button>
                    <div className={styles.panel}>
                        <span>text texttext texttexttext texttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</span>
                    </div>
                </div>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[4] = el)} className={styles.accordion}>
                        FAQ 5 ▼
                    </button>
                    <div className={styles.panel}>
                        <span>text</span>
                    </div>
                </div>

                <div className={styles['accordion-div']}>
                    <button ref={(el) => (accordionRef.current[5] = el)} className={styles.accordion}>
                        FAQ 6 
                    </button>
                    <div className={styles.panel}>
                        <span>text</span>
                    </div>
                </div>



            </div>

        </div>
        <div className={styles['faq-breaker']}>
            <img src="https://www.geocities.ws/jkandres/portfolio/marikina/190.seal.gif" alt="" className={styles['faq-breaker-logo']} />
            <img src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png" alt="" className={styles['faq-breaker-logo']} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Sangguniang_Kabataan_logo.svg" alt="" className={styles['faq-breaker-logo']} /></div>
        <Footer />
    </div>;
};
