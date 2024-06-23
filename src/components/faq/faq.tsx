import classNames from 'classnames';
import styles from './faq.module.scss';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <span className={styles['heading-text']}>{heading}</span>
                <span className={styles['subheading']}>{subheading}</span>
            </div>
            <div className={styles['faq-body']}>
                <div className={styles['left']}>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            What is Lorem Ipsum?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Where does it come from?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the
                            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                            Cicero,{' '}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Why do we use it?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like).
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Where can I get some?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don't look even slightly believable.
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles['right']}>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            What is Lorem Ipsum?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Where does it come from?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the
                            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                            Cicero,{' '}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Why do we use it?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like).
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Where can I get some?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don't look even slightly believable.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

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

{
    /* <div className={styles['left']}>
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
</div> */
}
