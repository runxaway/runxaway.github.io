import React, { useEffect } from 'react';

import styles from './MainPage.module.scss';

import githubIcon from '../images/githubIcon.svg';

import headerNoise from '../images/HNoise.png';
import AllNoise from '../images/AllNoise.png';

import star1 from '../images/Stars/star1.svg';
import star2 from '../images/Stars/star2.svg';
import star3 from '../images/Stars/star3.svg';
import star4 from '../images/Stars/star4.svg';
import star5 from '../images/Stars/star5.svg';
import star6 from '../images/Stars/star6.svg';

const MainPage = (): JSX.Element => {
    const starsField = (image: string) => {
        return (
            <div className={`
                ${image == star1 ? styles.Stars1 : ''}
                ${image == star2 ? styles.Stars2 : ''}
                ${image == star3 ? styles.Stars3 : ''}
                ${image == star4 ? styles.Stars4 : ''}
                ${image == star5 ? styles.Stars5 : ''}
                ${image == star6 ? styles.Stars6 : ''}
            `}
            >
                {Array.from(Array(14).keys())
                    .map((index) => {
                        return (
                            <img
                                key={index}
                                className={`
                                    ${styles.Hover}
                                    ${image == star1 ? styles.Star1 : ''}
                                    ${image == star2 ? styles.Star2 : ''}
                                    ${image == star3 ? styles.Star3 : ''}
                                    ${image == star4 ? styles.Star4 : ''}
                                    ${image == star5 ? styles.Star5 : ''}
                                    ${image == star6 ? styles.Star6 : ''}
                                `}
                                src={image}
                            />
                        );
                    })}
            </div>
        );
    };

    return (
        <div className={styles.Wrapper}>
            <img
                className={styles.AllNoise}
                src={AllNoise}
            />
            <header className={styles.TopBar}>
                <h1 className={styles.Runaway}>runaway</h1>
                <div className={styles.TopContainer}>
                    <h1 className={styles.Email}>adsharnin@gmail.com</h1>
                    <img
                        className={styles.GitIcon}
                        src={githubIcon}
                    />
                </div>
            </header>
            <img
                className={styles.HeaderNoise}
                src={headerNoise}
            />
            <h1 className={styles.Hello}>Hey! I'm</h1>
            <h1 className={styles.HelloTitle}>Alexander Sharnin</h1>
            <h1 className={styles.DescriptionTitle}>
                I’m a UI/UX designer
                <br></br>
                & front-end web developer
            </h1>
            {starsField(star1)}
            {starsField(star2)}
            {starsField(star3)}
            {starsField(star4)}
            {starsField(star5)}
            {starsField(star6)}
            <div className={styles.Bottom}>
                <h1 className={styles.SkillsTitle}>Skills</h1>
            </div>
        </div>
    );
};

export default MainPage;