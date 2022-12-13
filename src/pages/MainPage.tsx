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

import StarWhite from '../images/StarWhite.svg';
import StarBlack from '../images/StarBlack.svg';
import BigStarBlack from '../images/BigStarBlack.svg';

import HTML5Icon from '../images/HTML5Icon.svg';
import CSS3Icon from '../images/CSS3Icon.svg';
import SASSIcon from '../images/SASSIcon.svg';
import TSIcon from '../images/TSIcon.svg';
import ReactIcon from '../images/ReactIcon.svg';
import WPIcon from '../images/WPIcon.svg';
import Border from '../images/Border.svg';
import AiIcon from '../images/AiIcon.svg';
import FigmaIcon from '../images/FigmaIcon.svg';

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
                    <a href='mailto:adsharnin@gmail.com' className={styles.Email}>adsharnin@gmail.com</a>
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
                <div className={styles.SkillsWrapper}>
                    <h1 className={styles.SkillsTitle}>Skills</h1>
                    <div className={styles.FirstRow}>
                        <div className={styles.HTML5Box}>
                            <img
                                src={HTML5Icon}
                            />
                            <h1 className={styles.HTML5Title}>HTML5</h1>
                        </div>
                        <div className={styles.CSS3Box}>
                            <img
                                src={CSS3Icon}
                            />
                            <h1 className={styles.CSS3Title}>CSS3</h1>
                        </div>
                        <div className={styles.SassBox}>
                            <img
                                src={SASSIcon}
                            />
                            <h1 className={styles.SassTitle}>Sass</h1>
                        </div>
                    </div>
                    <div className={styles.SecRow}>
                        <div className={styles.TSBox}>
                            <img
                                src={TSIcon}
                            />
                            <h1 className={styles.TSTitle}>TypeScript</h1>
                        </div>
                        <div className={styles.ReactBox}>
                            <img
                                src={ReactIcon}
                            />
                            <h1 className={styles.ReactTitle}>React</h1>
                        </div>
                        <div className={styles.WPBox}>
                            <img
                                src={WPIcon}
                            />
                            <h1 className={styles.WPTitle}>Webpack</h1>
                        </div>
                    </div>
                    <img
                        className={styles.Border}
                        src={Border}
                    />
                    <div className={styles.ThirdRow}>
                        <div className={styles.AiBox}>
                            <img
                                src={AiIcon}
                            />
                            <h1 className={styles.AiTitle}>Adobe Illustrator</h1>
                        </div>
                        <div className={styles.FigmaBox}>
                            <img
                                src={FigmaIcon}
                            />
                            <h1 className={styles.FigmaTitle}>Figma</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.Learn}>
                    <h1 className={styles.LearnTitle}>Currently learning</h1>
                    <div className={styles.LearnRow}>
                        <img
                            className={styles.StarBlack}
                            src={StarBlack}
                        />
                        <a href='https://threejs.org/' className={styles.RowTitle}>three.js</a>
                    </div>
                    <div className={styles.LearnRow}>
                        <img
                            className={styles.StarBlack}
                            src={StarBlack}
                        />
                        <a href='https://p5js.org/' className={styles.RowTitle}>p5.js</a>
                    </div>
                </div>
                <img
                    className={styles.BigStarBlack}
                    src={BigStarBlack}
                />
                <div className={styles.ExpWrapper}>
                    <h1 className={styles.ExpTitle}>Experience</h1>
                    <div className={styles.ExpRow}>
                        <img
                            className={styles.StarWhite}
                            src={StarWhite}
                        />
                        <h1 className={styles.Exph1}>Internship - VibeLab (July 2022 - November 2022)</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;