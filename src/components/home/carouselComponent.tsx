import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styles from './home.module.scss';
import PersonCard from './personCard';
import PersonIcon from '@mui/icons-material/Person';

function carouselComponent() {
    const personObject = [
        {
            personID: 1,
            title: 'Kagawad',
            personName: 'Name',
            desc: 'Description',
            img: 'https://cdn-icons-png.freepik.com/512/1077/1077114.png',
        },
        {
            personID: 2,
            title: 'Kagawad',
            personName: 'Name',
            desc: 'Description',
            img: 'https://cdn-icons-png.freepik.com/512/1077/1077114.png',
        },
        {
            personID: 3,
            title: 'Kagawad',
            personName: 'Name',
            desc: 'Description',
            img: 'https://cdn-icons-png.freepik.com/512/1077/1077114.png',
        },
        {
            personID: 4,
            title: 'Kagawad',
            personName: 'Name',
            desc: 'Description',
            img: 'https://cdn-icons-png.freepik.com/512/1077/1077114.png',
        },
        {
            personID: 5,
            title: 'Kagawad',
            personName: 'Name',
            desc: 'Description',
            img: 'https://cdn-icons-png.freepik.com/512/1077/1077114.png',
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
