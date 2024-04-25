import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styles from './home.module.scss';
import PersonCard from './personCard';

function carouselComponent() {
    const personObject = [
        {
            personID: 1,
            title: 'Barangay Captain',
            personName: 'Coach Allan Aramil',
            desc: 'lorem lorem lorem',
            img: 'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png',
        },
        {
            personID: 2,
            title: 'Barangay Captain',
            personName: 'Coach Allan Aramil',
            desc: 'lorem lorem lorem',
            img: 'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png',
        },
        {
            personID: 3,
            title: 'Barangay Captain',
            personName: 'Coach Allan Aramil',
            desc: 'lorem lorem lorem',
            img: 'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png',
        },
        {
            personID: 4,
            title: 'Barangay Captain',
            personName: 'Coach Allan Aramil',
            desc: 'lorem lorem lorem',
            img: 'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1706083237/408500257_122117065472102454_6962691213519753276_n_copy_ongujc.png',
        },
    ];
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                className: styles['carouselBtn'],
                children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                className: styles['carouselBtn'],
                children: <span>{`<`}</span>,
            }}
            responsiveProps={[
                {
                    itemsToShow: 3,
                    itemsToScroll: 2,
                    minWidth: 768,
                },
            ]}
            speed={300}
            easing="linear"
        >
            {personObject.map((obj) => (
                <PersonCard
                    key={obj.personID}
                    title={obj.title}
                    name={obj.personName}
                    desc={obj.desc}
                    img={obj.img}
                />
            ))}
        </ReactSimplyCarousel>
    );
}

export default carouselComponent;
