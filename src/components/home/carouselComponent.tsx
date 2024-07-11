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
            personName: 'Dennis Santiago',
            desc: 'Committee Chairman on Education, Arts, Culture and Infrastructure',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-dennis.png',
        },
        {
            personID: 2,
            title: 'Kagawad',
            personName: 'Andrew Salvador',
            desc: 'Committee Chairman on Cleanliness and Beautification and Environmental Protection',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-salvador.png',
        },
        {
            personID: 3,
            title: 'Kagawad',
            personName: 'Edgardo Jr Casimiro',
            desc: 'Committee Chairman on Public Health and Nutrition and Information Communications Technology',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-jr.png',
        },
        {
            personID: 4,
            title: 'Kagawad',
            personName: 'Albert “Abet” Caro',
            desc: 'Committee Chairman on Disaster Resilience, Peace and Order and Public Safety',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-albert.png',
        },
        {
            personID: 5,
            title: 'Kagawad',
            personName: 'Wilbert “Bebet” Juanson',
            desc: 'Committee Chairman on Gender and Development, Women and Family Affairs, Rules and Ethics and Barangay Affairs',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-bebet.png',
        },
        {
            personID: 6,
            title: 'Kagawad',
            personName: 'Sandee Tolentino',
            desc: 'Committee Chairman on Budget and Appropriations, Ways and Means, Livelihood, Trade and Industry and People’s Participation',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-sandee.png',
        },
        {
            personID: 7,
            title: 'Kagawad',
            personName: 'Ramon “Mamu” Reyes',
            desc: 'Committee Chairman on Senior Citizens Affairs and PWDs and Transportation',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/kagawad-reyes.png',
        },
        {
            personID: 8,
            title: 'SK Chairperson',
            personName: 'Juday Montemayor Santiago',
            desc: 'Committee Chairman on Youth and Sports Development and SK Federation President',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/sk-chair.png',
        },
        {
            personID: 9,
            title: 'Secretary',
            personName: 'Elvira Estanislao',
            desc: 'Description',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/barangay-secretery.png',
        },
        {
            personID: 10,
            title: 'Treasurer',
            personName: 'Jennielyn Tapar Ibay',
            desc: 'Description',
            img: 'https://storage.googleapis.com/barangay-san-roque-public/treasurer.png',
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
                    itemsToShow: 2,
                    itemsToScroll: 1,
                    minWidth: 980,
                },
                {
                    itemsToShow: 3,
                    itemsToScroll: 2,
                    minWidth: 1480,
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
