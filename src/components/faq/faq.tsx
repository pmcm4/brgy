import classNames from 'classnames';
import styles from './faq.module.scss';
import { useState } from 'react';

export interface FAQProps {
    className?: string;
    questions: { faqid: number; faqTitle: string; answer: string }[];
    heading: string;
    subheading: string;
}

export const FAQ = ({ questions, heading, subheading, className }: FAQProps) => {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    const handleActive = (faqId: number) => {
        if (activeIndices.includes(faqId)) {
            setActiveIndices(activeIndices.filter((id) => id !== faqId));
        } else {
            setActiveIndices([...activeIndices, faqId]);
        }
        console.log(activeIndices);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['header-faq']}>
                <div className={styles['header-container']}>
                    <span className={styles['heading-text']}>{heading}</span>
                    <span className={styles['subheading']}>{subheading}</span>
                </div>
            </div>
            <div className={styles['faq-body']}>
                <div className={styles['left']}>
                    {questions.slice(0, 5).map((obj, index) => (
                        <div key={obj.faqid} className={styles['accordion-div']}>
                            <button
                                className={styles.accordion}
                                value={obj.faqid}
                                onClick={() => handleActive(obj.faqid)}
                            >
                                {obj.faqTitle}
                            </button>
                            <div
                                className={
                                    activeIndices.includes(obj.faqid)
                                        ? styles['active']
                                        : styles['panel']
                                }
                            >
                                <span className={styles['answer']}>{obj.answer}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['right']}>
                    {questions.slice(5, 10).map((obj, index) => (
                        <div key={obj.faqid} className={styles['accordion-div']}>
                            <button
                                className={styles.accordion}
                                value={obj.faqid}
                                onClick={() => handleActive(obj.faqid)}
                            >
                                {obj.faqTitle}
                            </button>
                            <div
                                className={
                                    activeIndices.includes(obj.faqid)
                                        ? styles['active']
                                        : styles['panel']
                                }
                            >
                                <span className={styles['answer']}>{obj.answer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            ;
            <div className={styles['faq-breaker']}>
                <img
                    src="https://www.geocities.ws/jkandres/portfolio/marikina/190.seal.gif"
                    alt=""
                    className={styles['faq-breaker-logo']}
                />
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706070751/logo_sln6bp.png"
                    alt=""
                    className={styles['faq-breaker-logo']}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Sangguniang_Kabataan_logo.svg"
                    alt=""
                    className={styles['faq-breaker-logo']}
                />
            </div>
        </div>
    );
};
