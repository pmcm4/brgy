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
                            Ano ang mga serbisyo na maaring irequest online sa website ng barangay?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Maaari kang mag-request ng mga sumusunod na dokumento at serbisyo:
                            Barangay ID, Clearance, Certificate of Residency, at iba pa.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Paano mag-request ng Barangay ID gamit ang website?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Para mag-request ng Barangay ID, pumunta sa bahagi ng 'Services' at
                            piliin ang Barangay ID. Sundan ang mga tagubilin para sa pagpapakita ng
                            mga kinakailangang dokumento at impormasyon.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Magkano ang bayad sa pag-request ng mga dokumento online?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Ang pag-request ng mga basic na dokumento gaya ng Barangay ID at
                            Certificate of Residency ay libre. Gayunpaman, maaaring may bayad para
                            sa mga espesyal na serbisyo o rush requests.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Paano malalaman ang status ng aking request?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Maaari mong ma-track ang status ng iyong request sa pamamagitan ng
                            pag-login sa iyong account sa website at pagpunta sa bahagi ng
                            'Profile'. Makikita mo ang impormasyon ng iyong mga reques sa loob ng
                            iyong Profile page.
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
                            Ano ang mga kinakailangang dokumento para sa pag-request ng Barangay
                            Certifcates?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Para sa mga may-ari ng bahay (homeowner), karaniwang kailangan ang valid
                            ID (tulad ng Voter's ID, Passport, o Driver's License) na may address sa
                            Barangay San Roque. Depende sa uri ng clearance na kailangan, maaaring
                            hingin din ng opisyal ng barangay ang iba pang dokumento. Kung ikaw ay
                            tenant o nangungupahan, maaari kang magbigay ng valid ID at isang sulat
                            mula sa iyong landlord o may-ari ng bahay na nagpapatunay na ikaw ay
                            aktibong nangungupahan sa nasabing address.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Paano magbigay ng feedback o reklamo tungkol sa serbisyo ng barangay?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Maaari kang magbigay ng feedback o reklamo sa pamamagitan ng 'Contact
                            Us' section ng aming website. Ilahad ang mga detalye ng iyong karanasan
                            o mga katanungan, at ang aming team ay sasagutin ka sa lalong madaling
                            panahon. Maaari mo rin kaming i-message sa aming Facebook page ng
                            Barangay para sa karagdagang katanungan o pagbibigay ng feedback.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Ano ang mga oras ng operasyon ng opisina ng barangay para sa pagproseso
                            ng online requests?
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                            Ang opisina ng barangay ay bukas mula Lunes hanggang Biyernes, mula 7:00
                            AM hanggang 5:00 PM. Ang mga request na natanggap pagkatapos ng oras na
                            ito ay maaaring asikasuhin sa susunod na araw na opisyal na pagbubukas
                            ng opisina.
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
