import React, { useRef } from 'react';

import styles from './MainPage.module.scss';

import headerNoise from '../images/HNoise.png';
import ANoise from '../images/AllNoise.png';

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
    const headPoint = useRef<HTMLHeadingElement>(null);

    const scrollUp = () => {
        headPoint.current?.scrollIntoView({behavior: 'smooth'});
    }

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
        <div ref={headPoint} className={styles.Wrapper}>
            <img
                className={styles.AllNoise}
                src={ANoise}
            />
            <header className={styles.TopBar}>
                <div
                    className={styles.Runaway}
                    onClick={scrollUp}
                >
                    <div className={styles.Letter}>r</div>
                    <div className={styles.Letter}>u</div>
                    <div className={styles.Letter}>n</div>
                    <div className={styles.Letter}>a</div>
                    <div className={styles.Letter}>w</div>
                    <div className={styles.Letter}>a</div>
                    <div className={styles.Letter}>y</div>
                </div>
                <div className={styles.TopContainer}>
                    <a href='mailto:adsharnin@gmail.com' className={styles.Email}>adsharnin@gmail.com</a>
                    <div className={styles.GitWrap}>
                        <a href='https://github.com/runxaway' target="_blank" className={styles.GitIcon}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 0.283703C5.14625 0.283703 0 5.42995 0 11.7837C0 16.8725 3.29187 21.1706 7.86312 22.6943C8.43812 22.795 8.65375 22.45 8.65375 22.1481C8.65375 21.875 8.63938 20.9693 8.63938 20.0062C5.75 20.5381 5.0025 19.3018 4.7725 18.655C4.64313 18.3243 4.0825 17.3037 3.59375 17.0306C3.19125 16.815 2.61625 16.2831 3.57938 16.2687C4.485 16.2543 5.13187 17.1025 5.3475 17.4475C6.3825 19.1868 8.03563 18.6981 8.69688 18.3962C8.7975 17.6487 9.09938 17.1456 9.43 16.8581C6.87125 16.5706 4.1975 15.5787 4.1975 11.18C4.1975 9.92933 4.64312 8.89433 5.37625 8.08933C5.26125 7.80183 4.85875 6.62308 5.49125 5.04183C5.49125 5.04183 6.45438 4.73995 8.65375 6.22058C9.57375 5.96183 10.5513 5.83245 11.5288 5.83245C12.5063 5.83245 13.4838 5.96183 14.4038 6.22058C16.6031 4.72558 17.5662 5.04183 17.5662 5.04183C18.1987 6.62308 17.7962 7.80183 17.6812 8.08933C18.4144 8.89433 18.86 9.91495 18.86 11.18C18.86 15.5931 16.1719 16.5706 13.6131 16.8581C14.03 17.2175 14.3894 17.9075 14.3894 18.9856C14.3894 20.5237 14.375 21.76 14.375 22.1481C14.375 22.45 14.5906 22.8093 15.1656 22.6943C19.7081 21.1706 23 16.8581 23 11.7837C23 5.42995 17.8538 0.283703 11.5 0.283703V0.283703Z" fill="currentcolor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
            <img
                className={styles.HeaderNoise}
                src={headerNoise}
            />
            <div className={styles.HelloWrap}>
                <h1 className={styles.Hello}>Hey! I'm</h1>
                <h1 className={styles.HelloTitle}>Alexander Sharnin</h1>
            </div>
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
                <div style={{ 'display': 'flex' }}>
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
                            <a href="https://threejs.org/" target="_blank" className={styles.RowTitle}>three.js</a>
                        </div>
                        <div className={styles.LearnRow}>
                            <img
                                className={styles.StarBlack}
                                src={StarBlack}
                            />
                            <a href="https://p5js.org/" target="_blank" className={styles.RowTitle}>p5.js</a>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.BigStarBlack}
                    // src={BigStarBlack}
                >
                </div>
                <div className={styles.ExpWrapper}>
                    <h1 className={styles.ExpTitle}>Experience</h1>
                    <div className={styles.ExpRow}>
                        <img
                            className={styles.StarWhite}
                            src={StarWhite}
                        />
                        <h1 className={styles.Exph1}>Internship - VibeLab (July 2022 - November 2022)</h1>
                    </div>
                    <h2 className={styles.ExpText}>
                        Successfully completed an internship as a front-end developer in the IT laboratory at Saint Petersburg
                        Electrotechnical University "LETI" -
                        <a href="https://vibelab.etu.ru/" target="_blank" className={styles.VibeLab}>VibeLab</a>.
                        The theme of the project was to create an application - an educational platform.
                    </h2>
                </div>
                <h1 className={styles.Copyright}>Designed and coded by Alexander Sharnin © 2022</h1>
            </div>
        </div>
    );
};

export default MainPage;