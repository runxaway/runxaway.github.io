import React from 'react';

import styles from './MainPage.module.scss';

import githubIcon from '../images/githubIcon.svg'
import headerNoise from '../images/HNoise.png'

const MainPage = (): JSX.Element => {
    return (
        <div className={styles.Wrapper}>
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
        </div>
    );
};

export default MainPage;